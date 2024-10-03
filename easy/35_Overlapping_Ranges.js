
export const Overlapping_Ranges=(arr)=>{
    let kesisim=[];
  let one=  createArr(arr[0],arr[1])
  let two=  createArr(arr[2],arr[3])
    one.forEach(num=>{
       two.indexOf(num)>-1?kesisim.push(num):"";

    })

   
    return kesisim
}
const createArr=(x,y)=>{
    let kume=[];
    for (let i = x; i <= y; i++) {
            kume.push(i)
    }
    return kume;
}