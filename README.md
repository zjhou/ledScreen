### 简介
模拟低分辨率显示屏幕

### 演示
待定

### 安装
- `npm install ledscreen`
- `<script src="dist/ledscreen.js"></script>`

### 用法
``` javascript
// 0. 引入
import LedScreen from 'ledscreen'

// 1. 初始化
const screen = new LedScreen('wrapperId', {
    bgColor: '#000',    // 屏幕背景色
    pixelHt: 6,         // 像素粒高度
    pixelWd: 6,         // 像素粒宽度
    pixelColor: '#111', // 像素粒初始颜色
    gutter: 1,          // 像素间隔
});

// 2. 显示
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
  - `cbFn(brush, mousePos)`
  - `brush` {Object} 详细方法见 brush method 部分
  - `mousePos` {Object} 鼠标在 LedScreen 上的坐标
  - `mousePos.x` {Number} 横坐标
  - `mousePos.y` {Number} 纵坐标

- `screen.unmount(fnName)` 卸载显示函数
- `screen.unmountAll()` 卸载所有显示函数
- `screen.on('click', cbFn)` 监听点击事件
  - `cbFn(mousePos)`

#### brush methods
- `brush.drawPixel(x, y, color)` 点亮屏幕上的像素点
  - `x` {Number}
  - `y` {Number}
  - `color` {String} css color string

- `brush.drawLine(startX, startY, endX, endY, color)` 画**直**线
- `brush.fillRect(x, y, width, height, color)` 填充矩形
- `brush.drawRect(x, y, width, height, color)` 画矩形框
- `brush.drawMatrix(x, y, mat, [color])` 根据二维数组画图
  1. 如果指定 `color` ，那么 `mat` 数组的元素必须是数字 `0` 或数字 `1`
  2. 如果省略 `color` ，那么 `mat` 数组的元素必须是 `color`

- `brush.drawLetter(x, y, letter, fontName, color)` 显示**单个**字母
  - `letter` {String} **单个**字母
  - `fontName` {String} 字体名，合法值：`big` 和 `small`

- `brush.drawWords(x, y, words, fontName, color)` 显示一个或多个单词
- `brush.drawImage(imgPath, x, y, dw)` 显示图片
  - `imgPath` {String} 图片路径
  - `dw` {Number} 图片在 ledScreen 上的宽度
