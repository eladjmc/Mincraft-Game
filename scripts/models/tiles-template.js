import T from "./tiles-models.js";
export const STARTING_TEMPLATE = new Map([
    [0,[T.sky]],
    [1,[T.sky,T.sky,T.sky,T.sky,T.sky,T.sky,T.sky,T.sky,T.sky,T.cloud,T.cloud]],
    [2,[T.sky,T.sky,T.sky,T.sky,T.sky,T.sky,T.sky,T.sky,T.cloud,T.cloud,T.cloud,T.cloud]],
    [3,[T.sky,T.sky,T.leaves,T.leaves,T.leaves,T.sky,T.sky,T.cloud,T.cloud,T.cloud,T.cloud]],
    [4,[T.sky,T.sky,T.leaves,T.leaves,T.leaves,T.sky,T.sky,T.cloud,T.cloud,T.sky,T.sky,T.sky]],
    [5,[T.sky,T.sky,T.leaves,T.leaves,T.leaves]],
    [6,[T.sky,T.sky,T.sky,T.wood,T.sky,T.sky,T.sky,T.sky,T.sky,T.sky,T.sky]],
    [7,[T.sky,T.sky,T.sky,T.wood,T.sky,T.sky,T.sky,T.sky,T.sky,T.stone,T.stone]],
    [8,[T.sky,T.sky,T.sky,T.wood,T.sky,T.sky,T.sky,T.sky,T.sky,T.stone,T.stone,T.stone]],
    [9,[T.grass]],
    [10,[T.soil]],
])