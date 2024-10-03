export const vowelSquare = (arr) => {
    let list = [];
    let listi = [];
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j <= i; j++) {
        if (/a|e|i|o|u/.test(arr[i][j]) && /a|e|i|o|u/.test(arr[i][j + 1])) {
          list.push(arr[i][j]);
          listi.push(i, j);
          if (list.length == 2) {
            return `${listi[0]} ${listi[1]}`;
          }
        }
      }
    }
  
    return undefined;
  };
  