export const formatted_Division = (n1, n2) => {
    let str = (n1 / n2).toString();

    // Noktadan önceki sayıları almak için
    let regex = str.match(/\d+(?=\.)/g) || [str.split(".")[0]]; // Eğer nokta yoksa, tüm sayı alınacak.

    // Noktadan sonraki sayıları almak için test() ile kontrol yapıyoruz
    let regex_last = /\.\d+/.test(str) ? str.match(/(?<=\.)\d+/g).toString() : null;

    // Sayıyı ters çeviriyoruz.
    let arr = regex[0].split("").reverse();

    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]); // Her basamağı ekliyoruz.

        // 3 basamakta bir ve dizinin sonuna gelmediysek, virgül ekle
        if ((i + 1) % 3 === 0 && i !== arr.length - 1) {
            newArr.push(",");
        }
    }

    // Noktadan sonra bir şey yoksa sadece noktadan önceki kısmı döndür
    return newArr.reverse().join("") + (regex_last ? "." + regex_last : "");
};
