import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function hexToRgb(hex: string) {
  const cleanHex = hex.replace(/^#/, "");

  const normalizedHex =
    cleanHex.length === 3
      ? cleanHex
          .split("")
          .map((char) => char.repeat(2))
          .join("")
      : cleanHex;

  const r = parseInt(normalizedHex.substring(0, 2), 16);
  const g = parseInt(normalizedHex.substring(2, 4), 16);
  const b = parseInt(normalizedHex.substring(4, 6), 16);

  return [r, g, b];
}

export function remapValue(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
) {
  if (inMax === inMin) return outMin;
  return Math.max(((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin, 0);
}
