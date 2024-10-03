// export const simple_Symbols= (str) => {
//  let control=[];
//  const arr=str.split("")

//  arr.forEach(char => {
//     if((/[a-zA-Z]/).test(char)){
//     if( arr[arr.indexOf(char)+1] === "+" && arr[arr.indexOf(char)-1] === "+" ){
//         control.push(1)
//     }else{
//         control.push(0)
//         }
//     }
  
//  });
    

// console.log(control)
// if(control.includes(0)){ 
//     return false
// }
// else{
//     return true
// }

// }
//------------------------------------------------------
export const simple_Symbols= (str) => {
    let control=[];
    let arr=str.split('')
    str.replace(/[a-zA-Z]/g ,char=> {
        
        if( arr[arr.indexOf(char)+1] === "+" && arr[arr.indexOf(char)-1] === "+" ){
            control.push(1)
        }else{
            control.push(0)
            }
    })
    
   console.log(control)
   if(control.includes(0)){ 
       return false
   }
   else{
       return true
   }
   
   }
   