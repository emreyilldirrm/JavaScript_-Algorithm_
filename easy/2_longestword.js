export const longestword = (sen) => {

    const arr = sen.replace( /[^a-zA-Z\s]/g, "").split(" ")//yazıdan harf ve boşluk olamayan herşeyi kaldır//split ile boşluktan itibaren böl
    arr.sort((a,b)=>{
       return b.length - a.length;//dizideki kelimeleri harf sayısı çok olandan en az olana sırala
    })
    return arr
} 