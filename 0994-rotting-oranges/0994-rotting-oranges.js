/**
 * @param {number[][]} grid
 * @return {number}
 */
// var orangesRotting = function(grid) {
//     const row = grid.length;
//     const col = grid[0].length;
//     const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
//     const queue = []
//     let answer = 0;
//     let fresh = 0;

//     for (let i = 0; i < row; i++) {
//         for (let j = 0; j < col; j++) {
//             if (grid[i][j] === 2) {
//                 queue.push([i, j, 0]);
//             } else if (grid[i][j] === 1) {
//                 fresh++;
//             }
//         }
//     }

//     while (queue.length > 0) {
//             const [x, y, minute] = queue.shift();

//             for (const [dx, dy] of directions) {
//                 const nx = x + dx;
//                 const ny = y + dy;

//                 if (nx >= 0 && ny >= 0 && nx < row && ny < col && grid[nx][ny] === 1) {
//                     queue.push([nx, ny, minute + 1]);
//                     grid[nx][ny] = 2;
//                     fresh--;
//                 }
//             }

//             if (queue.length === 0) {
//                 answer = minute;
//             };
//         }

//     if (fresh !== 0) return -1;

//     return answer;
// };

var orangesRotting = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const queue = [];
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  let fresh = 0;
  let answer = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j, 0]);
      } else if (grid[i][j] === 1) {
        fresh++;
      }
    }
  }

  while (queue.length > 0) {
    const [x, y, minute] = queue.shift();
    
    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && ny >= 0 && nx < m && ny < n && grid[nx][ny] === 1) {
        queue.push([nx, ny, minute + 1]);
        grid[nx][ny] = 2;
        fresh--;
      }
    }

    if (queue.length === 0) {
      answer = minute;
    }
  }

  if (fresh > 0) return -1;

  return answer;
}