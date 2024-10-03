export const CommandLine = (str) => {

    let space_Location = []
    let arrayInEqual = []

    for (let i = 0; i < str.length; i++) {
        if (str[i] == "=") {
            arrayInEqual.push(i)
        }
    }

    let SpaceCharacter = []
    for (let i = arrayInEqual.length; i > 0; i--) {
        let arrayInSpace = []
        for (let k = arrayInEqual[i]; k > arrayInEqual[i - 1]; k--) {

            if (str[k] == " ") {
                arrayInSpace.push(k)

            }
        }
        SpaceCharacter.push(arrayInSpace)
    }

    console.log(SpaceCharacter)

    SpaceCharacter.forEach((index) => {
        index.length !== 0 && space_Location.push(index[0])
    })

    space_Location.sort((a, b) => a - b)
    space_Location.unshift(0)
    space_Location.push(str.length)

    console.log(space_Location)

    let sections = ""
    for (let i = 0; i < space_Location.length - 1; i++) {
        sections += countLetters(str.slice(space_Location[i], space_Location[i + 1]).replace(/^\s+|\s+$/gm, ''))
    }
    return sections
}

const countLetters = (str) => {
    return str.split('=')[0].length + "=" + str.split('=')[1].length + " "
}