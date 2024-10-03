export const Run_Length = (str) => {
    const uniqueChars = Array.from(new Set(str)); // Benzersiz karakterleri elde et
    console.log(uniqueChars)

    let arr_char_count = []
    uniqueChars.forEach((char) => {
        arr_char_count.push(countChar(str, char), char); // Karakterlerin sayısını hesapla
    });

    return arr_char_count.join("")
}
function countChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}