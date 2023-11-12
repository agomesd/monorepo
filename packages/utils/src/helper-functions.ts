import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export type Theme = "light" | "dark";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
