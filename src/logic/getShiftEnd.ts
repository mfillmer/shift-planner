import type { Shift } from "./types";

export const getShiftEnd = (shift: Shift): Date =>
  new Date(shift.start.getTime() + shift.duration * 60 * 60 * 1000);
