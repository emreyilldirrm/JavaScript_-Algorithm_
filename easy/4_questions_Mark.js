export const  questions_Mark = (str) => {
if(str.length<5){
    return false
}

    let stri = str.replace(/[^0-9?]/g , "")
    let arr=stri.split("")


    let sums=[]
    let sum=0
    let iterator=0
    arr.forEach(item => {
        if(item != "?"){
            sum = parseInt(item) + parseInt(arr[iterator + 4])
            sums.push(sum)
        }
        iterator++
    });
    
   return sums.includes(10) ? true : false
}
// "aaasf7?????7???4"