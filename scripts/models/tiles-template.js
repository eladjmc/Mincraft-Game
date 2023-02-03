import T from "./tiles-models.js";
export const STARTING_TEMPLATE = new Map([
    [0,[T.sky]],
    [1,[T.sky]],
    [2,[T.sky]],
    [3,[T.sky,T.sky,T.leaves,T.leaves,T.leaves]],
    [4,[T.sky,T.sky,T.leaves,T.leaves,T.leaves]],
    [5,[T.sky,T.sky,T.leaves,T.leaves,T.leaves]],
    [6,[T.sky,T.sky,T.sky,T.wood,T.sky]],
    [7,[T.sky,T.sky,T.sky,T.wood]],
    [8,[T.sky,T.sky,T.sky,T.wood]],
    [9,[T.grass]],
    [10,[T.soil]],
])