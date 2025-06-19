/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const onlyLowerS = s.toLowerCase();
    const validS = [];

    for (const cha of onlyLowerS) {
        const code = cha.charCodeAt(0);

        if ((code >= 97 && code <= 122) || (cha.charCodeAt(0) >= 48 && cha.charCodeAt(0) <= 57)) {
            validS.push(cha);
        }
    }

    const originS = validS.join('');
    const reversedS = validS.reverse().join('');
    console.log(originS);
    console.log(reversedS);
    
    if (originS === reversedS) return true;

    return false;
};