/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if (node === null) return null;

    const visited = new Map();

    const dfs = (curr) => {
        if (visited.has(curr)) return visited.get(curr);

        const copy = new Node(curr.val);
        visited.set(curr, copy);

        for (const nei of curr.neighbors) {
            const clonedNeighbor = dfs(nei);
            copy.neighbors.push(clonedNeighbor);
        }
        
        return copy;
    }

    return dfs(node);
};

// 문제 설명
// 1. 무엇을 묻는 문제인지?
// => 그래프를 깊은 복사해서, 첫번째 노드를 반환하는 문제
// 2. 문제의 조건?
// => 각 노드는 '값', '해당 노드와 이웃인 노드 배열'로 이루어져 있다.
// => 입력값으로 주어지는건 그래프의 첫번째 노드이다.
// 3. 어떻게 푸는가?
// => 1) 주어진 첫번째 노드를 시작점으로, 그래프 탐색을 시작한다.
// => 2) 한 노드 탐색 시점마다, 노드를 새로 만들고 카피한다.
// => 3) 이웃 노드들에 대해서도, 각 노드들의 탐색 값을 neighbors에 추가, 리턴하는 방식으로 처리한다.
// => 4) 인접 노드 정보를 통해, 다음 인접 노드를 탐색하고 위를 반복한다.
// => 5) 위 탐색시, dfs든 bfs든 선택해서 탐색할 수 있다. 