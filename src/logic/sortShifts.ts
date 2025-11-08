import type { Shift } from "./types";

/** Sort shifts by descending duration and then by date */

export const sortShifts = (shifts: Shift[]): Shift[] => {
  return shifts
    .slice()
    .sort((a, b) => a.start.getTime() - b.start.getTime())
    .sort((a, b) => b.duration - a.duration);
};
