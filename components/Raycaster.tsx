"use client";

import { useEffect, useRef } from "react";

const W = 128;
const H = 64;
const FRAME_MS = 1000 / 24;

const MAP = [
  "################",
  "#......#.......#",
  "#.####.#.#####.#",
  "#.#......#...#.#",
  "#.#.####.#.#.#.#",
  "#...#%%#...#...#",
  "###.#%%#####.###",
  "#...#......#...#",
  "#.###.####.###.#",
  "#.....#%%#.....#",
  "#.###.#%%#.###.#",
  "#.#...####...#.#",
  "#.#.#......#.#.#",
  "#...#.####.#...#",
  "#.###......###.#",
  "################",
];

const cell = (x: number, y: number) => MAP[y]?.[x] ?? "#";
const isOpen = (x: number, y: number) => cell(Math.floor(x), Math.floor(y)) === ".";

const BAYER = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
].map((row) => row.map((v) => (v + 0.5) / 16));

const INK = [184, 239, 101]; // --vs-brand-lime
const ACCENT = [139, 124, 246]; // --vs-brand-violet
const BG = [23, 27, 36]; // --vs-brand-graphite

const normalize = (a: number) => Math.atan2(Math.sin(a), Math.cos(a));

function render(image: ImageData, px: number, py: number, angle: number) {
  const { data } = image;
  const dirX = Math.cos(angle);
  const dirY = Math.sin(angle);
  const planeX = -dirY * 0.7;
  const planeY = dirX * 0.7;

  for (let x = 0; x < W; x++) {
    const camera = (2 * x) / W - 1;
    const rayX = dirX + planeX * camera;
    const rayY = dirY + planeY * camera;
    let mapX = Math.floor(px);
    let mapY = Math.floor(py);
    const deltaX = Math.abs(1 / rayX);
    const deltaY = Math.abs(1 / rayY);
    const stepX = rayX < 0 ? -1 : 1;
    const stepY = rayY < 0 ? -1 : 1;
    let sideX = (rayX < 0 ? px - mapX : mapX + 1 - px) * deltaX;
    let sideY = (rayY < 0 ? py - mapY : mapY + 1 - py) * deltaY;
    let side = 0;
    let wall = ".";
    while (wall === ".") {
      if (sideX < sideY) {
        sideX += deltaX;
        mapX += stepX;
        side = 0;
      } else {
        sideY += deltaY;
        mapY += stepY;
        side = 1;
      }
      wall = cell(mapX, mapY);
    }
    const dist = Math.max(0.05, side === 0 ? sideX - deltaX : sideY - deltaY);
    const hit = side === 0 ? py + dist * rayY : px + dist * rayX;
    const u = hit - Math.floor(hit);
    const height = H / dist;
    const top = (H - height) / 2;
    const light = (1 / (1 + dist * 0.3)) * (side === 0 ? 1 : 0.68);
    const ink = wall === "%" ? ACCENT : INK;

    for (let y = 0; y < H; y++) {
      let value = 0;
      let color = INK;
      if (y >= top && y < top + height) {
        const v = (y - top) / height;
        const course = Math.floor(v * 5);
        const mortar = (v * 5) % 1 < 0.1 || (u * 2 + course * 0.5) % 1 < 0.05;
        value = light * (mortar ? 0.3 : 1);
        color = ink;
      } else if (y > H / 2) {
        value = 0.34 / (1 + (H / (2 * y - H)) * 0.55);
      }
      const on = value > BAYER[y & 3][x & 3];
      const rgb = on ? color : BG;
      const i = (y * W + x) * 4;
      data[i] = rgb[0];
      data[i + 1] = rgb[1];
      data[i + 2] = rgb[2];
      data[i + 3] = 255;
    }
  }
}

