/**
 * @param {string[]} words
 * @return {number}
 */
const maxProduct = (words) => {
    const letters = words.map(word => [...new Set(word)]);
    console.log(letters);
    let result = 0;
    
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = 0; j < words.length; j++) {
            if (!letters[i].some(item => letters[j].includes(item))) {
                let prod = words[i].length * words[j].length;
                if (prod > result) result = prod
            }
        }
    }
    return result;
};