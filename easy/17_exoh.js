export const exoh = (str) => {
    let x=0;
    let o=0;
    [...str].forEach(element => {
        element === "x" ? x +=1 : o +=1;

        

    });
    return x == o ? true : false;
}