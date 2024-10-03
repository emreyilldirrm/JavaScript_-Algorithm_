export const ArithGeo = (arr)=>{
    let diff= arr[1] - arr[0]
    let geo= arr[1] / arr[0]
    let isAritmatic=true
    let isGeo=true
    for (let i = 2; i < arr.length; i++) {
        if(arr[i] - arr[i-1] != diff) {
            isAritmatic=false;
        }
        if(arr[i] / arr[i-1] != geo){
            isGeo=false
        } 
                
    }
    
    
    if(isAritmatic){
    return "aritmatik"
    }
    else if(isGeo){
    return "geometrik"
    }
    else{
        return -1
    }
}