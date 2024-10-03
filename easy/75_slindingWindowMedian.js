export const slindinWindowMedian = (arr, k) => {
    let median = []
    for (let i = 0; i < arr.length - 3; i++) {

        let cut_arr = arr.slice(i, k + i).sort((a, b) => { return a - b })
        console.log(cut_arr)
        if (k % 2 == 0) {
            median.push((cut_arr[cut_arr.length / 2] +
                cut_arr[cut_arr.length / 2 - 1]
            ))
        } else {
            median.push((cut_arr[1]))
        }




    }
    return median
}