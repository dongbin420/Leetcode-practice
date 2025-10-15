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

    for (let i = 0; i < m; i++) {
        pacificQueue.push([i, 0]);
        atlanticQueue.push([i, n - 1]);

        pacificVisited[i][0] = true;
        atlanticVisited[i][n - 1] = true;
    }

    for (let j = 0; j < n; j++) {
        pacificQueue.push([0, j]);
        atlanticQueue.push([m - 1, j]);

        pacificVisited[0][j] = true;
        atlanticVisited[m - 1][j] = true;
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

// 기본 아이디어
// - Pacific Ocean과 Atlantic Ocean의 가장자리에 붙은 셀들을 출발지점으로 해서
// Pacific Ocean에서 한 번, Atlantic Ocean에서 한 번, 총 두 번의 bfs를 돌린다.
// 그리고 이 bfs를 돌릴 때, 이웃 셀로의 이동 조건으로 현재 셀의 고도와 비교하여
// 크거나 같을때만 방문할 수 있게 한다. 그래야 문제의 조건에 맞게 비가 흘러내릴 수 있기 때문.
// 이렇게 두 번의 bfs를 돌리게 되면 두 개의 방문 배열에는 조건에 맞는 셀들만 방문이 체크
// 될 것이다. 이때, 두 개의 방문 배열에서 모두 방문이 이루어진 셀이 조건을 만족하는 셀이 된다. 