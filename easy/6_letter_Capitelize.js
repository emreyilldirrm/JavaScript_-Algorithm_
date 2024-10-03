export const letter_Capitelize = (str) =>{
    let newStr=[]
    str.split(" ").forEach(word => {
      newStr.push(word.charAt(0).toUpperCase()+word.slice(1,word.lenght))  
    });
    return newStr.join(" ")
}