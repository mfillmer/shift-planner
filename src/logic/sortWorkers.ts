import type { Worker } from "./types";

/**
 * sort Workers by their hourBalance
 */

export const sortWorkers = (workers: Worker[]): Worker[] =>
  workers.slice().sort((a, b) => a.hourBalance - b.hourBalance);
