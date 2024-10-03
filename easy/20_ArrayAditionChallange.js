export const arrayadition=(arr)=>{
//    const max=Math.max(...arr);
//    let sum=0;
//    arr.splice(arr.indexOf(max),1);
//     arr.forEach(num => {
//         sum +=Number(num)
//     });

//     return sum == max ? true:false

//2. yöntem
let sum=0;
arr.forEach(num => {
    sum +=Number(num)
});
   return sum / 2 == Number(Math.max(...arr))?true:false
}