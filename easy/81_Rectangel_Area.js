export const Rectangel_Area = (arr) => {
    console.log(arr) //['(0 0)', '(3 0)', '(0 2)', '(3 2)']
    let x1 = arr[0][1]
    let y1 = arr[0][3]

    let x2 = arr[1][1]
    let y2 = arr[1][3]

    let x3 = arr[2][1]
    let y3 = arr[2][3]

    let result = Math.abs(((x1 * y2) + (x2 * y3) + (x3 * y1)) - ((y1 * x2) + (y2 * x3) + (y3 * x1)))
    return result
} 