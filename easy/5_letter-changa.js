export const letter_change = (str) =>{
    // return str.charCodeAt()
    // return String.fromCharCode("A".charCodeAt()+1)

  let newStr=str.toLowerCase().replace(/[a-z]/g,(char)=>{
        if(char === "z"){
            return "a"
        }
        else{
            return String.fromCharCode(char.charCodeAt()+1)
        }
    })

    let voWelCapitalize=newStr.replace(/a|e|i|o|u|/g,(char)=>{    
        return char.toUpperCase();
    })
    return voWelCapitalize
} 
