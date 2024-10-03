export const ASCI_Conversion = (str) => {

    return str.split("").reduce((accumulator, currentValue, index, array) => {

        return accumulator += currentValue.charCodeAt();

    }, "")
}

// array.reduce((accumulator, currentValue, index, array) => {
//     // İşlem
// }, initialValue);
// accumulator: Önceki işlemin sonucunu tutar.
// currentValue: Şu an işlenen dizi elemanıdır.
// index: (Opsiyonel) Şu anki elemanın dizideki indeksidir.
// array: (Opsiyonel) İşlenen dizi.