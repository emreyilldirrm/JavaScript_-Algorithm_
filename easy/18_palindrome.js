export const palindrome = (str) => {
 
    return [...str].reverse().join("") == str ? true : false;;
}