function insertionSort(arr: number[]): number[] {
    for (let i = 1; i < arr.length; i++) {
      let j = i;
      while (j > 0 && arr[j - 1] > arr[j]) {
        // Swap arr[j] and arr[j-1]
        const temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        j--;
      }
    }
    return arr;
  }

const unsorted_Array = [3, 1, 4, 5, 9, 2, 6];
console.log(`unsorted array - ${unsorted_Array}`);
const sorted_Array = insertionSort(unsorted_Array);
console.log(`unsorted array - ${sorted_Array}`);