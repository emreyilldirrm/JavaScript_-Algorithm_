export const FizzBuzz = (num) => {
    for (let i = 0; i < num; i++) {
        if (i % 15 == 0) {
            console.log("FizzBuz")
        } else if (i % 3 == 0) {
            console.log("Fizz")
        } else if (i % 5 == 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }

    }
}