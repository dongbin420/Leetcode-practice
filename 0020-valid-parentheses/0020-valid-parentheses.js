/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
        } else if (s[i] === ')') {
            const last = stack.pop();

            if (last !== '(') return false;
        } else if (s[i] === ']') {
            const last = stack.pop();

            if (last !== '[') return false;
        } else if (s[i] === '}') {
            const last = stack.pop();

            if (last !== '{') return false;
        }
    }

    if (stack.length === 0) return true

    return false;
};