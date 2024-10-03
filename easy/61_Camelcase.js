export const camelcase=(str)=>{
    console.log(str)
    let word=str.split(" ")
    console.log(word)

    let word_=""
    let wordlist=[]
    for (let i = 0; i < word.length; i++) {
        console.log(word[i].length)

        for (let j = 0; j < word[i].length; j++) {
            if(j==0) word_=word[i][0].toUpperCase()
            else word_+=word[i][j] 
        }
        wordlist.push(word_)
    }
    return wordlist.join("").replace(" ","")
}