export const  find_intersection =(arr)=>{
 let intersection=[];

 let kume_1=arr[0].replace(/\s/g,"").split(",")
 let kume_2=arr[1].replace(/\s/g,"").split(",")
kume_2.forEach(element => {
  if(kume_1.includes(element)){
    intersection.push(element);
  }
});

if(intersection != null){

    return true
}
else{
    return false
}
}
// ["1 , 2 , 3 , 4"," 4 , 1 , 24 "]