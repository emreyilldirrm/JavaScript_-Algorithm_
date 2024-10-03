export const String_Scrample = (s1, s2) => {
    let flag = true
    s2.split("").forEach(e => {
        if (s1.indexOf(e) === -1) { flag = false }
    });

    return flag
}