export const array_Matching=(arr)=>{
   
    let arr1=arr[0].match(/\d+/gi)
    let arr2=arr[1].match(/\d+/gi)

    let uzunluk="esit"
    if(arr1.length > arr2.length) uzunluk="birinci";
    if(arr1.length < arr2.length) uzunluk="ikinci";

    let newArr=[];
    if(uzunluk == "esit") newArr= createarr(arr1,arr2,arr1.length);
    if(uzunluk=="birinci") newArr= createarr(arr1,arr2,arr2.length,"birinci");
    if(uzunluk=="ikinci") newArr= createarr(arr1,arr2,arr1.length,"ikinci");
         
    return newArr
    
    
}
const createarr=(a,b,length,balance="esit")=>{
    let arr=[];
    for(let i=0 ; i < length ; i++){
        arr.push(parseFloat(a[i]) + parseFloat(b[i]));
    }

    if(balance=="esit") return arr;
    if(balance=="birinci") return arr.concat(a.slice(-(a.length - b.length)));
    if(balance=="ikinci") return arr.concat(b.slice(-(b.length - a.length)));
    


}