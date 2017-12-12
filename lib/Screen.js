export default class Screen {
    constructor(param) {
        this.extendParam(param);
        this.refresh = this.refresh.bind(this);
        this.refresh();
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

    drawPixel(x, y, color) {}

    turnOn() {
        this.state = 'on'
    }

    turnOff() {
        this.state = 'off';
        this.clearScreen();
    }

    drawScreen(color) {
        for (let i = 0; i < this.row; i++)
            for (let j = 0; j < this.col; j++)
                this.drawPixel(j, i, color || this.pixelColor);
    }

    update() {}

    clearScreen() {}

    refresh() {
        if(this.state === 'on'){
            this.update();
        }
        this.requestAnimFrame()(this.refresh);
    }

    requestAnimFrame() {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    }

}