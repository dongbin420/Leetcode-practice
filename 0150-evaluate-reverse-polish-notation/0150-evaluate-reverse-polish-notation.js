/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];

    for (let i = 0; i < tokens.length; i++) {
        if (!Number.isNaN(Number(tokens[i]))) {
            stack.push(Number(tokens[i]));
        } else {
            const secondNum = Number(stack.pop());
            const firstNum = Number(stack.pop());

            if (tokens[i] === '+') {
                stack.push(firstNum + secondNum);
            } else if (tokens[i] === '-') {
                stack.push(firstNum - secondNum);
            } else if (tokens[i] === '*') {
                stack.push(firstNum * secondNum);
            } else if (tokens[i] === '/') {
                stack.push(Math.trunc(firstNum / secondNum));
            }
        }
    }

    return stack[0];
};