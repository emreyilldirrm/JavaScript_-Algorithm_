export const closest__enemy = (arr) => {
    console.log(arr) 
    let y = 0
    let x = 0
    
    let enemylength = []

    let farky=[]
    let farkx=[]

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr[i].length; j++) {

            if (arr[i][j] === 1) {y=i;x=j;}

            else if (arr[i][j] === 2) {
                enemylength.push(arr[i].length-1)
                farky.push([Math.abs(i-y)])
                farkx.push([Math.abs(j-x)])
            }
        }
    }
    return farkYazdir(farkx,farky,enemylength)
     
}
function farkYazdir(farkx,farky,enemylength){
    let fark="";
    for (let f = 0; f < farkx.length; f++) {
        fark +=`
        y index farkı= ${farky[f]} 
        x index sağ farkı= ${farkx[f]} 
        x index sol farkı=${farkx[f]==enemylength[f]? 1 :0}
        `
        
    }
    return fark
}