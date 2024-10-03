export const Group_Totals = (arr) => {

    var obj = {}

    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] in obj) {
            console.log(arr[i])
            obj[arr[i].split(":")[0]] += Number(arr[i].split(":")[1])
        } else {
            obj[arr[i].split(":")[0]] = Number(arr[i].split(":")[1])
        }
    }

    let result = []
    for (let key in obj) {
        result.push(key + ":" + obj[key])
    }

    result.sort()
    return result
}