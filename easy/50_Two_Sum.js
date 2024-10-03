export const two_sum=(array,num)=>{
let sum=[];
    array.forEach(ar => {
        for (let i = 0; i < array.length; i++) {
             return ar+array[i]==num?sum.push(ar,array[i]):false
        }

    });
return sum
}