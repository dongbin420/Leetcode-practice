/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const m = heights.length;
    const n = heights[0].length;
    const pacificVisited = Array.from({ length: m }, () => Array(n).fill(false));
    const atlanticVisited = Array.from({ length: m }, () => Array(n).fill(false));
    const pacificQueue = [];
    const atlanticQueue = [];
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const answer = [];

    for (let i = 0; i < n; i++) {
        pacificQueue.push([0, i]);
        atlanticQueue.push([m - 1, i]);

        pacificVisited[0][i] = true;
        atlanticVisited[m - 1][i] = true;
    }

    for (let j = 0; j < m; j++) {
        pacificQueue.push([j, 0]);
        atlanticQueue.push([j, n - 1]);

        pacificVisited[j][0] = true;
        atlanticVisited[j][n - 1] = true;
    }

    const bfs = (queue, visited) => {
        while (queue.length > 0) {
            const [x, y] = queue.shift();
            visited[x][y] = true;

            for (const [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;

                if (nx >= 0 && ny >= 0 && nx < m && ny < n && !visited[nx][ny] && heights[nx][ny] >= heights[x][y]) {
                    queue.push([nx, ny]);
                    visited[nx][ny] = true;
                }
            }
        }
    }

    bfs(pacificQueue, pacificVisited);
    bfs(atlanticQueue, atlanticVisited);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pacificVisited[i][j] && atlanticVisited[i][j]) {
                answer.push([i, j]);
            }
        }
    }

    return answer;
};