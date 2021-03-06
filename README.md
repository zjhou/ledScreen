<p align="center">
  <img src="https://raw.githubusercontent.com/zjhou/ledScreen/master/doc/logo.png" alt="ledScreen" title="ledscreen">
  <br><br>
  <img src="https://img.shields.io/badge/build-passing-green.svg?style=flat-square"/>
  <a href="https://www.npmjs.com/package/ledscreen"><img src="https://img.shields.io/badge/npm-v1.0.10-blue.svg?style=flat-square"/></a>
  <br><br>
</p>


# LedScreen
Pseudo led screen

### Demo
[LedScreen Demo](https://zjhou.github.io/ledScreen/)

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

### Doc
[LedScreen API](https://github.com/zjhou/ledScreen/tree/master/doc)
