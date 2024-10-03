export const palinrome_Two=(str)=>{
    let regex=str.replace(/[^A-Za-z]/g,"").toLowerCase();
    
    let reverseStr=regex.split("").reverse().join("");
    console.log(regex);
    console.log(reverseStr);

    return regex==reverseStr?true:false;

    
}