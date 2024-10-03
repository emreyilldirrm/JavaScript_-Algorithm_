// // 1.Seri Numarası 3 tane kümeden oluşucak bu kümelerin arasında . olacak "224.315.218"

// // 2. ilk kümenin basamak sayıları toplamı çift sayı olmalı 

// // 3.ikinci kümenin basamak sayıları toplamı tek sayı olmalı

// // 4. her bir kümede kümenin son elemanı
// // diğer eleman sayılarından büyük olmalı

// // sağlanıyorsa true yoksa false 

export const Serial_Number = (str) => {
    let matches;
    const grup_sayilari = [];
    const grup_toplamlari = [];
    const regex = /(\d{3})\.(\d{3})\.(\d{3})/;

    if (!regex.test(str)) {
        console.log("Eşleşme yok, false döner.");
        return false; // Eşleşme yoksa false döner
    } else {
        matches = regex.exec(str); // Eşleşmeyi bul
    }

    // Eşleşmeleri işleme
    for (let i = 1; i < matches.length; i++) {
        const grup = matches[i];
        grup_sayilari.push(grup);

        // Gruplardaki basamak sayılarını topla
        let grup_toplam = 0;
        for (let j = 0; j < grup.length; j++) {
            grup_toplam += Number(grup[j]);
        }
        grup_toplamlari.push(grup_toplam);
    }

    console.log(grup_toplamlari);
    console.log(grup_sayilari);

    // Kontroller
    const [toplam1, toplam2, toplam3] = grup_toplamlari;

    // 1. koşul: İlk kümenin toplamı çift
    // 2. koşul: İkinci kümenin toplamı tek
    if (toplam1 % 2 === 0 && toplam2 % 2 !== 0) {
        // 3. koşul: Son elemanlar kontrolü
        const sonEleman1 = Number(grup_sayilari[0][2]);
        const sonEleman2 = Number(grup_sayilari[1][2]);
        const sonEleman3 = Number(grup_sayilari[2][2]);

        if (sonEleman1 > Number(grup_sayilari[0][0]) && sonEleman1 > Number(grup_sayilari[0][1]) &&
            sonEleman2 > Number(grup_sayilari[1][0]) && sonEleman2 > Number(grup_sayilari[1][1]) &&
            sonEleman3 > Number(grup_sayilari[2][0]) && sonEleman3 > Number(grup_sayilari[2][1])) {
            return true; // Tüm koşullar sağlanıyorsa true döner
        }
    }

    return false; // Herhangi bir koşul sağlanmıyorsa false döner
};