/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
    return s.trim().split(' ').filter(str => str !== '').reverse().join(' ')
};