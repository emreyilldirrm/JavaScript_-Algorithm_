export const string_Period = (str) => {
    let longtext = "";
    let maxCount = 0;

    // Tüm alt stringleri kontrol et
    for (let length = 1; length <= str.length; length++) {
        for (let k = 0; k <= str.length - length; k++) {
            let temp1 = str.slice(k, k + length);
            let temp1Count = countOccurrences(str, temp1);

            // Eğer mevcut alt stringin sayısı en yüksekse veya
            // sayılar eşitse ama alt string daha uzunsa
            if (temp1Count > maxCount || (temp1Count === maxCount && temp1.length > longtext.length)) {
                longtext = temp1;
                maxCount = temp1Count;
            }
        }
    }

    return `${longtext} ${maxCount}`;
}

// Alt stringin kaç kez geçtiğini sayan fonksiyon
function countOccurrences(mainString, substring) {
    let count = 0;
    let position = 0;

    while ((position = mainString.indexOf(substring, position)) !== -1) {
        count++;
        position += substring.length; // Bir sonraki konuma geç
    }

    return count;
}

