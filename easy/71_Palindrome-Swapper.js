export const Palindrome_Swapper = (str) => {
    if (str == str.split("").reverse().join("")) return "palindrome"
    for (let i = 0; i < str.length; i++) {
        debugger
        let arr = str.split("")
        let temp1 = arr[i]
        let temp2 = arr[i + 1]

        arr[i] = temp2
        arr[i + 1] = temp1
        const newstr = arr.join("")
        if (newstr == newstr.split("").reverse().join("")) return "is palindrome"
    }
    return str


}

// export const Palindrome_Swapper = (str) => {
//     const isPalindrome = (s) => s === s.split("").reverse().join("");

//     if (isPalindrome(str)) return "palindrome";

//     for (let i = 0; i < str.length - 1; i++) {
//         // Swap iki karakter
//         let arr = str.split("");
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Destructuring ile swap
//         const newStr = arr.join("");

//         if (isPalindrome(newStr)) return "is palindrome";
//     }

//     return str;
// };