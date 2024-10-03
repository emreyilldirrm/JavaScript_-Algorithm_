export const SnakeCaseFormat = (str) => {
    // \W: Alfanümerik olmayan karakterleri seçer (A-Z, a-z, 0-9 harici her şey)
    // _ karakterini de dahil etmek için _'yi regex'e ekleriz.
    let regex = /[\W_]+/g;

    // Eşleşen karakterleri '_' ile değiştirir ve string'i küçük harfe çevirir
    const result = str.replace(regex, "_").toLowerCase();

    return result;
}