export const closest_enemy=(arr)=>{
    let me=arr.indexOf(1)
    let target=[]
    let fark=[]

    arr.forEach((n,i) => {
        n==2?target.push(i):""
    });
    
    if (target.length===0) return undefined

    target.forEach(n=>{
       fark.push(Math.abs(n-me))
    }) 
    return Math.min(...fark)
}