export const secondGreatLow=(arr) => {
let newArr=[];
    arr.forEach(num => {
        !newArr.includes(num) && newArr.push(num)
    });

    newArr.sort((a,b)=>a-b)

    return newArr.length < 2?newArr[0]+"-"+newArr[1]:
    newArr[1]+"-"+newArr[newArr.length-2] 
  

}