export  const divisionStringified =(n1,n2)=>{
     const division =Math.floor(n1/n2).toString();
     
     if(division.length < 4) return division
    
     let newArr= division.split("").reverse()
     console.log(newArr)
     let arr=[];
     let j=0;
  
    for (let i = 0; i < newArr.length; i++) {
        j !=0 && j %3 == 0?arr.push(newArr[i]+","):arr.push(newArr[i]);
        j++
    }
    return arr.reverse().join("")

    
    
    
    }