export const supertIncreasing=(arr)=>{
    let sum=0;
    for (let i = 1; i < arr.length; i++) {
        sum=toplambironceki(arr,i)
        console.log(arr[i] + " - " +sum)
         if(arr[i] < sum) return false;
    }
 return true
}
const toplambironceki=(arr,index)=>{
    let sum=0;
    for (let j = 0; j < index; j++) {
        sum +=arr[j];
        
    }
    return sum
}