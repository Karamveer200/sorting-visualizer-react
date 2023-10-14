import { colors } from './colors';
import { getBarId } from './helperFunctions';
const timer = (ms) => new Promise((res) => setTimeout(res, ms));

export const bubbleSort = async (arr, setDataArray, delay) => {
  const newArr = [...arr];

  for (var i = 0; i < newArr.length; i++) {
    const innerLoopCondition = newArr.length - i - 1;
    // Last i elements are already in place
    for (var j = 0; j < innerLoopCondition; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration

      const getFirstNumElement = document.getElementById(getBarId(newArr[j].fixedIndex));
      const getSecondNumElement = document.getElementById(getBarId(newArr[j + 1].fixedIndex));
      getFirstNumElement.style.backgroundColor = colors.red;
      getSecondNumElement.style.backgroundColor = colors.red;
      await timer(delay);

      if (newArr[j].value > newArr[j + 1].value) {
        // If the condition is true
        // then swap them
        var temp = newArr[j].value;
        newArr[j].value = newArr[j + 1].value;
        newArr[j + 1].value = temp;

        setDataArray([...newArr]);
      }

      if (j === innerLoopCondition - 1) {
        // Only change color to green when inner loop is comparing last two elements
        // The index with bigger num changes the color
        if (newArr[j].value > newArr[j + 1].value) {
          getFirstNumElement.style.backgroundColor = colors.green;
          getSecondNumElement.style.backgroundColor = colors.lemon;
        } else {
          getSecondNumElement.style.backgroundColor = colors.green;
          getFirstNumElement.style.backgroundColor = colors.lemon;
        }

        // The if below will only be called when i and j are in last iteration
        if (j === 0) {
          getFirstNumElement.style.backgroundColor = colors.green;
          getSecondNumElement.style.backgroundColor = colors.green;
        }
      } else {
        // Change the color to yellow if inner loop is not comparing the last two elements of the array
        getSecondNumElement.style.backgroundColor = colors.lemon;
        getFirstNumElement.style.backgroundColor = colors.lemon;
      }
    }
  }
};

export const insertionSort = async (arr, setDataArray, delay) => {
  const newArr = [...arr];
  const n = newArr.length;

  let i, key, j;
  for (i = 1; i < n; i++) {
    key = newArr[i].value;
    j = i - 1;

    /* Move elements of newArr[0..i-1], that are  
        greater than key, to one position ahead  
        of their current position */
    while (j >= 0 && newArr[j].value > key) {
      const getFirstNumElement = document.getElementById(getBarId(newArr[j].fixedIndex));
      const getSecondNumElement = document.getElementById(getBarId(newArr[j + 1].fixedIndex));
      getFirstNumElement.style.backgroundColor = colors.red;
      getSecondNumElement.style.backgroundColor = colors.red;
      await timer(delay);

      newArr[j + 1].value = newArr[j].value;
      j = j - 1;

      setDataArray([...newArr]);
    }
    newArr[j + 1].value = key;
  }
};
