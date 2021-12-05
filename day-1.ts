import { getInputFromFile } from "./input";

const data: string = getInputFromFile(1);

// part a
const timesIncreased: number = data
  .split("\n")
  .map(value => parseInt(value, 10))
  .reduce(
    (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: number[]
    ) => {
      const next = currentIndex + 1;
      // console.log(next, array.length)
      if (next < array.length) {
      console.log(`${array[next]}  > ${currentValue}`)
        if (array[next] > currentValue) {
          previousValue++;
        }
      }

      return previousValue;
    },
    0
  );

console.log('Day 1 part A: ', timesIncreased);

// part b

const timesSumIncreased = 0;

console.log('Day 1 part B: ', timesSumIncreased);