export function Raycaster({ label }: { label: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const image = ctx.createImageData(W, H);
    const keys = new Set<string>();
    const player = { x: 1.5, y: 1.5, angle: 0 };
    let target = { x: 2, y: 1 };
    let from = { x: 1, y: 1 };
    let lastInput = -Infinity;
    let frame = 0;
    let last = 0;
    let visible = true;

    const pickTarget = () => {
      const here = { x: Math.floor(player.x), y: Math.floor(player.y) };
      const options = [
        { x: here.x + 1, y: here.y },
        { x: here.x - 1, y: here.y },
        { x: here.x, y: here.y + 1 },
        { x: here.x, y: here.y - 1 },
      ].filter((c) => cell(c.x, c.y) === ".");
      const forward = options.filter((c) => c.x !== from.x || c.y !== from.y);
      const pool = forward.length ? forward : options;
      from = here;
      target = pool[Math.floor(Math.random() * pool.length)] ?? here;
    };

    const autopilot = (dt: number) => {
      const tx = target.x + 0.5;
      const ty = target.y + 0.5;
      const dx = tx - player.x;
      const dy = ty - player.y;
      if (Math.hypot(dx, dy) < 0.06) {
        player.x = tx;
        player.y = ty;
        pickTarget();
        return;
      }
      const diff = normalize(Math.atan2(dy, dx) - player.angle);
      player.angle += Math.sign(diff) * Math.min(Math.abs(diff), 2.6 * dt);
      if (Math.abs(diff) < 0.3) {
        const step = Math.min(1.5 * dt, Math.hypot(dx, dy));
        player.x += Math.cos(player.angle) * step;
        player.y += Math.sin(player.angle) * step;
      }
    };

    const manual = (dt: number) => {
      const has = (...codes: string[]) => codes.some((c) => keys.has(c));
      if (has("ArrowLeft", "KeyA")) player.angle -= 2.4 * dt;
      if (has("ArrowRight", "KeyD")) player.angle += 2.4 * dt;
      const move = (has("ArrowUp", "KeyW") ? 1 : 0) - (has("ArrowDown", "KeyS") ? 1 : 0);
      if (!move) return;
      const nx = player.x + Math.cos(player.angle) * move * 2 * dt;
      const ny = player.y + Math.sin(player.angle) * move * 2 * dt;
      const margin = 0.22;
      if (isOpen(nx + Math.sign(nx - player.x) * margin, player.y)) player.x = nx;
      if (isOpen(player.x, ny + Math.sign(ny - player.y) * margin)) player.y = ny;
    };

    const draw = () => {
      render(image, player.x, player.y, player.angle);
      ctx.putImageData(image, 0, 0);
    };

    const tick = (now: number) => {
      frame = 0;
      if (now - last >= FRAME_MS) {
        const dt = Math.min((now - last) / 1000, 0.1);
        last = now;
        if (keys.size) {
          manual(dt);
          lastInput = now;
        } else if (!reduced && now - lastInput > 3000) {
          if (lastInput !== -Infinity) {
            lastInput = -Infinity;
            target = { x: Math.floor(player.x), y: Math.floor(player.y) };
          }
          autopilot(dt);
        }
        draw();
      }
      schedule();
    };

    const schedule = () => {
      if (!frame && visible && !document.hidden && (!reduced || keys.size)) {
        frame = requestAnimationFrame(tick);
      }
    };

    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (!/^(Arrow(Up|Down|Left|Right)|Key[WASD])$/.test(event.code)) return;
      event.preventDefault();
      keys.add(event.code);
      last = performance.now();
      schedule();
    };
    const onKeyUp = (event: KeyboardEvent) => keys.delete(event.code);
    const onBlur = () => keys.clear();
    const onVisibility = () => {
      last = performance.now();
      if (document.hidden) stop();
      else schedule();
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      last = performance.now();
      if (visible) schedule();
      else stop();
    });

    canvas.addEventListener("keydown", onKeyDown);
    canvas.addEventListener("keyup", onKeyUp);
    canvas.addEventListener("blur", onBlur);
    document.addEventListener("visibilitychange", onVisibility);
    observer.observe(canvas);

    draw();
    schedule();

    return () => {
      stop();
      observer.disconnect();
      canvas.removeEventListener("keydown", onKeyDown);
      canvas.removeEventListener("keyup", onKeyUp);
      canvas.removeEventListener("blur", onBlur);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="screen-canvas"
      width={W}
      height={H}
      tabIndex={0}
      aria-label={label}
    />
  );
}
