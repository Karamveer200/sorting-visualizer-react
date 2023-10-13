const timer = (ms) => new Promise((res) => setTimeout(res, ms));

export const bubbleSort = async (arr, setDataArray, delay) => {
  const newArr = [...arr];

  for (var i = 0; i < newArr.length; i++) {
    // Last i elements are already in place
    for (var j = 0; j < newArr.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (newArr[j] > newArr[j + 1]) {
        // If the condition is true
        // then swap them
        var temp = newArr[j];
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = temp;

        setDataArray([...newArr]);
        await timer(delay);
      }
    }
  }
};

export const insertionSort = async (originalArray, setDataArray, delay) => {
  const arr = [...originalArray];
  const n = arr.length;

  let i, key, j;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;

    /* Move elements of arr[0..i-1], that are  
        greater than key, to one position ahead  
        of their current position */
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;

      setDataArray([...arr]);
      await timer(delay);
    }
    arr[j + 1] = key;
  }
};
