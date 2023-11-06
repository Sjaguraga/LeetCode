/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
    return s.trim().split(" ").pop().length;
};