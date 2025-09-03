/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const answer = [];

    const makeParentheses = (open, close, str) => {
        if (open < 0 || close < 0) return;
        if (close < open) return;

        if (open === 0 && close === 0) {
            answer.push(str);
            return;
        }

        if (open > 0) {
            makeParentheses(open - 1, close, str + '(');
        }
        
        if (close > open) {
            makeParentheses(open, close - 1, str + ')');
        }
    }

    makeParentheses(n, n, '');

    return answer;
};



// 첫 시도
// var generateParenthesis = function(n) {
//     const answer = [];
//     let parentheses = '';
//     let openParen = n;
//     let closeParen = n;

//     while (true) {
//         if (openParen > 0) {
//             parentheses += '(';
//             openParen--; 
//         }

//         if (closeParen > 0 && closeParen > openParen) {
//             for (let i = 0; i < closeParen - openParen; i++) {
//                 parentheses += ')';
//                 closeParen--;
//             }
//         }

//         if (openParen === 0 && closeParen === 0) {
//             answer.push(parentheses);
//             parentheses = '';
//             openParen = n;
//             closeParen = n;
//         }
//     }
// };