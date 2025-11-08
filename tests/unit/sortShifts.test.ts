import { describe, it, expect } from "vitest";
import { exampleShifts } from "../data/shifts";
import { sortShifts } from "../../src/logic/sortShifts";

describe("sortShifts", () => {
  it("sorts shifts by duration and by date", () => {
    const sortedShifts = sortShifts(exampleShifts);

    exampleShifts.forEach(({ start, duration }, index) =>
      console.log({ index, duration, start })
    );

    console.log("sorted");

    sortedShifts.forEach(({ start, duration }, index) =>
      console.log({ index, duration, start })
    );

    expect(sortedShifts[0]).toEqual(exampleShifts[0]);
    expect(sortedShifts[1]).toEqual(exampleShifts[3]);
    expect(sortedShifts[2]).toEqual(exampleShifts[5]);
    expect(sortedShifts[3]).toEqual(exampleShifts[7]);
    expect(sortedShifts[4]).toEqual(exampleShifts[9]);
    expect(sortedShifts[5]).toEqual(exampleShifts[11]);
    expect(sortedShifts[6]).toEqual(exampleShifts[13]);
    expect(sortedShifts[7]).toEqual(exampleShifts[15]);
    expect(sortedShifts[8]).toEqual(exampleShifts[17]);
    expect(sortedShifts[9]).toEqual(exampleShifts[1]);
    expect(sortedShifts[10]).toEqual(exampleShifts[4]);
    expect(sortedShifts[11]).toEqual(exampleShifts[6]);
    expect(sortedShifts[12]).toEqual(exampleShifts[8]);
    expect(sortedShifts[13]).toEqual(exampleShifts[10]);
    expect(sortedShifts[14]).toEqual(exampleShifts[12]);
    expect(sortedShifts[15]).toEqual(exampleShifts[14]);
    expect(sortedShifts[16]).toEqual(exampleShifts[16]);
    expect(sortedShifts[17]).toEqual(exampleShifts[18]);
    expect(sortedShifts[18]).toEqual(exampleShifts[2]);
  });
});
