
const multiple = (num) => {
  let arr = num.toString().split("");
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= parseInt(arr[i]);
  }
  return result;
};

export const multicaplepersistence = (num) => {
  let result = num;
  let persistence = 0;
  while (result >= 10) {
    result = multiple(result);
    persistence++;
  }
  return persistence;
};
