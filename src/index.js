
// You should implement your task here.

module.exports = function towelSort (matrix) {
    return Array.isArray(matrix)? matrix.reduce((acc, cur, i) => i % 2 == 0 ? acc.concat(cur) : acc.concat(cur.reverse()) , []) : [];
}
