export const ElementMerger = (arr) => {
    let newresults = elementMerger(arr); // Sonuçları tutacak dizi

    while (newresults.length > 1) {
        console.log(newresults)
        newresults = elementMerger(newresults)
    }

    return newresults; // Sonuç dizisini döndür
};


const elementMerger = (arr) => {
    const results2 = []// 
    arr.reduce((acc, curr, index) => {
        // Sondan bir önceki elemana kadar gitmek için son indeksi kontrol et
        if (index < arr.length - 1) {
            const result = Math.abs(curr - arr[index + 1]); // Hesaplama

            if (result !== 0) { // Eğer sonuç 0 değilse diziye ekle
                results2.push(result);
            }
        }

        return curr; // Yeni akümülatör değeri
    }, 0);
    return results2
}