/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const heap = new Heap((a, b) => b - a);

    for (const stone of stones) {
        heap.push(stone);
    }

    while (heap.size() > 1) {
        const first = heap.pop();
        const second = heap.pop();

        if (first === second) {
            continue;
        } else {
            heap.push(first - second);
        }
    }

    if (heap.size() > 0) return heap.top();

    return 0;
};