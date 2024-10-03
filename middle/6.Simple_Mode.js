export const Simple_Mode = (arr = []) => {
    let obj = {}

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];

        if (obj[element]) {
            obj[element]++
        } else {
            obj[element] = 1
        }

    }

    let mode = null;
    let maxCount = 0;

    for (let e in obj) {
        if (obj[e] > maxCount) {
            maxCount = obj[e]
            mode = e
        }
    }

    return { count: maxCount, key: mode }
};
