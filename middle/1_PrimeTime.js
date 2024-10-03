export const prime_Time = (num) => {

    let flag = true
    if (num <= 1) return false
    if (num == 2) return true

    for (let i = 2; i < Math.ceil(num / 2); i++) {
        if (num % i == 0) return false
    }
    return true
}