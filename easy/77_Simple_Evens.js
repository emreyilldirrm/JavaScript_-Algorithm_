export const Simple_Evens = (num) => {
    let flag = true;
    num.toString().split("").forEach(n => {
        console.log(n)
        if (parseInt(n) % 2 != 0) {

            flag = false
        }
    });

    return flag
}