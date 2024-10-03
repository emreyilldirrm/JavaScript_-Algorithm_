export const distinctCharacter = (str) => {
    //str aaabbbb,bcvtyişlo
    const charArr = []

    for (let i = 0; i < str.length; i++) {
        if (charArr.indexOf(str[i]) == -1) charArr.push(str[i])
    }

    console.log(str)

    return charArr.length > 10 ? true : false
}