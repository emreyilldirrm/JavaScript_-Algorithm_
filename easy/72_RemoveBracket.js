export const RemoveBrackets = (str) => {
    let list = [];

    for (let x = 0; x < str.length; x++) {
        debugger
        list
        if (str[x] === '(') {
            list.push(str[x]);
        } else if (str[x] === ')') {
            if (list.length > 0 && list[list.length - 1] === '(') {
                debugger
                list.pop();

            } else {
                debugger
                list.push(str[x]);
            }
        }
    }
    debugger
    list
    return list.length;
}