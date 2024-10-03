export const three_sum = (arr, num) => {
    arr = arr.sort((a, b) => a - b);
    let subSets = [];
  
    for (let i = 0; i < arr.length - 2; i++) {
      if (arr[i] != arr[i - 1]) {
    
      let left = i + 1;
      let right = arr.length - 1;
  
      while (left < right) {
        let currentsum = arr[i] + arr[left] + arr[right];
        if (currentsum > num) {
          right--;

        } else if (currentsum < num) {
          left++;

        } else if (currentsum === num) {
          subSets.push([arr[i], arr[left], arr[right]]);
          while (arr[right] == arr[right - 1]) right--;
          while (arr[left] == arr[left + 1]) left++;
          left++;
          right--;
        }
      }
      
    }
    }
  
    return subSets;
  };
  