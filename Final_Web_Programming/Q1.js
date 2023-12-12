function removeNumVowelWords(words, numVowels) {
    const vowels = ["a", "e", "i", "o", "u"]
    for (var index = 0; index < words.length; index++) {
        /*  Check for each word in the "words" array if there are any vowels inside a word
            "totalVowels" will be an array containing all the vowels inside that word
            Then check if the length of the array (total vowels) is greater than "numVowels"
            If True, remove that word from "words", otherwise do nothing
        */
        totalVowels = vowels.filter(vowel => words[index].includes(vowel))
        if (totalVowels.length >= numVowels) {
            words.splice(index, 1)
        }
    }
    return words
}

let words = ["cat", "fly", "lobster", "flat", "crypt", "bunny",
"try", "spear"]
let numVowels = 2
console.log(removeNumVowelWords(words, numVowels))