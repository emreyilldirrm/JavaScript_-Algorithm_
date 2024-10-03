export const happy_Number = (num) => {
    let sum = sumTheDigitsSquare(num)
    if (sum === 1) return true
    let countDown = 8

    while (sum != 1 && countDown > 0) {
        sum = sumTheDigitsSquare(sum)
        countDown--
    }

    return sum === 1 ? true : false
}

const sumTheDigitsSquare = (num) => {
    let digitCount = num.toString().length

    let sum = 0;
    for (let i = 0; i < digitCount; i++) {
        sum += Math.pow(num.toString()[i], 2)
    }
    return sum
}