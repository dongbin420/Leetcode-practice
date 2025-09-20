/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let substr = '';
    let longest = -Infinity;

    for (let i = 0; i < s.length; i++) {
        if (substr.length === 0 || !substr.includes(s[i])) {
            substr += s[i];
        } else if (substr.includes(s[i])) {
            longest = Math.max(longest, substr.length);
            substr = substr.slice(substr.indexOf(s[i]) + 1) + s[i];
        } 
    }

    longest = Math.max(longest, substr.length);

    return longest
};