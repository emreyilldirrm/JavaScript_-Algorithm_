export const offline_minimum=(arr)=>{
    let E_Sayisi=0;
    let Son_E_indexi=0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]=="E"){
            E_Sayisi++;
            Son_E_indexi=[i];
        }
        
    }
    console.log(E_Sayisi+" "+Son_E_indexi)
    
    let newarr=[];
    newarr=arr.splice(0,Son_E_indexi).filter(char=>char!="E");
    newarr.sort(function (a,b) {return a - b})

    return newarr.slice(0,E_Sayisi)
}
// ["5","4","6","E","1","7","E","E","3","2"]