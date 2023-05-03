function bubbleSort(array: number[]): number[] {
    const n = array.length;
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          // swap array[j] and array[j+1]
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return array;
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log(`unsorted array - ${unsortedArray}`);
const sortedArray = bubbleSort(unsortedArray);
console.log(`sorted array - ${sortedArray}`);