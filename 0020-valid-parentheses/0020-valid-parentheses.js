/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function(s) {
//     const stack = [];

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
//             stack.push(s[i]);
//         } else {
//             if (stack.length === 0) return false; // 여는 괄호 없이 닫는 괄호가 나오면 조기 실패
            
//             if (s[i] === ')') {
//                 const last = stack.pop();

//                 if (last !== '(') return false;
//             } else if (s[i] === ']') {
//                 const last = stack.pop();

//                 if (last !== '[') return false;
//             } else if (s[i] === '}') {
//                 const last = stack.pop();

//                 if (last !== '{') return false;
//             }

//         }
//     }

//     return stack.length === 0;
// };

var isValid = function(s) {
    const stack = [];

  for (p of s) {
    if (p === '(' || p === '{' || p === '[') {
      stack.push(p);
    } else {
      const last = stack.pop();

      if (p === ')' && last !== '(') {
        return false;
      } else if (p === '}' && last !== '{') {
        return false;
      } else if (p === ']' && last !== '[') {
        return false;
      }
    }
  }

  return stack.length === 0;
};