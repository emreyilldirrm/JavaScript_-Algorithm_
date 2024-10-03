export const Caeser_Cipher = (str, n) => {
    // a-z -> 97 122
    // A-Z -> 65 90
    // KÜÇÜK HARFMİ BÜYÜK HARFMİ
    //harfinde karakter kodu + öteleme değeri alfabe limitinden fazlamı

    let yeniKarakterler = ""

    for (let i = 0; i < str.length; i++) {
        let kode_numarasi = str[i].charCodeAt()

        if ((kode_numarasi + n) > 91) { //küçükharf
            yeniKarakterler += String.fromCharCode(96 + ((kode_numarasi + n) - 122))
            console.log("yeni charcodu:", String.fromCharCode(96 + ((kode_numarasi + n) - 122)))
        } else {
            yeniKarakterler += String.fromCharCode(kode_numarasi + n)
            console.log("yeni charcodu:", String.fromCharCode(kode_numarasi + n))
        }

    }

    return yeniKarakterler
}