export const largets_four=(arr)=>{
    console.log(arr) 
    let maxNumber=[]
    for (let i = 0; i < arr.length; i++) {
        maxNumber.push((Math.max(...arr[i])));       
    }
    return maxNumber
}