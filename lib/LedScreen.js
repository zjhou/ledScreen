import Screen from './Screen'
import EventObserver  from './EventObserver'

class LedScreen extends Screen {
    constructor(wrapperId='ledScreen', params) {
        super(params);
        this.canvas = LedScreen.initCanvas(wrapperId);
        this.canvas.style.background = this.bgColor;
        this.ctx = this.canvas.getContext("2d");
        this.onResize = this.onResize.bind(this);
        this.refreshObserver = new EventObserver();
        this.refresh = this.refresh.bind(this);
        this.initEvent();
        this.onResize();
        this.turnOn();
        this.refresh();
        this.brushAPI = {
            drawPixel: this.drawPixel,
            drawRect: this.drawRect,
            drawLine: this.drawLine,
            fillScreen: this.drawScreen,
            fillRect: this.fillRect
        };
    }

    turnOn() {
        this.state = 'on'
    }

    turnOff() {
        this.state = 'off';
        this.clearScreen();
    }

    mount(drawer) {
        this.refreshObserver.subscribe(drawer);
    }

    unmount(drawer) {
        this.refreshObserver.unsubscribe(drawer);
    }

    update() {
        this.clearScreen();
        this.drawScreen();
        this.refreshObserver.broadcast(this.brushAPI);
    }

    refresh() {
        if(this.state === 'on'){
            this.update();
        }
        this.requestAnimFrame()(this.refresh);
    }


    clearScreen() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    screenPos2ledPos(sPos) {
        let bdRect = this.canvas.getBoundingClientRect(),
            offsetX = bdRect.left,
            offsetY = bdRect.top;

        if(sPos.x - offsetX < 0 || sPos.y - offsetY < 0) {
            return {x: 0, y: 0}
        } else {
            return {
                x: Math.ceil((sPos.x - offsetX) / (this.pixelWd + this.gutter)),
                y: Math.ceil((sPos.y - offsetY) / (this.pixelHt + this.gutter))
            }
        }
    }

    drawPixel(x, y, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(
            x * (this.pixelWd + this.gutter) + this.gutter + this.offsetX,
            y * (this.pixelHt + this.gutter) + this.gutter + this.offsetY,
            this.pixelWd,
            this.pixelHt,
        )
    }

    initEvent() {
        window.addEventListener('resize', this.onResize)
    }

    onResize() {
        this.width = this.canvas.width = this.canvas.offsetWidth;
        this.height = this.canvas.height = this.canvas.offsetHeight;
        this.row = Math.floor(
            (this.height - this.gutter) /
            (this.pixelHt + this.gutter)
        );
        this.col = Math.floor(
            (this.width - this.gutter) /
            (this.pixelWd + this.gutter)
        );
        let totalGutterW = (this.col - 1) * this.gutter,
            totalGutterH = (this.row - 1) * this.gutter,
            totalPixelWd = this.col * this.pixelWd,
            totalPixelHt = this.row * this.pixelHt;

        this.offsetX = parseInt(( this.width - ( totalPixelWd + totalGutterW)) / 2);
        this.offsetY = parseInt(( this.height - ( totalPixelHt + totalGutterH)) / 2);
    }


    static initCanvas(wrapperId) {
        let wrapperEle = document.getElementById(wrapperId),
            ledScreenClass = 'ledScreenCanvasEll',
            oldScreen = wrapperEle.getElementsByClassName(ledScreenClass);

        if(oldScreen.length){
            while(oldScreen.length > 0){
                wrapperEle.removeChild(oldScreen[0]);
            }
        }

        let canvasEle = document.createElement('canvas');
        canvasEle.className = ledScreenClass;
        canvasEle.style.width = "100%";
        canvasEle.style.height = "100%";
        return wrapperEle.appendChild(canvasEle);
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

export default LedScreen;