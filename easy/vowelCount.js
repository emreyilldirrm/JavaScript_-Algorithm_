export const vowelCount=(str)=>{
    let i=0;
    [...str].forEach(letter=>{
        if((/[a|e|i|o|u|A|E|O|U|I|]/).test(letter)){
            i++;
        }
    })
    return i;
}