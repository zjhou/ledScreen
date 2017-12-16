var Font = {
    big: {
        _ful: [[1,1,1,1,1,1,0],[1,1,1,1,1,1,0],[1,1,1,1,1,1,0],[1,1,1,1,1,1,0],[1,
            1,1,1,1,1,0],[1,1,1,1,1,1,0],[1,1,1,1,1,1,0],[1,1,1,1,1,1,0],[1,1,1,1,
            1,1,0]],
        _1: [[0,0,0,1,0,0,0],[0,0,1,1,0,0,0],[0,0,0,1,0,0,0],[0,0,0,1,0,0,0],[0,0,
            0,1,0,0,0],[0,0,0,1,0,0,0],[0,0,1,1,1,0,0],[0,0,0,0,0,0,0]],
        _2: [[0,0,1,1,1,0,0],[0,1,0,0,0,1,0],[0,0,0,0,0,1,0],[0,0,0,1,1,0,0],[0,0,
            1,0,0,0,0],[0,1,0,0,0,0,0],[0,1,1,1,1,1,0],[0,0,0,0,0,0,0]],
        _3: [[0,0,1,1,1,0,0],[0,1,0,0,0,1,0],[0,0,0,0,0,1,0],[0,0,0,1,1,0,0],[0,0,
            0,0,0,1,0],[0,1,0,0,0,1,0],[0,0,1,1,1,0,0],[0,0,0,0,0,0,0]],
        _4: [[0,0,0,1,1,0,0],[0,0,1,0,1,0,0],[0,1,0,0,1,0,0],[0,1,1,1,1,1,0],[0,0,
            0,0,1,0,0],[0,0,0,0,1,0,0],[0,0,0,0,1,0,0],[0,0,0,0,0,0,0]],
        _5: [[0,1,1,1,1,1,0],[0,1,0,0,0,0,0],[0,1,0,0,0,0,0],[0,1,1,1,1,0,0],[0,0,
            0,0,0,1,0],[0,0,0,0,0,1,0],[0,1,1,1,1,0,0],[0,0,0,0,0,0,0]],
        _6: [[0,0,1,1,1,0,0],[0,1,0,0,0,1,0],[0,1,0,0,0,0,0],[0,1,1,1,1,0,0],[0,1,
            0,0,0,1,0],[0,1,0,0,0,1,0],[0,0,1,1,1,0,0],[0,0,0,0,0,0,0]],
        _7: [[0,1,1,1,1,1,0],[0,1,0,0,0,1,0],[0,0,0,0,0,1,0],[0,0,0,0,1,0,0],[0,0,
            0,1,0,0,0],[0,0,0,1,0,0,0],[0,0,0,1,0,0,0],[0,0,0,0,0,0,0]],
        _8: [[0,0,1,1,1,0,0],[0,1,0,0,0,1,0],[0,1,0,0,0,1,0],[0,0,1,1,1,0,0],[0,1,
            0,0,0,1,0],[0,1,0,0,0,1,0],[0,0,1,1,1,0,0],[0,0,0,0,0,0,0]],
        _9: [[0,0,1,1,1,0,0],[0,1,0,0,0,1,0],[0,1,0,0,0,1,0],[0,0,1,1,1,1,0],[0,0,
            0,0,0,1,0],[0,1,0,0,0,1,0],[0,0,1,1,1,0,0],[0,0,0,0,0,0,0]],
        _0: [[0,0,1,1,1,0,0],[0,1,0,0,0,1,0],[0,1,0,0,1,1,0],[0,1,0,1,0,1,0],[0,1,
            1,0,0,1,0],[0,1,0,0,0,1,0],[0,0,1,1,1,0,0],[0,0,0,0,0,0,0]],
        _a: [[0,0,0,0,0],[0,0,0,0,0],[0,1,1,0,0],[0,0,0,1,0],[0,1,1,1,0],[1,0,0,1,
            0],[0,1,1,1,0],[0,0,0,0,0],[0,0,0,0,0]],
        _b: [[1,0,0,0,0],[1,0,0,0,0],[1,1,1,0,0],[1,0,0,1,0],[1,0,0,1,0],[1,0,0,1,
            0],[1,1,1,0,0],[0,0,0,0,0],[0,0,0,0,0]],
        _c: [[0,0,0,0,0],[0,0,0,0,0],[0,1,1,1,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,
            0],[0,1,1,1,0],[0,0,0,0,0],[0,0,0,0,0]],
        _d: [[0,0,0,1,0],[0,0,0,1,0],[0,1,1,1,0],[1,0,0,1,0],[1,0,0,1,0],[1,0,0,1,
            0],[0,1,1,1,0],[0,0,0,0,0],[0,0,0,0,0]],
        _e: [[0,0,0,0,0],[0,0,0,0,0],[0,1,1,0,0],[1,0,0,1,0],[1,1,1,1,0],[1,0,0,0,
            0],[0,1,1,0,0],[0,0,0,0,0],[0,0,0,0,0]],
        _f: [[0,0,1,0],[0,1,0,0],[1,1,1,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],
            [0,0,0,0],[0,0,0,0]],
        _g: [[0,0,0,0,0],[0,0,0,0,0],[0,1,1,1,0],[1,0,0,1,0],[1,0,0,1,0],[1,0,0,1,
            0],[0,1,1,1,0],[0,0,0,1,0],[0,1,1,0,0]],
        _h: [[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,1,1,0,0],[1,0,0,1,0],[1,0,0,1,
            0],[1,0,0,1,0],[0,0,0,0,0],[0,0,0,0,0]],
        _i: [[1,0],[0,0],[1,0],[1,0],[1,0],[1,0],[1,0],[0,0],[0,0]],
        _j: [[0,1,0],[0,0,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],[1,0,
            0]],
        _k: [[1,0,0,0,0],[1,0,0,0,0],[1,0,0,1,0],[1,0,1,0,0],[1,1,0,0,0],[1,0,1,0,
            0],[1,0,0,1,0],[0,0,0,0,0],[0,0,0,0,0]],
        _l: [[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],[0,1,0],[0,0,0],[0,0,
            0]],
        _m: [[0,0,0,0,0,0],[0,0,0,0,0,0],[1,1,0,1,0,0],[1,0,1,0,1,0],[1,0,1,0,1,0],
            [1,0,1,0,1,0],[1,0,1,0,1,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
        _n: [[0,0,0,0,0],[0,0,0,0,0],[1,1,1,0,0],[1,0,0,1,0],[1,0,0,1,0],[1,0,0,1,
            0],[1,0,0,1,0],[0,0,0,0,0],[0,0,0,0,0]],
        _o: [[0,0,0,0,0],[0,0,0,0,0],[0,1,1,0,0],[1,0,0,1,0],[1,0,0,1,0],[1,0,0,1,
            0],[0,1,1,0,0],[0,0,0,0,0],[0,0,0,0,0]],
        _p: [[0,0,0,0,0],[0,0,0,0,0],[1,1,1,0,0],[1,0,0,1,0],[1,0,0,1,0],[1,0,0,1,
            0],[1,1,1,0,0],[1,0,0,0,0],[1,0,0,0,0]],
        _q: [[0,0,0,0,0],[0,0,0,0,0],[0,1,1,1,1],[1,0,0,0,1],[1,0,0,0,1],[0,0,0,0,
            1],[0,1,1,1,1],[0,0,0,0,1],[0,0,0,0,1]],
        _r: [[0,0,0,0,0],[0,0,0,0,0],[1,1,1,0,0],[1,0,0,1,0],[1,0,0,0,0],[1,0,0,0,
            0],[1,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],
        _s: [[0,0,0,0,0],[0,0,0,0,0],[0,1,1,1,0],[1,0,0,0,0],[0,1,1,0,0],[0,0,0,1,
            0],[1,1,1,0,0],[0,0,0,0,0],[0,0,0,0,0]],
        _t: [[0,1,0,0],[0,1,0,0],[1,1,1,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],
            [0,0,0,0],[0,0,0,0]],
        _u: [[0,0,0,0,0],[0,0,0,0,0],[1,0,0,1,0],[1,0,0,1,0],[1,0,0,1,0],[1,0,0,1,
            0],[0,1,1,1,0],[0,0,0,0,0],[0,0,0,0,0]],
        _v: [[0,0,0,0,0],[0,0,0,0,0],[1,0,0,1,0],[1,0,0,1,0],[1,0,0,1,0],[1,0,0,1,
            0],[0,1,1,0,0],[0,0,0,0,0],[0,0,0,0,0]],
        _w: [[0,0,0,0,0,0],[0,0,0,0,0,0],[1,0,1,0,1,0],[1,0,1,0,1,0],[1,0,1,0,1,0],
            [1,0,1,0,1,0],[0,1,0,1,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
        _x: [[0,0,0,0,0,0],[0,0,0,0,0,0],[1,0,0,0,1,0],[0,1,0,1,0,0],[0,0,1,0,0,0],
            [0,1,0,1,0,0],[1,0,0,0,1,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
        _y: [[0,0,0,0,0],[0,0,0,0,0],[1,0,0,1,0],[1,0,0,1,0],[1,0,0,1,0],[0,1,1,1,
            0],[0,0,0,1,0],[0,0,0,1,0],[0,1,1,0,0]],
        _z: [[0,0,0,0,0,0],[0,0,0,0,0,0],[1,1,1,1,1,0],[0,0,0,1,0,0],[0,0,1,0,0,0],
            [0,1,0,0,0,0],[1,1,1,1,1,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
        _Z: [[1,1,1,1,1,0],[0,0,0,0,1,0],[0,0,0,1,0,0],[0,0,1,0,0,0],[0,1,0,0,0,0],
            [1,0,0,0,0,0],[1,1,1,1,1,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
        _Y: [[1,0,0,0,1,0],[1,0,0,0,1,0],[0,1,0,1,0,0],[0,0,1,0,0,0],[0,0,1,0,0,0],
            [0,0,1,0,0,0],[0,0,1,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
        _X: [[1,0,0,0,1,0],[1,0,0,0,1,0],[0,1,0,1,0,0],[0,0,1,0,0,0],[0,1,0,1,0,0],
            [1,0,0,0,1,0],[1,0,0,0,1,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
        _W: [[1,0,0,0,1,0],[1,0,0,0,1,0],[1,0,0,0,1,0],[1,0,0,0,1,0],[1,0,1,0,1,0],
            [1,1,0,1,1,0],[1,0,0,0,1,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
        _V: [[1,0,0,0,1,0],[1,0,0,0,1,0],[1,0,0,0,1,0],[1,0,0,0,1,0],[1,0,0,0,1,0],
            [0,1,0,1,0,0],[0,0,1,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
        _U: [[1,0,0,0,1,0],[1,0,0,0,1,0],[1,0,0,0,1,0],[1,0,0,0,1,0],[1,0,0,0,1,0],
            [1,0,0,0,1,0],[0,1,1,1,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
        _T: [[1,1,1,1,1,0],[0,0,1,0,0,0],[0,0,1,0,0,0],[0,0,1,0,0,0],[0,0,1,0,0,0],
            [0,0,1,0,0,0],[0,0,1,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
        _S: [[0,1,1,1,0,0],[1,0,0,0,1,0],[1,0,0,0,0,0],[0,1,1,1,0,0],[0,0,0,0,1,0],
            [1,0,0,0,1,0],[0,1,1,1,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
        _R: [[1,1,1,1,0,0],[1,0,0,0,1,0],[1,0,0,0,1,0],[1,1,1,1,0,0],[1,0,1,0,0,0],
            [1,0,0,1,0,0],[1,0,0,0,1,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
        _Q: [[0,1,1,1,0,0],[1,0,0,0,1,0],[1,0,0,0,1,0],[1,0,0,0,1,0],[1,0,0,0,1,0],
            [1,0,1,0,1,0],[0,1,1,1,0,0],[0,0,0,0,1,0],[0,0,0,0,0,0]],
        _P: [[1,1,1,1,0,0],[1,0,0,0,1,0],[1,0,0,0,1,0],[1,1,1,1,1,0],[1,0,0,0,0,0],
            [1,0,0,0,0,0],[1,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
        _O: [[0,1,1,1,0,0],[1,0,0,0,1,0],[1,0,0,0,1,0],[1,0,0,0,1,0],[1,0,0,0,1,0],
            [1,0,0,0,1,0],[0,1,1,1,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
        _N: [[1,0,0,0,1,0],[1,1,0,0,1,0],[1,0,1,0,1,0],[1,0,0,1,1,0],[1,0,0,0,1,0],
            [1,0,0,0,1,0],[1,0,0,0,1,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
        _M: [[1,0,0,0,1,0],[1,1,0,1,1,0],[1,0,1,0,1,0],[1,0,0,0,1,0],[1,0,0,0,1,0],
            [1,0,0,0,1,0],[1,0,0,0,1,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
        _L: [[1,0,0,0,0,0],[1,0,0,0,0,0],[1,0,0,0,0,0],[1,0,0,0,0,0],[1,0,0,0,0,0],
            [1,0,0,0,0,0],[1,1,1,1,1,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
        _K: [[1,0,0,0,1,0],[1,0,0,1,0,0],[1,0,1,0,0,0],[1,1,0,0,0,0],[1,0,1,0,0,0],
            [1,0,0,1,0,0],[1,0,0,0,1,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
        _J: [[1,1,1,1,0],[0,0,0,1,0],[0,0,0,1,0],[0,0,0,1,0],[0,0,0,1,0],[1,0,0,1,
            0],[0,1,1,0,0],[0,0,0,0,0],[0,0,0,0,0]],
        _I: [[1,1,1,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[1,1,1,0],
            [0,0,0,0],[0,0,0,0]],
        _H: [[1,0,0,0,1,0],[1,0,0,0,1,0],[1,0,0,0,1,0],[1,1,1,1,1,0],[1,0,0,0,1,0],
            [1,0,0,0,1,0],[1,0,0,0,1,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
        _G: [[0,1,1,1,0,0],[1,0,0,0,1,0],[1,0,0,0,0,0],[1,0,0,1,1,0],[1,0,0,0,1,0],
            [1,0,0,0,1,0],[0,1,1,1,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
        _F: [[1,1,1,1,1,0],[1,0,0,0,0,0],[1,0,0,0,0,0],[1,1,1,1,0,0],[1,0,0,0,0,0],
            [1,0,0,0,0,0],[1,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
        _E: [[1,1,1,1,1,0],[1,0,0,0,0,0],[1,0,0,0,0,0],[1,1,1,1,0,0],[1,0,0,0,0,0],
            [1,0,0,0,0,0],[1,1,1,1,1,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
        _D: [[1,1,1,0,0,0],[1,0,0,1,0,0],[1,0,0,0,1,0],[1,0,0,0,1,0],[1,0,0,0,1,0],
            [1,0,0,0,1,0],[1,1,1,1,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
        _C: [[0,1,1,1,0,0],[1,0,0,0,1,0],[1,0,0,0,0,0],[1,0,0,0,0,0],[1,0,0,0,0,0],
            [1,0,0,0,1,0],[0,1,1,1,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
        _B: [[1,1,1,0,0,0],[1,0,0,1,0,0],[1,0,0,1,0,0],[1,1,1,1,0,0],[1,0,0,0,1,0],
            [1,0,0,0,1,0],[1,1,1,1,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
        _A: [[0,0,1,0,0,0],[0,1,0,1,0,0],[1,0,0,0,1,0],[1,0,0,0,1,0],[1,1,1,1,1,0],
            [1,0,0,0,1,0],[1,0,0,0,1,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
        _col: [[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,
            0,0,0,0,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,
            0,0,0]],
        _dot: [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[1,0],[0,0],[0,0]],
        _pct: [[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,1,1,0,0,1,0],[0,
            1,1,0,1,0,0],[0,0,0,1,0,0,0],[0,0,1,0,1,1,0],[0,1,0,0,1,1,0],[0,0,0,0,
            0,0,0]],
        _spa: [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,
            0],[0,0,0,0],[0,0,0,0]],
        _ats: [[0,0,1,1,1,1,0,0],[0,1,0,0,0,0,1,0],[1,0,0,1,1,0,1,0],[1,0,1,0,1,0,
            1,0],[1,0,1,0,1,0,1,0],[1,0,0,1,1,0,1,0],[1,0,0,0,0,1,0,0],[0,1,0,0,0,
            0,0,0],[0,0,1,1,1,1,0,0]],
        _car: [[0,0,1,0,0,0],[0,1,0,1,0,0],[1,0,0,0,1,0],[0,0,0,0,0,0],[0,0,0,0,0,
            0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
        _sta: [[0,0,0,0,0,0],[0,0,1,0,0,0],[1,0,1,0,1,0],[0,1,1,1,0,0],[1,0,1,0,1,
            0],[0,0,1,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
        _lbr: [[0,0,1,0],[0,1,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[0,1,0,0],[0,0,1,
            0],[0,0,0,0],[0,0,0,0]],
        _rbr: [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,1,0,0],[1,0,0,
            0],[0,0,0,0],[0,0,0,0]],
        _com: [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,1,0],[0,1,0],[1,
            0,0]],
        _sem: [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,1,0],[0,0,0],[0,1,0],[0,1,0],[1,
            0,0]],
        _dbq: [[1,0,1,0],[1,0,1,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,
            0],[0,0,0,0],[0,0,0,0]],
        _sgq: [[1,0],[1,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],
        _dol: [[0,0,0,0,0],[0,0,1,0,0],[0,1,1,1,0],[1,0,1,0,0],[0,1,1,0,0],[0,0,1,
            1,0],[1,1,1,0,0],[0,0,1,0,0],[0,0,0,0,0]],
        _pou: [[0,0,0,0,0,0],[0,1,0,1,0,0],[0,1,0,1,0,0],[1,1,1,1,1,0],[0,1,0,1,0,
            0],[1,1,1,1,1,0],[0,1,0,1,0,0],[0,1,0,1,0,0],[0,0,0,0,0,0]],
        _que: [[0,1,1,1,0,0],[1,0,0,0,1,0],[0,0,0,0,1,0],[0,0,1,1,0,0],[0,0,1,0,0,
            0],[0,0,0,0,0,0],[0,0,1,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
        _hyp: [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,1,1,1,1,
            0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
        _und: [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,
            0],[0,0,0,0,0,0],[0,0,0,0,0,0],[1,1,1,1,1,0],[0,0,0,0,0,0]],
        _sla: [[0,0,0,1,0],[0,0,0,1,0],[0,0,1,0,0],[0,0,1,0,0],[0,1,0,0,0],[0,1,0,
            0,0],[1,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],
        '_+': [[0,0,0,0,0,0,0],[0,0,0,1,0,0,0],[0,0,0,1,0,0,0],[0,1,1,1,1,1,0],[0,
            0,0,1,0,0,0],[0,0,0,1,0,0,0],[0,0,0,0,0,0,0]],
        enter: 'ent',
        height: 9,
        line_space: 2,
        getLter: function (sign) {
            if (sign.match(/[A-Za-z0-9+]/)) 
                { return this["_" + sign]; }
             else {
                switch (sign) {
                    case '\n':
                        return this.enter;
                    case ' ':
                        return this["_spa"];
                    case '$':
                        return this["_dol"];
                    case '#':
                        return this["_pou"];
                    case '^':
                        return this["_car"];
                    case '_':
                        return this["_und"];
                    case '~':
                        return this["_ful"];
                    case "'":
                        return this["_sgq"];
                    case "-":
                        return this["_hyp"];
                    case '"':
                        return this["_dbq"];
                    case ',':
                        return this["_com"];
                    case ';':
                        return this["_sem"];
                    case '(':
                        return this["_lbr"];
                    case ')':
                        return this["_rbr"];
                    case '*':
                        return this["_sta"];
                    case '?':
                        return this["_que"];
                    case '/':
                        return this["_sla"];
                    case '.':
                        return this["_dot"];
                    case '%':
                        return this["_pct"];
                    case ':':
                        return this["_col"];
                    case '@':
                        return this["_ats"];
                    default:
                        return this["__"];
                }
            }
        }
    },
    small: {
        _1: [[1,0,0],[1,0,0],[1,0,0],[1,0,0]],
        _2: [[1,1,1,0],[0,0,1,0],[1,0,0,0],[1,1,1,0]],
        _3: [[1,1,1,0],[0,1,1,0],[0,0,1,0],[1,1,1,0]],
        _4: [[1,0,1,0],[1,0,1,0],[1,1,1,0],[0,0,1,0]],
        _5: [[1,1,1,0],[1,0,0,0],[0,0,1,0],[1,1,1,0]],
        _6: [[1,1,1,0],[1,0,0,0],[1,1,0,0],[1,1,1,0]],
        _7: [[1,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0]],
        _8: [[0,1,1,0],[0,1,1,0],[1,0,1,0],[1,1,1,0]],
        _9: [[1,1,1,0],[0,1,1,0],[0,0,1,0],[1,1,1,0]],
        _0: [[0,1,1,0,0],[1,0,0,1,0],[1,0,0,1,0],[0,1,1,0,0]],
        _Z: [[1,1,1,0],[0,0,1,0],[1,0,0,0],[1,1,1,0]],
        _Y: [[1,0,1,0],[1,0,1,0],[0,1,0,0],[0,1,0,0]],
        _X: [[1,0,1,0],[0,1,0,0],[1,0,1,0],[1,0,1,0]],
        _W: [[1,0,0,0,1,0],[1,0,0,0,1,0],[1,0,1,0,1,0],[0,1,0,1,0,0]],
        _V: [[1,0,1,0],[1,0,1,0],[1,0,1,0],[0,1,0,0]],
        _U: [[1,0,1,0],[1,0,1,0],[1,0,1,0],[0,1,1,0]],
        _T: [[1,1,1,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]],
        _S: [[0,1,1,0],[1,0,0,0],[0,0,1,0],[1,1,0,0]],
        _R: [[1,1,0,0],[1,0,1,0],[1,1,0,0],[1,0,1,0]],
        _Q: [[0,1,1,0,0],[1,0,0,1,0],[1,0,0,1,0],[0,1,1,1,0]],
        _P: [[1,1,0,0],[1,0,1,0],[1,1,0,0],[1,0,0,0]],
        _O: [[0,1,1,0,0],[1,0,0,1,0],[1,0,0,1,0],[0,1,1,0,0]],
        _N: [[1,0,0,1,0],[1,1,0,1,0],[1,0,1,1,0],[1,0,0,1,0]],
        _M: [[0,1,0,1,0,0],[1,0,1,0,1,0],[1,0,1,0,1,0],[1,0,1,0,1,0]],
        _L: [[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,1,1,0]],
        _K: [[1,0,1,0],[1,1,0,0],[1,0,1,0],[1,0,1,0]],
        _J: [[0,0,1,0],[0,0,1,0],[1,0,1,0],[1,1,1,0]],
        _I: [[1,0,0],[1,0,0],[1,0,0],[1,0,0]],
        _H: [[1,0,1,0],[1,0,1,0],[1,1,1,0],[1,0,1,0]],
        _G: [[0,1,1,0],[1,0,0,0],[1,0,1,0],[1,1,1,0]],
        _F: [[1,1,1,0],[1,0,0,0],[1,1,0,0],[1,0,0,0]],
        _E: [[1,1,1,0],[1,1,0,0],[1,0,0,0],[1,1,1,0]],
        _D: [[1,1,0,0],[1,0,1,0],[1,0,1,0],[1,1,0,0]],
        _C: [[0,1,1,0],[1,0,0,0],[1,0,0,0],[0,1,1,0]],
        _B: [[1,1,0,0],[1,1,0,0],[1,0,1,0],[1,1,1,0]],
        _A: [[0,1,0,0],[1,0,1,0],[1,1,1,0],[1,0,1,0]],
        _spa: [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
        _dot: [[0,0],[0,0],[0,0],[1,0]],
        _sla: [[0,0,1,0],[0,1,0,0],[0,1,0,0],[1,0,0,0]],
        '_+': [[0,1,0,0],[1,1,1,0],[0,1,0,0],[0,0,0,0]],
        _hyp: [[0,0,0,0],[1,1,1,0],[0,0,0,0],[0,0,0,0]],
        _col: [[0,0],[1,0],[0,0],[1,0]],
        _lbr: [[0,1,0],[1,0,0],[1,0,0],[0,1,0]],
        _rbr: [[0,1,0],[0,0,1],[0,0,1],[0,1,0]],
        enter: 'ent',
        height: 4,
        getLter: function (sign) {
            sign = sign.toUpperCase();
            if (sign.match(/[A-Z0-9+]/)) 
                { return this["_" + sign]; }
             else {
                switch (sign) {
                    case ' ':
                        return this["_spa"];
                    case '(':
                        return this["_lbr"];
                    case ')':
                        return this["_rbr"];
                    case '\n':
                        return this.enter;
                    case '/':
                        return this["_sla"];
                    case ':':
                        return this["_col"];
                    case "-":
                        return this["_hyp"];
                    case '.':
                        return this["_dot"];
                    default:
                        return this["__"];
                }
            }
        }
    }
}

var Screen = function Screen(param) {
    this.extendParam(param);
    this.font = Font;
    this.drawRect = this.drawRect.bind(this);
    this.drawLine = this.drawLine.bind(this);
    this.drawPixel = this.drawPixel.bind(this);
    this.drawMatrix = this.drawMatrix.bind(this);
    this.drawLetter = this.drawLetter.bind(this);
    this.drawWords = this.drawWords.bind(this);
    this.fillRect = this.fillRect.bind(this);
    this.drawScreen = this.drawScreen.bind(this);
};
Screen.prototype.extendParam = function extendParam (param) {
        var this$1 = this;
        if ( param === void 0 ) param = {};

    var conf = {
        bgColor: '#fff',
        pixelColor: 'f0f0f0',
        pixelWd: 5,
        pixelHt: 5,
        col: 20,
        row: 10,
        width: 500,
        height: 500,
        gutter: 0,
        state: 'off'
    };
    for (var prop in conf) {
        this$1[prop] = param[prop] || conf[prop];
    }
};
Screen.prototype.isIn = function isIn (x, y) {
    return x >= 0 && x <= this.col && y >= 0 && y <= this.row;
};
Screen.prototype.isRectIn = function isRectIn (x, y, w, h) {
    return this.isIn(x, y) && this.isIn(x + w, y + h);
};
Screen.prototype.drawPixel = function drawPixel (x, y, color) {};
Screen.prototype.drawLine = function drawLine (x1, y1, x2, y2, color) {
        var this$1 = this;

    if (!this.isIn(x1, y1) || !this.isIn(x2, y2)) {
        return false;
    }
    if (x1 === x2 && y1 === y2) {
        this.drawPixel(x1, y1, color);
    } else if (x1 === x2 && y1 < y2) {
        for (var i = y1;i <= y2; i++) {
            this$1.drawPixel(x1, i, color);
        }
    } else if (y1 === y2 && x1 < x2) {
        for (var i$1 = x1;i$1 <= x2; i$1++) {
            this$1.drawPixel(i$1, y1, color);
        }
    }
};
Screen.prototype.fillRect = function fillRect (x, y, width, height, color) {
        var this$1 = this;

    if (!this.isRectIn(x, y, width, height)) {
        return false;
    }
    for (var i = 0;i < height; i++) {
        this$1.drawLine(x, y + i, x + width, y + i, color);
    }
};
Screen.prototype.drawRect = function drawRect (x, y, width, height, color) {
    if (!this.isRectIn(x, y, width, height)) {
        return false;
    }
    this.drawLine(x, y, x, y + height - 1, color);
    this.drawLine(x + width - 1, y, x + width - 1, y + height - 1, color);
    this.drawLine(x, y, x + width - 1, y, color);
    this.drawLine(x, y + height - 1, x + width - 1, y + height - 1, color);
};
Screen.prototype.drawMatrix = function drawMatrix (x, y, mat, color) {
        var this$1 = this;

    var w = mat[0].length, h = mat.length;
    for (var i = 0;i < h; i++) 
        { for (var j = 0;j < w; j++) 
        { if (mat[i][j]) 
        { this$1.drawPixel(x + j, y + i, color || mat[i][j]); } } }
};
Screen.prototype.drawLetter = function drawLetter (x, y, letter, fontName, color) {
        if ( letter === void 0 ) letter = 'S';
        if ( fontName === void 0 ) fontName = 'big';
        if ( color === void 0 ) color = '#fff';

    this.drawMatrix(x, y, this.font[fontName].getLter(letter), color);
};
Screen.prototype.drawWords = function drawWords (x, y, words, fontName, color) {
        var this$1 = this;
        if ( fontName === void 0 ) fontName = 'big';
        if ( color === void 0 ) color = '#fff';

    var l = words.length, font = this.font[fontName];
    for (var i = 0;i < l; i++) {
        var lt = words.charAt(i);
        this$1.drawLetter(x, y, lt, fontName, color);
        var ltl = font.getLter(lt)[0].length;
        if (lt === '\n' || x > this$1.col - ltl) {
            var lth = font.height + font.line_space;
            x = 0;
            y += lth;
        } else {
            x += ltl;
        }
    }
};
Screen.prototype.drawScreen = function drawScreen (color) {
        var this$1 = this;

    for (var i = 0;i < this.row; i++) 
        { for (var j = 0;j < this.col; j++) 
        { this$1.drawPixel(j, i, color || this$1.pixelColor); } }
};

var EventObserver = function EventObserver() {
    this.observers = [];
};
EventObserver.prototype.subscribe = function subscribe (fn) {
    this.observers.push(fn);
};
EventObserver.prototype.unsubscribe = function unsubscribe (fn) {
    this.observers = this.observers.filter(function (subscribe) { return subscribe !== fn; });
};
EventObserver.prototype.unsubscribeAll = function unsubscribeAll () {
    this.observers = [];
};
EventObserver.prototype.broadcast = function broadcast () {
        var data = [], len = arguments.length;
        while ( len-- ) data[ len ] = arguments[ len ];

    this.observers.forEach(function (subscriber) { return subscriber.apply(void 0, data); });
};

var LedScreen$1 = (function (Screen$$1) {
    function LedScreen(wrapperId, params) {
        if ( wrapperId === void 0 ) wrapperId = 'ledScreen';

        Screen$$1.call(this, params);
        this.canvas = LedScreen.initCanvas(wrapperId);
        this.canvas.style.background = this.bgColor;
        this.ctx = this.canvas.getContext("2d");
        this.onResize = this.onResize.bind(this);
        this.refreshObserver = new EventObserver();
        this.refresh = this.refresh.bind(this);
        this.drawImage = this.drawImage.bind(this);
        this.initEvent();
        this.onResize();
        this.turnOn();
        this.refresh();
        this.imageCache = {};
        this.events = ["click"];
        this.brushAPI = {
            drawPixel: this.drawPixel,
            drawRect: this.drawRect,
            drawLine: this.drawLine,
            drawLetter: this.drawLetter,
            drawMatrix: this.drawMatrix,
            drawWords: this.drawWords,
            drawImage: this.drawImage,
            fillScreen: this.drawScreen,
            fillRect: this.fillRect
        };
    }

    if ( Screen$$1 ) LedScreen.__proto__ = Screen$$1;
    LedScreen.prototype = Object.create( Screen$$1 && Screen$$1.prototype );
    LedScreen.prototype.constructor = LedScreen;
    LedScreen.prototype.turnOn = function turnOn () {
        this.state = 'on';
    };
    LedScreen.prototype.on = function on (event, handler) {
        if (!this.events.includes(event)) {
            return false;
        }
        this[("on" + event)] = handler;
    };
    LedScreen.prototype.turnOff = function turnOff () {
        this.state = 'off';
        this.clearScreen();
    };
    LedScreen.prototype.mount = function mount (drawer) {
        this.refreshObserver.subscribe(drawer);
    };
    LedScreen.prototype.unmount = function unmount (drawer) {
        this.refreshObserver.unsubscribe(drawer);
    };
    LedScreen.prototype.unmountAll = function unmountAll () {
        this.refreshObserver.unsubscribeAll();
    };
    LedScreen.prototype.update = function update () {
        this.clearScreen();
        this.drawScreen();
        this.refreshObserver.broadcast(this.brushAPI, this.mousePos || {
            x: 0,
            y: 0
        });
    };
    LedScreen.prototype.refresh = function refresh () {
        if (this.state === 'on') {
            this.update();
        }
        this.requestAnimFrame()(this.refresh);
    };
    LedScreen.prototype.clearScreen = function clearScreen () {
        this.ctx.clearRect(0, 0, this.width, this.height);
    };
    LedScreen.prototype.screenPos2ledPos = function screenPos2ledPos (sPos) {
        var bdRect = this.canvas.getBoundingClientRect(), offsetX = bdRect.left, offsetY = bdRect.top;
        if (sPos.x - offsetX < 0 || sPos.y - offsetY < 0) {
            return {
                x: 0,
                y: 0
            };
        } else {
            return {
                x: Math.floor((sPos.x - offsetX) / (this.pixelWd + this.gutter)),
                y: Math.floor((sPos.y - offsetY) / (this.pixelHt + this.gutter))
            };
        }
    };
    LedScreen.prototype.drawPixel = function drawPixel (x, y, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * (this.pixelWd + this.gutter) + this.gutter + this.offsetX, y * (this.pixelHt + this.gutter) + this.gutter + this.offsetY, this.pixelWd, this.pixelHt);
    };
    LedScreen.prototype.drawImage = function drawImage (imgPath, x, y, dw) {
        var self = this;
        if (!this.imageCache[imgPath]) {
            this.loadImage(imgPath, function (image) {
                var sw = image.width, sh = image.height, dh = parseInt(dw * sh / sw), tmpCanvas = self.createExtraCanvas(dw, dh), tmpCtx = tmpCanvas.getContext('2d');
                tmpCtx.drawImage(image, 0, 0, dw, dh);
                self.imageCache[imgPath] = tmpCtx.getImageData(0, 0, dw, dh);
                tmpCanvas.remove();
                var matrix = LedScreen.parseImageData(self.imageCache[imgPath]);
                self.drawMatrix(x, y, matrix);
            });
        } else {
            var matrix = LedScreen.parseImageData(this.imageCache[imgPath]);
            this.drawMatrix(x, y, matrix);
        }
    };
    LedScreen.parseImageData = function parseImageData (imageData) {
        var w = imageData.width, h = imageData.height, data = imageData.data, rgbaArr = [], rgba = function (r, g, b, a) { return ("rgba(" + r + ", " + g + ", " + b + ", " + a + ")"); }, list2matrix = function (list, width) {
            var height = Math.ceil(list.length / width), matrix = [];
            for (var i = 0;i < height; i++) {
                matrix.push(list.slice(i * width, (i + 1) * width));
            }
            return matrix;
        };
        for (var i = 0;i < w * h; i++) {
            rgbaArr.push(rgba.apply(void 0, data.slice(i * 4, (i + 1) * 4)));
        }
        return list2matrix(rgbaArr, w);
    };
    LedScreen.prototype.loadImage = function loadImage (imagePath, cbFn) {
        var img = new Image();
        img.src = imagePath;
        img.addEventListener('load', function () {
            cbFn(img);
        });
    };
    LedScreen.prototype.destroy = function destroy () {
        this.canvas.remove();
    };
    LedScreen.prototype.initEvent = function initEvent () {
        var that = this;
        window.addEventListener('resize', this.onResize);
        this.canvas.addEventListener('mousemove', function (e) {
            that.mousePos = that.screenPos2ledPos({
                x: e.clientX,
                y: e.clientY
            });
        });
        this.canvas.addEventListener('click', function (e) {
            if (that.onclick) {
                that.onclick(that.mousePos);
            }
        });
    };
    LedScreen.prototype.onResize = function onResize () {
        this.width = (this.canvas.width = this.canvas.offsetWidth);
        this.height = (this.canvas.height = this.canvas.offsetHeight);
        this.row = Math.floor((this.height - this.gutter) / (this.pixelHt + this.gutter));
        this.col = Math.floor((this.width - this.gutter) / (this.pixelWd + this.gutter));
        var totalGutterW = (this.col - 1) * this.gutter, totalGutterH = (this.row - 1) * this.gutter, totalPixelWd = this.col * this.pixelWd, totalPixelHt = this.row * this.pixelHt;
        this.offsetX = parseInt((this.width - (totalPixelWd + totalGutterW)) / 2);
        this.offsetY = parseInt((this.height - (totalPixelHt + totalGutterH)) / 2);
    };
    LedScreen.prototype.createExtraCanvas = function createExtraCanvas (w, h) {
        var canvasEle = document.createElement('canvas');
        Object.assign(canvasEle.style, {
            width: w,
            height: h,
            display: 'none'
        });
        var bodyEle = document.getElementsByTagName('body')[0], extraCanvas = bodyEle.appendChild(canvasEle);
        extraCanvas.width = w;
        extraCanvas.height = h;
        return extraCanvas;
    };
    LedScreen.initCanvas = function initCanvas (wrapperId) {
        var wrapperEle = document.getElementById(wrapperId), ledScreenClass = 'ledScreenCanvasEl', oldScreen = wrapperEle.getElementsByClassName(ledScreenClass);
        if (oldScreen.length) {
            while (oldScreen.length > 0) {
                wrapperEle.removeChild(oldScreen[0]);
            }
        }
        var canvasEle = document.createElement('canvas');
        canvasEle.className = ledScreenClass;
        canvasEle.style.width = "100%";
        canvasEle.style.height = "100%";
        return wrapperEle.appendChild(canvasEle);
    };
    LedScreen.prototype.requestAnimFrame = function requestAnimFrame () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    };

    return LedScreen;
}(Screen));

window.LedScreen = LedScreen$1;

export default LedScreen$1;
//# sourceMappingURL=ledscreen.m.js.map
