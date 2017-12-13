import Font from './Font'
export default class Screen {
    constructor(param) {
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
    }


    extendParam(param = {}) {
        let conf = {
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

        for (let prop in conf) {
            this[prop] = param[prop] || conf[prop];
        }
    }

    /**
     * 判断点是否在屏幕内
     * @param {Number} x
     * @param {Number} y
     */
    isIn(x, y) {
        return x >= 0 && x <= this.col && y >= 0 && y <= this.row;
    }

    isRectIn(x, y, w, h) {
        return this.isIn(x, y) && this.isIn(x + w, y + h);
    }

    drawPixel(x, y, color) {}

    /**
     * 画直线
     * @param x1
     * @param y1
     * @param x2
     * @param y2
     * @param color
     */
    drawLine(x1, y1, x2, y2, color) {
        if(!this.isIn(x1, y1) || !this.isIn(x2, y2)) {
            return false;
        }

        if (x1 === x2 && y1 === y2) {
            this.drawPixel(x1, y1, color);
        } else if (x1 === x2 && y1 < y2) {
            for (let i = y1; i <= y2; i++) {
                this.drawPixel(x1, i, color);
            }
        } else if (y1 === y2 && x1 < x2) {
            for (let i = x1; i <= x2; i++) {
                this.drawPixel(i, y1, color);
            }
        }
    }

    fillRect(x, y, width, height, color){
        if(!this.isRectIn(x, y, width, height)) {
            return false;
        }

        for(let i = 0; i < height; i++) {
            this.drawLine(x, y+i, x+width, y+i, color);
        }
    }

    drawRect(x, y, width, height, color){
        if(!this.isRectIn(x, y, width, height)) {
            return false;
        }
        this.drawLine(x, y, x, y+height-1, color);
        this.drawLine(x+width-1, y, x+width-1, y+height-1, color);
        this.drawLine(x, y, x+width-1, y, color);
        this.drawLine(x, y+height-1, x+width-1, y+height-1, color);
    }

    /**
     * 根据二维数组画图
     * @param x
     * @param y
     * @param mat
     * @param color
     */
    drawMatrix(
        x, y, // Top left corner's coordinate.
        mat, color){
        let w = mat[0].length,
            h = mat.length;
        for (let i = 0; i < h; i++)
            for(let j = 0; j < w; j++)
                if ( mat[i][j] )
                    this.drawPixel(x+j, y+i, color);
    }

    /**
     * 显示字母
     * @param x
     * @param y
     * @param letter
     * @param fontName ['big', 'small']
     * @param color
     */
    drawLetter (x, y, letter='S', fontName = 'big', color = '#fff') {
        this.drawMatrix(x, y, this.font[fontName].getLter(letter), color)
    }

    /**
     * 显示单词
     * @param x
     * @param y The first letter's top-left cornor's coordinate.
     * @param words
     * @param fontName
     * @param color
     */
    drawWords(x, y, words, fontName = 'big', color = '#fff'){
        let l = words.length,
            font = this.font[fontName];

        for (let i = 0; i < l; i++) {
            let lt = words.charAt(i);
            this.drawLetter (x, y, lt, fontName, color);

            let ltl = font.getLter(lt)[0].length;
            if (lt === '\n' || x > this.col - ltl ){ // auto newline.
                let lth = font.height+font.line_space;
                x = 0;
                y += lth;
            }else{
                x += ltl;
            }
        }
    }

    drawScreen(color) {
        for (let i = 0; i < this.row; i++)
            for (let j = 0; j < this.col; j++)
                this.drawPixel(j, i, color || this.pixelColor);
    }
}