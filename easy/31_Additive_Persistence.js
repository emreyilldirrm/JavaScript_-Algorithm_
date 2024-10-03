export const additive_Persistence=(num)=>{
 
    if(num < 10) return 0;

    let sumOfDigits = sum(num)
    let step=1;

    while(sumOfDigits > 9){
        step++;
        sumOfDigits =sum(sumOfDigits)
    }

   return step
  
   
}
const sum=(n)=>{
    let sum =0;
    const arr=n.toString().split("")
    for (let i = 0; i < arr.length; i++) {
     sum += parseInt(arr[i]);
        
    }
    return sum
}