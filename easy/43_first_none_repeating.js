export const first_none_repeating=(str)=>{
    for (let i = 0; i <= str.length-2; i++) 
    {
     if(str[i].toLowerCase()==str[i+1].toLowerCase())   return str[i]       
    }                      
    
}