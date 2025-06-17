/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const boxBoard = Array.from({ length: board.length }, () => Array(board.length));
    const colBoard = Array.from({ length: board.length }, () => Array(board.length));

    board.forEach((row, i) => {
        if (i < 3) {
            boxBoard[0].push(row[0], row[1], row[2]);
            boxBoard[1].push(row[3], row[4], row[5]);
            boxBoard[2].push(row[6], row[7], row[8]);
        } else if (i < 6) {
            boxBoard[3].push(row[0], row[1], row[2]);
            boxBoard[4].push(row[3], row[4], row[5]);
            boxBoard[5].push(row[6], row[7], row[8]);
        } else {
            boxBoard[6].push(row[0], row[1], row[2]);
            boxBoard[7].push(row[3], row[4], row[5]);
            boxBoard[8].push(row[6], row[7], row[8]);
        }

        for (let i = 0; i < row.length; i++) {
            colBoard[i].push(row[i]);
        }
    })

    const convertedBoard = board.map((row) => row.filter((ele) => Number(ele)));
    const convertedBoxBoard = boxBoard.map((box) => box.filter((ele) => Number(ele)));
    const covertedColBoard = colBoard.map((col) => col.filter((ele) => Number(ele)));

    for (const row of convertedBoard) {
        const uniqueLeng = new Set(row).size;

        if (row.length !== uniqueLeng) return false;
    }

    for (const box of convertedBoxBoard) {
        const uniqueLeng = new Set(box).size;

        if (box.length !== uniqueLeng) return false;
    }

    for (const col of covertedColBoard) {
        const uniqueLeng = new Set(col).size;

        if (col.length !== uniqueLeng) return false;
    }

    return true;
};