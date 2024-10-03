export const Prime_Mover = (nth, limit) => {
    let sayilar_obje = {}
    for (let i = 2; i < limit; i++) {
        sayilar_obje[i] = true
    }

    for (let key in sayilar_obje) {
        for (let j = 2; j < key; j++) {
            if (key % j === 0) {
                sayilar_obje[key] = false;
            }
        }
    }

    let yeniarr = []
    for (const key in sayilar_obje) {
        if (sayilar_obje[key] === true) yeniarr.push(key)
    }


    return yeniarr[nth - 1]
}