### 说明
模拟低分辨率显示屏幕

### 演示
待定

### 安装
待定

### 使用
``` javascript
import LedScreen from 'path/to/screen/LedScreen'

// screenWrapper 是容器 id
const screen = new LedScreen('screenWrapper', {
    pixelHt: 6,
    pixelWd: 6,
    pixelColor: '#111',
    bgColor: '#000',
    gutter: 1,
});

let drawRect = (brush) => brush.drawRect(1, 1, 20, 10, '#ff8888');
screen.mount(drawRect)
```

### API
待定
