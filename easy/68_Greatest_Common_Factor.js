export const Greatest_Common_Factor = (arr) => {
    const [first, second] = arr

    const min = Math.min(...arr)
    const division = []

    for (let i = 2; i < min; i++) {
        if ((first % i == 0) && (second % i == 0)) {
            division.push(i)
        }
    }
    return Math.max(...division)


}