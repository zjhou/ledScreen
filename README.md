### Intro
模拟低分辨率显示屏幕

### Demo
待定

### Install
`npm install ledscreen`

### Usage
``` javascript
import LedScreen from 'ledscreen'

// 1. 初始化
// screenWrapper 容器 id
const screen = new LedScreen('screenWrapper', {
    bgColor: '#000',    // 屏幕背景色
    pixelHt: 6,         // 像素粒高度
    pixelWd: 6,         // 像素粒宽度
    pixelColor: '#111', // 像素粒初始颜色
    gutter: 1,          // 像素间隔
});

// 2. 显示(完整工具列表见 API 部分)
let drawRect = (brush) => brush.drawRect(1, 1, 20, 10, '#ff8888');
screen.mount(drawRect)
```

### API
``` javascript
const screen = new LedScreen('wrapperId', option)
```

#### option
屏幕配置项是一个对象，属性如下：
- `bgColor` 屏幕背景颜色
- `pixelHt` 像素高度
- `PixelWd` 像素宽度
- `pixelColor` 像素颜色
- `gutter` 像素间隔

#### screen methods
- `screen.turnOff()` 关闭屏幕
- `screen.turnOn()` 打开屏幕
- `screen.destroy()` 销毁屏幕
- `screen.mount(cbFn)` 加载显示函数
``` javascript
screen.mount(function(brush, mousePos){
  // use brush draw something.
  // mousePos.x mousePos.y 鼠标在屏幕上的 x, y 坐标
})
```
- `screen.unmount(fnName)` 卸载显示函数
- `screen.unmountAll()` 卸载所有显示函数
- `screen.on('click', cbFn)` 监听点击事件
``` javascript
screen.on("click", function(mousePos) {
  // do something
})
```

#### brush methods
`brush.drawPixel(x, y, color)` 点亮屏幕上的像素点

``` javascript
@param {Number} x 横坐标
@param {Number} y 横坐标
@param {String} css color string
brush.drawPixel(x, y, color)
```

`brush.drawLine(startX, startY, endX, endY, color)` 画**直**线

`brush.fillRect(x, y, width, height, color)` 填充矩形

`brush.drawRect(x, y, width, height, color)` 画矩形框

`brush.drawMatrix(x, y, mat, [color])` 根据二维数组画图

//注意：1. 数组 mat 元素的值为 0 或 1；2. 如果 color 省略，那么元素的值必须是 css color string

`brush.drawLetter(x, y, letter, fontName, color)` 显示单个字母
``` javascript
@param letter {String} 单个字母
@param fontName {String} 字体名 ['big', 'small']
drawLetter (x, y, letter, fontName, color)
```

`brush.drawWords(x, y, words, fontName, color)` 显示一个或多个单词
