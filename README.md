<p align="center">
  <img src="https://github.com/zjhou/ledScreen/blob/master/doc/logo.png" alt="ledScreen" title="ledscreen">
  <br><br>
</p>


# LedScreen
Pseudo led screen

### Demo
[LedScreen Demo](http://blog.zjhou.me/ledScreen/)

### Install
- `npm install ledscreen`
- `<script src="dist/ledscreen.js"></script>`

### Usage
``` javascript
import LedScreen from 'ledscreen'

const screen = new LedScreen('wrapperId');
let drawRect = (brush) => brush.drawRect(1, 1, 20, 10, '#ff8888');
screen.mount(drawRect)
```

### DOC
[LedScreen API](https://github.com/zjhou/ledScreen/tree/master/doc)
