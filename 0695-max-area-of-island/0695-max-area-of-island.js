/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const m = grid.length; // 그리드 행의 개수
    const n = grid[0].length; // 그리드 열의 개수
    const areaOfIsland = [];
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const visited = Array.from({ length: m }, () => Array(n).fill(false));

    const dfs = (start) => {
        const [x, y] = start;
        visited[x][y] = true;
        let area = 1;

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && ny >= 0 && nx < m && ny < n && grid[nx][ny] === 1 && !visited[nx][ny]) {
                area += dfs([nx, ny]);
            }
        }

        return area;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] !== 0 && !visited[i][j]) {
                areaOfIsland.push(dfs([i, j]));
            }
        }
    }

    if (areaOfIsland.length > 0) {
        return Math.max(...areaOfIsland);
    }

    return 0;
};