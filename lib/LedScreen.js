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
        this.drawImage = this.drawImage.bind(this);
        this.initEvent();
        this.onResize();
        this.turnOn();
        this.refresh();
        this.imageCache = {};
        this.events = [
            "click",
        ];
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

    turnOn() {
        this.state = 'on'
    }

    on(event, handler) {
        if(!this.events.includes(event)){
            return false;
        }
        this[`on${event}`] = handler;
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

    unmountAll() {
        this.refreshObserver.unsubscribeAll();
    }

    update() {
        this.clearScreen();
        this.drawScreen();
        this.refreshObserver.broadcast(this.brushAPI, this.mousePos || {x: 0, y: 0});
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
                x: Math.floor((sPos.x - offsetX) / (this.pixelWd + this.gutter)),
                y: Math.floor((sPos.y - offsetY) / (this.pixelHt + this.gutter))
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

    drawImage(imgPath, x, y, dw) {
        let self = this;
        if(!this.imageCache[imgPath]){
            this.loadImage(imgPath, function (image) {
                let sw = image.width,
                    sh = image.height,
                    dh = parseInt(dw * sh / sw),
                    tmpCanvas = self.createExtraCanvas(dw, dh),
                    tmpCtx = tmpCanvas.getContext('2d');

                tmpCtx.drawImage(image, 0, 0, dw, dh);
		try{
                    self.imageCache[imgPath] = tmpCtx.getImageData(0, 0, dw, dh);
		} catch (e) {
                    tmpCanvas.remove();
		    return false;
		}
                tmpCanvas.remove();
                let matrix = LedScreen.parseImageData(self.imageCache[imgPath]);
                self.drawMatrix(x, y, matrix);
            })
        }else{
            let matrix = LedScreen.parseImageData(this.imageCache[imgPath]);
            this.drawMatrix(x, y, matrix);
        }
    }

    /**
     * 把 ImageData 对象中的 data 转换成包含 rgba 信息的二维数组。
     * @param {Object} imageData ImageData 对象
     */
    static parseImageData(imageData) {
        let w = imageData.width,
            h = imageData.height,
            data = imageData.data,
            rgbaArr = [],
            rgba = (r, g, b, a) => `rgba(${r}, ${g}, ${b}, ${a})`,
            list2matrix = (list, width) => {
                let height = Math.ceil(list.length / width),
                    matrix= [];
                for(let i = 0; i < height; i++){
                    matrix.push(list.slice(i * width, (i + 1) * width))
                }
                return matrix;
            };

        for(let i = 0; i < w * h; i++){
            rgbaArr.push(rgba(...data.slice(i * 4, (i + 1) * 4)))
        }

        return list2matrix(rgbaArr, w);
    }

    loadImage(imagePath, cbFn) {
        let img = new Image();
        img.src = imagePath;
        img.addEventListener('load', function(){
            cbFn(img);
        });
    }

    destroy() {
        this.canvas.remove();
    }

    initEvent() {
        let that = this;
        window.addEventListener('resize', this.onResize);
        this.canvas.addEventListener('mousemove', function (e) {
            that.mousePos = that.screenPos2ledPos({
                x: e.clientX,
                y: e.clientY
            });
        });
        this.canvas.addEventListener('click', function (e) {
            if(that.onclick) {
                that.onclick(that.mousePos)
            }
        })
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


    createExtraCanvas(w, h) {
        let canvasEle = document.createElement('canvas');
        Object.assign(canvasEle.style, {
            width: w,
            height: h,
            display: 'none'
        });

        let bodyEle = document.getElementsByTagName('body')[0],
            extraCanvas = bodyEle.appendChild(canvasEle);

        extraCanvas.width = w;
        extraCanvas.height = h;
        return extraCanvas;
    }

    static initCanvas(wrapperId) {
        let wrapperEle = document.getElementById(wrapperId),
            ledScreenClass = 'ledScreenCanvasEl',
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
