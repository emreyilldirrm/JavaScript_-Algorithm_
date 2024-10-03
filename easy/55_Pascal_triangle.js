export const pascal_triangle=(NumberOfRow)=>{
    let result=[[1]];
    for (let i = 0; i < NumberOfRow; i++) {
        let temp=[0,...result[[result.length-1]],0];
        let row=[];
        for (let j = 0; j < result[result.length-1].length+1; j++) {
            row.push(Number(temp[j])+Number(temp[j+1]));
            
        }
        result.push(row)

    }
    return result
}