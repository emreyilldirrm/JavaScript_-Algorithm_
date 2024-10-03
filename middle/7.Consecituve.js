export const Consecutive = (arr) => {
    console.log(arr.sort((a, b) => { return a - b }))

    let fark = []
    for (let i = 0; i < arr.length - 1; i++) {
        fark.push(arr[i] === arr[i + 1] ? 0 : Math.abs(arr[i] - arr[i + 1]) - 1)
    }

    let top = 0
    fark.forEach(e => {
        top += e
    });


    return `fark ${fark}  top ${top}`
}