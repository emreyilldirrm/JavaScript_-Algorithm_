// array veriliyor
// arrayın içerisindeki en büyük iki değerin çarpımı
// arrayın içerisindeki elmanların toplamının iki karından
// büyük olması durumunda tru yoksa false

export const SumMultipliers = (arr) => {
    const sortedArr = arr.sort((a, b) => b - a);

    // En büyük iki değer
    const max1 = sortedArr[0];
    const max2 = sortedArr[1];
    let carpim = max1 * max2

    let toplamarr = 0
    arr.map((e) => {
        toplamarr += e
    })

    return (toplamarr * 2) < carpim ? true : false

}