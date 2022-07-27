import * as math from "../classes/math.js";

export const polygon = function(n) {
    const res = [];

    for(let i = 0; i < n; i++)
        res.push([math.cos(i, n)/2/math.sin(1,n), math.sin(i, n)/2/math.sin(1,n)]);

    return res;
}
globalThis.polygon = polygon;