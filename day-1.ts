import { getInputFromFile } from "./input";

const data: string = getInputFromFile(1);

// part a
const timesIncreased: number = data
  .split("\n")
  .map((value) => parseInt(value, 10))
  .reduce(
    (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: number[]
    ) => {
      const next = currentIndex + 1;
      if (next <= array.length) {
        if (array[next] > currentValue) {
          previousValue++;
        }
      }

      return previousValue;
    },
    0
  );

console.log("Day 1 part A: ", timesIncreased);

// part b
const timesSumIncreased = data
  .split("\n")
  .map((value) => parseInt(value, 10))
  .reduce(
    (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: number[]
    ) => {
      const window = 3;
      const currentWindow = currentIndex + window;
      const nextWindow = currentIndex + 1 + window;

      if (currentWindow <= array.length && nextWindow <= array.length) {
        const sumCurrentWindow = array
          .slice(currentIndex, currentWindow)
          .reduce((m, v) => m + v);
        const sumNextWindow = array
          .slice(currentIndex + 1, nextWindow)
          .reduce((m, v) => m + v);

        if (sumNextWindow > sumCurrentWindow) {
          previousValue++;
        }
      }

      return previousValue;
    },
    0
  );

console.log("Day 1 part B: ", timesSumIncreased);
