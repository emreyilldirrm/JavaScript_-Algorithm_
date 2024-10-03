export const Largest_Pair=(num)=>{
    console.log(num)
    let numAr=num.toString().split("").sort((a,b)=> b-a);
    console.log(numAr) 

   
    let onlarB=numAr[0];
    let birlerB=birlerB_ciftmi(numAr);
    

    if(birlerB==undefined){
        return onlarB %2 == 0 ?
        "sayımız="+numAr[1]+onlarB:
        "verilen sayıların hepsi tektir"
    }else{
         return onlarB+birlerB
    }
}  
const birlerB_ciftmi=(arr)=>{
    let birler;
    for (let i = 1; i < arr.length; i++) {
        if(arr[i]  % 2 == 0 ){
            birler==undefined?birler=arr[i]:"";
        }
        
    }
    return birler
}
