/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
    for (let i = 0; i < s.length; i++) {
        const currS = s.indexOf(s[i], i + 1)
        const currT = t.indexOf(t[i], i + 1)
        if (currS !== currT) return false;
    }
    return true;
};