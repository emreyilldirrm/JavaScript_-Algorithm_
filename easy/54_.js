export const terazi=(teraziR)=>{
    console.log(teraziR)
    let tR=teraziR[0].replace(/[^1-9]/g,"").split("")
    let liste=[];
    let hedef=0;

    if(tR[0] > tR[1]) {hedef=tR[0] - tR[1]}
    else hedef =(tR[1]) - (tR[0]) 
    
    let array=teraziR[1];
    console.log(array)
    
    array.filter(num=> num == hedef?liste.push(num):"")

    array.forEach((num,index) => {
       let araSayi=array.splice(index,1)
        for (let i = 0; i < array.length; i++) {

            if((num + array[i]) == hedef){
                
                liste.push(num , array[i])
            }  
        }
        array.push(araSayi)
    });
  return liste
    
}