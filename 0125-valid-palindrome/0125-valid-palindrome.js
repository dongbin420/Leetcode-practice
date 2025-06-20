/**
 * @param {string} s
 * @return {boolean}
 */
// 개선한 투포인터 방식
var isPalindrome = function(s) {
    // 문자의 왼쪽 인덱스와 오른쪽 인덱스를 가리키는 left와 right
    let left = 0, right = s.length - 1;

    // 주어진 입력 문자가 Alphanumeric인지 확인하는 함수
    const isAlnum = (ch) => {
        return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || (ch >= '0' && ch <= '9');
    }

    // 문자가 짝수인 경우는, right가 left보다 커지는 시점부터 검사할 필요가 없어지고, 문자가 홀수인 경우는 right와 left가 같아지는 시점부터 검사할 필요가 없어진다. 따라서 left가 right가 작을때만 검사하면 되는 것.
    while (left < right) {
        // left < right를 여기에서 한번 더 하는 이유는, left와 right가 조정되는 코드가 있어서, 이 시점에서도 left가 right를 넘게 되는 경우가 있기 때문
        while (left < right && !isAlnum(s[left])) left++;
        while (left < right && !isAlnum(s[right])) right--;

        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

        left++;
        right--;
    }

    return true;
}


// 내가 스스로 푼 투포인터 방식
// var isPalindrome = function(s) {
//     const onlyLowerS = s.toLowerCase();
//     const validS = [];

//     for (const cha of onlyLowerS) {
//         const code = cha.charCodeAt(0);

//         if ((code >= 97 && code <= 122) || (cha.charCodeAt(0) >= 48 && cha.charCodeAt(0) <= 57)) {
//             validS.push(cha);
//         }
//     }

//     for (let i = 0; i < Math.floor(validS.length / 2); i++) {
//         if (!(validS[i] === validS[validS.length - 1 - i])) return false; 
//     }
    
//     return true;
// };


// 처음 푼 가장 직관적인 방식(문제가 통과가 되기는 한다.) 
// var isPalindrome = function(s) {
//     const onlyLowerS = s.toLowerCase();
//     const validS = [];

//     for (const cha of onlyLowerS) {
//         const code = cha.charCodeAt(0);

//         if ((code >= 97 && code <= 122) || (cha.charCodeAt(0) >= 48 && cha.charCodeAt(0) <= 57)) {
//             validS.push(cha);
//         }
//     }

//     const originS = validS.join('');
//     const reversedS = validS.reverse().join('');
    
//     if (originS === reversedS) return true;

//     return false;
// };