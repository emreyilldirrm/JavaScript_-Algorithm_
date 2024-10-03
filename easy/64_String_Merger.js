export const String_Merger = (arr) => {
    const [first, second] = arr.split("*")

    let newtext = ""
    let newlenght = 0
    first.length < second.length ? newlenght = first.length : newlenght = second.length

    for (let i = 0; i < newlenght; i++) {
        newtext += first[i] + second[i]

    }
    return newtext
}