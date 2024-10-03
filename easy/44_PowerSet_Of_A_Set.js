export const PowerSet_Of_A_Set_Subsets_Of_A_Set=(arr=[])=>{
    const nOSS=2**arr.length;
    
    let results = [];
    
    for (let i = 0; i < nOSS; i++) {
        let tempbinary= Number(i).toString(2)
        
        let binary="0".repeat(arr.length-tempbinary.length)+tempbinary;
        console.log(binary)
        let tempValue=[];
        for (let j = 0; j < arr.length; j++) {

            if(binary[j] === "1") tempValue +=arr[j];
            
        }
        results.push(tempValue);

        
    }
    return results
     
}