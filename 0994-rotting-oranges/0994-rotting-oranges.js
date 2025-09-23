/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const row = grid.length;
    const col = grid[0].length;
    const visited = Array.from({ length: row }, () => Array(col).fill(false));
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let answer = 0;

    const bfs = (start) => {
        const queue = [start];
        const [x, y] = start;
        visited[x][y] = true;

        while (queue.length > 0) {
            const [x, y, minute] = queue.shift();

            for (const [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;

                if (nx >= 0 && ny >= 0 && nx < row && ny < col && grid[nx][ny] === 1) {
                    queue.push([nx, ny, minute + 1]);
                    grid[nx][ny] = 2;
                    visited[nx][ny] = true;
                }
            }

            if (queue.length === 0) return minute;
        }
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === 2 && !visited[i][j]) {
                answer += bfs([i, j, 0]);
            } else {
                continue;
            }
        }
    }

    for (let k = 0; k < row; k++) {
        for (let l = 0; l < col; l++) {
            if (grid[k][l] === 1) return -1;
        }
    }

    return answer;
};