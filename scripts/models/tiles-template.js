import T from "./tiles-models.js";
export const STARTING_TEMPLATE = new Map([
    [0,[T.sky]],
    [1,[T.sky]],
    [2,[T.sky]],
    [3,[T.sky,T.sky,T.sky,T.sky,T.sky,T.sky,T.sky,T.sky,T.sky,T.sky,T.sky,T.sky,T.sky,T.sky,T.sky,T.cloud,T.cloud]],
    [4,[T.sky,T.sky,T.sky,T.sky,T.sky,T.sky,T.sky,T.sky,T.sky,T.sky,T.sky,T.sky,T.sky,T.sky,T.cloud,T.cloud,T.cloud,T.cloud]],
    [5,[T.sky,T.sky,T.leaves,T.leaves,T.leaves,T.sky,T.sky,T.sky,T.sky,T.sky,T.sky,T.sky,T.sky,T.cloud,T.cloud,T.cloud,T.cloud]],
    [6,[T.sky,T.sky,T.leaves,T.leaves,T.leaves,T.sky,T.sky,T.sky,T.sky,T.sky,T.sky,T.sky,T.sky,T.cloud,T.cloud,T.sky,T.sky,T.sky]],
    [7,[T.sky,T.sky,T.leaves,T.leaves,T.leaves]],
    [8,[T.sky,T.sky,T.sky,T.wood,T.sky,T.sky,T.sky,T.sky,T.sky,T.sky,T.sky]],
    [9,[T.sky,T.sky,T.sky,T.wood,T.sky,T.sky,T.sky,T.sky,T.sky,T.stone,T.stone]],
    [10,[T.sky,T.sky,T.sky,T.wood,T.sky,T.sky,T.sky,T.sky,T.sky,T.stone,T.stone,T.stone]],
    [11,[T.grass]],
    [12,[T.soil]],
])