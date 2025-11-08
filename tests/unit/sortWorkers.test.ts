import { describe, it, expect } from "vitest";
import { sortWorkers } from "../../src/logic/sortWorkers";
import { exampleWorkers } from "../data/workers";
import { Worker } from "../../src/logic/types";

describe("sortWorkers", () => {
  it("sorts workers by their hourBalance", () => {
    const workers = exampleWorkers;

    const sortedWorkers = sortWorkers(workers);

    expect(sortedWorkers[0].name).toBe("Charlie");
    expect(sortedWorkers[1].name).toBe("Alice");
    expect(sortedWorkers[2].name).toBe("Diana");
    expect(sortedWorkers[3].name).toBe("Eve");
    expect(sortedWorkers[4].name).toBe("Bob");
  });

  it("returns an empty array if no workers are provided", () => {
    const sortedWorkers = sortWorkers([]);
    expect(sortedWorkers).toEqual([]);
  });

  it("handles workers with the same hourBalance, maintaining original order", () => {
    const workers = [
      { name: "Worker A", hourBalance: 5 },
      { name: "Worker B", hourBalance: 0 },
      { name: "Worker C", hourBalance: 5 },
    ] as Worker[];

    const sortedWorkers = sortWorkers(workers);

    expect(sortedWorkers[0].name).toBe("Worker B");
    expect(sortedWorkers[1].name).toBe("Worker A");
    expect(sortedWorkers[2].name).toBe("Worker C");
  });
});
