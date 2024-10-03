export const Number_Stream = (str) => {
    let deger=false;
    let array = str.match(/(\d)\1+/g);
   if(array){
        for (let i = 0; i < array.length; i++) {
            array[i][0]==array[i].length?deger=true:null;    
        }
        return deger
    }else{ 
        return false;
    }
  };
  