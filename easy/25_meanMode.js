export const meanMode=(arr)=>{
    console.log(arr)
    let sum=0;
    let obj={};
    let max=0;
    let mode=0;

    arr.forEach(num => {
        sum +=num;
        (num in obj)?obj[num]=obj[num]+1:obj[num]=1;
        
    });
    console.log(obj) 
    
    max=Math.max(...Object.values(obj))
    console.log(max)

    for (let j in obj) {
      obj[j] === max?mode=j:"";
        }
        console.log(mode)

        if(max == mode){
            return 1
        }else{
            return 0
        }
      
    
}
