export const number_Addition=(str)=>{
    
    let numArr=[]
    let last=0;
    let newarr=str.split("")
    let sum=0;

    for (let i = 0; i < newarr.length; i++) {
        last=numArr.length-1;
        if((/[^1-9]/).test(newarr[i])){
            numArr.push(newarr[i])
        }else if(numArr.length==0){
                    numArr.push(newarr[i])
                    }else if((/[1-9]/).test(newarr[last]))
                         {       
                         numArr[last]= newarr[i]+newarr[last];      
                        }else{
                         numArr.push(newarr[i])
                    }

                }

                console.log(numArr)
              
                numArr.forEach(item => {
                    item.match((/\d+/))? sum+=parseInt(item):"";
                   
                });
              return sum
            }
      
        
    
    
   
