function binarySearch(array: number[], target: number): number {
    let left = 0;
    let right = array.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (array[mid] === target) {
        return mid;
      } else if (array[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1;
  }
  
  // Example usage
  const array:number[] = [1, 3, 5, 7, 9];
  const target:number = 7;
  const index = binarySearch(array, target);
  console.log(`Value ${target} present at index ${index}`); 