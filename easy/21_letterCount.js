export const letterCount =(str) => {
const arr=  str.replace(/[^a-zA-Z\s]/g,"").toLowerCase().trim().split(" ")
let kelimeler=[];
let maxfreqs=[];

for (let i = 0; i < arr.length; i++) {
    let obj={};
    arr[i].split("").forEach(harf => {
        
        harf in obj ? obj[harf] +=1:obj[harf] =1;
       
      })
   
      kelimeler.push(obj)
}


kelimeler.forEach(nesne=>{

   maxfreqs.push(Math.max(...Object.values(nesne)))

 })

   let maxval= Math.max(...maxfreqs)

 return maxval < 2 ? -1:
 (arr[maxfreqs.indexOf(maxval)] ?
 arr[maxfreqs.indexOf(maxval)]:
-1
 )
   

}
