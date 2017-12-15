### 简介
模拟低分辨率显示屏幕

### 演示
待定

### 安装
`npm install ledscreen`

### 使用
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
屏幕配置项
- **bgColor** 屏幕背景颜色
- **pixelHt** 像素高度
- **PixelWd** 像素宽度
- **pixelColor** 像素颜色
- **gutter** 像素间隔

#### screen methods
- **turnOff** 关闭屏幕
`screen.turnOff()`
- **turnOn** 打开屏幕
`screen.turnOn()`
- **destroy** 销毁屏幕
`screen.destroy()`
- **mount** 加载显示函数
``` javascript
screen.mount(function(brush, mousePos){
  // use brush draw something.
  // mousePos.x mousePos.y 鼠标在屏幕上的 x, y 坐标
})
```
- **unmount** 卸载显示函数
`screen.unmount(fnName)`
- **unmountAll** 卸载所有显示函数
`screen.unmountAll()`
- **on** 监听事件（目前仅支持点击事件）
``` javascript
screen.on("click", function(mousePos) {
  // do something
})
```
#### brush methods
**drawPixel** 点亮屏幕上的像素点
``` javascript
@param {Number} x 横坐标
@param {Number} y 横坐标
@param {String} css color string
brush.drawPixel(x, y, color)
```
**drawLine** 画**直**线
``` javascript
drawLine(startX, startY, endX, endY, color)
```
**fillRect** 填充矩形
``` javascript
fillRect(x, y, width, height, color)
```
**drawRect** 画矩形框
``` javascript
drawRect(x, y, width, height, color)
```
**drawMatrix** 根据二维数组画图
``` javascript
drawMatrix(x, y, mat, [color])
//注意：1. 数组元素的值为 0 或 1；2. 如果 color 省略，那么数组元素的值必须是 css color string
```
**drawLetter** 显示单个字母
``` javascript
@param {String} 单个字母
@param {String} 字体名 ['big', 'small']
drawLetter (x, y, letter, fontName, color)
```
待续...
