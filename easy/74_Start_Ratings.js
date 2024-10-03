export const StarRatings = (value) => {


    const [integer, decimal] = value.split(".")

    let int = Number(integer)
    let dec = Number(decimal)

    if (dec > 0 && dec <= 50) {

        dec = 1
    }

    if (dec > 50) {

        dec = 0
        int++
    }

    return "full - ".repeat(int) + "half - ".repeat(dec) + "empty ".repeat(5 - int - dec)

}