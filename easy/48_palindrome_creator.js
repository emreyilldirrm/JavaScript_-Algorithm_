export const palindrome_creator=(str)=>{

    const strippedStr =str.replace(/[^a-zA-z]/g,"").toLowerCase();
    if(ispalindrome(strippedStr)) return "Cümle zaten palindrome"

    let removedLettes=[];
    
    let [removed , newStr] = removedLetter(strippedStr)
    removedLettes.push(removed);
 
    if(ispalindrome(newStr)== true){
        return removed
    }else{
        let [removed2 , newStr2 ] = removedLetter(newStr)
        removedLettes.push(removed2)

        if(ispalindrome(newStr2)== true){
            
            return removedLettes.join("")
        }else{
             return "cumle palindrome değil"   
        }

    }


}

function ispalindrome(word){
    return word.split("").reverse("").join("") === word ? true:false; 
}
function removedLetter(str){
    let it = Math.floor((str.length)/2);
    let arr = str.split("");
    for (let i = 0; i < it; i++) {
        if(str[i] != str[str.length-1-i]){
            arr.splice(i,1);
            return [ str[i] , arr.join("") ]
    }
}
}

