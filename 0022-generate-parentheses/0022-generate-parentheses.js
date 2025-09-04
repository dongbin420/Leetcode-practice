/**
 * @param {number} n
 * @return {string[]}
 */

// 세번째 시도(스택 이용)
 var generateParenthesis = function(n) {
    const answer = [];
    const stack = [{s: '', open: n, close: n}];

    while (stack.length > 0) {
        const { s, open, close } = stack.pop();

        if (open === 0 && close === 0) {
            answer.push(s);
            continue;
        }

        if (open > 0) {
            stack.push({s: s + '(', open: open - 1, close});
        }

        if (close > open) {
            stack.push({s: s + ')', open, close: close - 1});
        }
    } 

    return answer;
};




// 두번째 시도(맞은 풀이)
// var generateParenthesis = function(n) {
//     const answer = [];

//     const makeParentheses = (open, close, str) => {
//         if (open < 0 || close < 0) return;
//         if (close < open) return;

//         if (open === 0 && close === 0) {
//             answer.push(str);
//             return;
//         }

//         if (open > 0) {
//             makeParentheses(open - 1, close, str + '(');
//         }
        
//         if (close > open) {
//             makeParentheses(open, close - 1, str + ')');
//         }
//     }

//     makeParentheses(n, n, '');

//     return answer;
// };



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