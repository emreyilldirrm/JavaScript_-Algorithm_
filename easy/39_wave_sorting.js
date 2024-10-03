export const wavesorting=(arr)=>{
    let wvs=[];
   arr.sort((a,b) =>  a-b );
   console.log(arr)
   
   let uniqueArray = [...new Set(arr)];
 

    for (let i = 0; i < uniqueArray.length; i+=2) {
       uniqueArray[i+1] != undefined ? wvs.push(uniqueArray[i+1]) :null;
        wvs.push(uniqueArray[i])
        
    }
    return wvs
}
