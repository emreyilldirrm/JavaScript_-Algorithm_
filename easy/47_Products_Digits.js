export const Products_Digits=(num)=>{
    console.log(num);
    let carpanlar=[];
    
    for (let i = 0; i < num; i++) {
        num % i == 0?carpanlar.push(i):"";
        
    }
    console.log(carpanlar); 

    let carpanlarinOrtaDegerleri= (carpanlar.length)/2;
    console.log(carpanlar[Math.floor(carpanlarinOrtaDegerleri)],carpanlar[(Math.floor(carpanlarinOrtaDegerleri))+1]);
    return ((carpanlar[Math.floor(carpanlarinOrtaDegerleri)].toString().length + carpanlar[(Math.floor(carpanlarinOrtaDegerleri))+1].toString().length));
   
    


}