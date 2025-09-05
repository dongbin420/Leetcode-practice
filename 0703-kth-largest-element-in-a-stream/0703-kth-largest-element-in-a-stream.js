/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.scores = new Heap((a, b) => a - b);
    this.k = k;

    for (const x of nums) this.add(x);
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if (this.scores.size() < this.k) {
        this.scores.push(val);
    } else if (val > this.scores.top()) {
        this.scores.push(val);
        this.scores.pop();
    }
    return this.scores.top();
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

// 이 문제는 Heap이 이미 구현되어 있는 것으로 보임. 그래서 위의 코드가 통과됨..
////////////////////////////////////////////////////////////////////////
// Priority Queue (Heap) with comparator (기본 템플릿, 생성자 함수)
// var Heap = function(cmp = (a, b) => a - b) {
//     this.a = [];
//     this.cmp = cmp;
//     this.size = () => { return this.a.length }
//     this.top = () => { return this.a[0] }
//     this.push = (x) => {
//         const a = this.a, c = this.cmp; a.push(x);
//         let i = a.length - 1;
//         while (i > 0) {
//             const p = (i - 1) >> 1;
//             if (c(a[p], a[i]) <= 0) breka;
//             [a[p], a[i]] = [a[i], a[p]];
//             i = p;
//         }
//     }
//     this.pop = () => {
//         const a = this.a, c = this.cmp;
//         if (a.length === 0) return undefined;
//         if (a.length === 1) return a.pop();
//         const root = a[0]; a[0] = a.pop();
//         let i = 0;
//         while (true) {
//             let l = i * 2 + 1, r = i * 2 + 2, m = i;
//             if (l < a.length && c(a[m], a[l]) > 0) m = l;
//             if (r < a.length && c(a[m], a[r]) > 0) m = r;
//             if (m === i) break;
//             [a[i], a[m]] = [a[m], a[i]];
//             i = m;
//         }
//         return root;
//     }
// }

// Priority Queue (Heap) with comparator (기본 템플릿)
// class Heap {
//   constructor(cmp = (a, b) => a - b) { this.a = []; this.cmp = cmp; } // min-heap default
//   size() { return this.a.length; }
//   top() { return this.a[0]; }
//   push(x) {                      // O(log n)
//     const a = this.a, c = this.cmp; a.push(x);
//     let i = a.length - 1;
//     while (i > 0) {
//       const p = (i - 1) >> 1;
//       if (c(a[p], a[i]) <= 0) break;
//       [a[p], a[i]] = [a[i], a[p]];
//       i = p;
//     }
//   }
//   pop() {                        // O(log n)
//     const a = this.a, c = this.cmp;
//     if (a.length === 0) return undefined;
//     if (a.length === 1) return a.pop();
//     const root = a[0]; a[0] = a.pop();
//     let i = 0;
//     while (true) {
//       let l = i * 2 + 1, r = i * 2 + 2, m = i;
//       if (l < a.length && c(a[m], a[l]) > 0) m = l;
//       if (r < a.length && c(a[m], a[r]) > 0) m = r;
//       if (m === i) break;
//       [a[i], a[m]] = [a[m], a[i]];
//       i = m;
//     }
//     return root;
//   }
// }
// // min-heap: new Heap((a,b)=>a-b), max-heap: new Heap((a,b)=>b-a)