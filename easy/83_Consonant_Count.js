export const consonantCount = (str) => {
    let count = 0;

    let regex = /[^aeiouAEIOU]/

    for (let i = 0; i < str.length; i++) {
        regex.test(str[i]) && count++
    }
    return count

}