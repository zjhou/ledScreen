class LedScreen {
    constructor(containerId='ledScreen', params) {
        LedScreen.initCanvas(containerId);
    }

    static initCanvas(containerId) {
        let containerEle = document.getElementById(containerId),
            ledScreenClass = 'ledScreenCanvasEll',
            oldScreen = containerEle.getElementsByClassName(ledScreenClass);

        if(oldScreen.length){
            while(oldScreen.length > 0){
                containerEle.removeChild(oldScreen[0]);
            }
        }

        let canvasEle = document.createElement('canvas');
        canvasEle.className = ledScreenClass;
        canvasEle.style.width = "100%";
        canvasEle.style.height = "100%";
        containerEle.appendChild(canvasEle);
    }
}

export default LedScreen;
