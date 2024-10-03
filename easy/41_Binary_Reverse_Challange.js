export const Binary_Reverse_Challange=(str)=>{
    
    console.log(str); 
    let binary=Number(str).toString(2);
    binary="0".repeat(8-binary.length)+binary;
    console.log(binary) 

    let decimal=parseInt(binary,2);
    console.log(decimal)
} 