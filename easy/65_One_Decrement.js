// bir basamak kendinden önceki bir basamaktan küçükse bir attır
export const OneDecrement = (arr) => {
    console.log(arr)
    let count = 0
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] < arr[i]) {
            console.log(arr[i - 1], arr[i])
            count++
        }

    }
    return count
}