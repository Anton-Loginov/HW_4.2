'use strict';

const spiralMatrix = (R, C, r0, c0) => {
    let res = [], d = 0, dirMoves = 1, moves = 0, directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    while (res.length < R * C) {
        if (c0 < C && r0 < R && r0 >= 0 && c0 >= 0) { res.push([r0, c0]); }

        r0 += directions[d][0];
        c0 += directions[d][1];
        moves++;

        if (moves === dirMoves * 2) { dirMoves++; moves = 0; }
        if (moves % dirMoves === 0) { d = ++d % 4; }
    }
    return res;
};
console.log(spiralMatrix(1,4,0,0));




