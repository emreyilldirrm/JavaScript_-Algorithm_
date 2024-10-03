export const Equivalent_Key_Presses = (arr) => {

    let firstArr = returnOnlyKeys(arr[0].split(","))
    let secondArr = returnOnlyKeys(arr[1].split(","))

    console.log(firstArr, secondArr)
    return firstArr == secondArr ? true : false
}
const returnOnlyKeys = (strArr) => {

    if (strArr.indexOf('-B') == -1) return strArr

    for (let i = 0; i < strArr.length; i++) {

        if (strArr[i] === '-B' &&
            strArr[i - 1] != '-B' &&
            strArr[i - 1] != undefined) {
            strArr.splice(i - 1, 2)
        }

    }
    return strArr.filter((key => { return key != '-B' })).join(',')

}
