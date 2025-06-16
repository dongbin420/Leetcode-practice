/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sArrange = s.split('').sort().join('');
    const tArrange = t.split('').sort().join('');

    if (sArrange === tArrange) return true;

    return false;
};