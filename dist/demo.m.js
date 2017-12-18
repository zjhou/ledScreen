window.Screen = new LedScreen('screen', {
    pixelHt: 6,
    pixelWd: 6,
    pixelColor: '#111',
    bgColor: '#000',
    gutter: 1
});
var Button = function Button(screen, opt) {
    if (!screen) {
        return {};
    }
    Object.assign(this, {
        x: 2,
        y: 2,
        width: 50,
        height: 20,
        screen: screen || null,
        color: '#fefefe',
        highlightColor: '#ff8888',
        text: null,
        hideBorder: false
    }, opt);
    this.init();
};
Button.prototype.drawRect = function drawRect (color) {
        var this$1 = this;

    return function (brush) { return brush.drawRect(this$1.x, this$1.y, this$1.width, this$1.height, color || this$1.color); };
};
Button.prototype.showText = function showText (color) {
        var this$1 = this;

    return function (brush) { return brush.drawWords(this$1.x + 2, this$1.y + 2, this$1.text, 'small', color || this$1.color); };
};
Button.prototype.show = function show (color) {
    if (!this.hideBorder) {
        this.screen.mount(this.drawRect(color));
    }
    if (this.text) {
        this.screen.mount(this.showText(color));
    }
    return this;
};
Button.prototype.init = function init () {
    var self = this, body = document.getElementsByTagName('body')[0], highlightRect = self.drawRect(self.highlightColor), highlightText = self.showText(self.highlightColor);
    this.screen.mount(function (brush, pos) {
        if (self.isIn(pos)) {
            body.style.cursor = 'pointer';
            if (!self.hideBorder) {
                self.screen.mount(highlightRect);
            }
            self.screen.mount(highlightText);
        } else {
            if (!self.hideBorder) {
                self.screen.unmount(highlightRect);
            }
            self.screen.unmount(highlightText);
            body.style.cursor = 'default';
        }
    });
};
Button.prototype.isIn = function isIn (pos) {
    var isIn = this.screen.isInRect;
    return isIn(pos.x, pos.y, this.x, this.y, this.width, this.height);
};
Button.prototype.onClick = function onClick (fn) {
    if (typeof fn !== 'function') 
        { return false; }
    var self = this;
    this.screen.on('click', function (pos) {
        if (self.isIn(pos)) {
            fn();
        }
    });
    return this;
};
var title = 'LedScreen Demo';
var showTitle = function (brush) {
    brush.drawWords(2, 2, title, 'small', '#00ac50');
};
var drawPageTitle = function (title) { return function (brush) {
    brush.drawWords(2, 10, title, 'big', '#dfddeb');
}; };
Screen.mount(showTitle);
var pages = [{
    title: drawPageTitle('1. drawWords'),
    content: function (brush) {
        var time = new Date().toString().split(' ')[4];
        brush.drawWords((Screen.col - 34) / 2, (Screen.row - 7) / 2, 'Welcome', 'small', '#00994d');
        brush.drawWords((Screen.col - 34) / 2, (Screen.row - 7) / 2 + 9, time, 'small', '#333');
    }
},{
    title: drawPageTitle('2. drawMatrix'),
    content: function (brush) {
        var o = [[1,1],[1,1]], L = [[1,0],[1,0],[1,1]], s = [[0,1,1],[1,1,0]], I = [[1,
            1,1,1]];
        brush.drawMatrix((Screen.col - 34) / 2, (Screen.row - 7) / 2, o, '#ff787b');
        brush.drawMatrix((Screen.col - 34) / 2 + 5, (Screen.row - 7) / 2 - 1, L, '#fbd705');
        brush.drawMatrix((Screen.col - 34) / 2 + 10, (Screen.row - 7) / 2, s, '#6b62ff');
        brush.drawMatrix((Screen.col - 34) / 2 + 15, (Screen.row - 7) / 2 + 1, I, '#0379af');
    }
},{
    title: drawPageTitle('3. drawImage'),
    content: function (brush) {
        try {
            brush.drawImage('images/Walle.png', (Screen.col - 80) / 2, (Screen.col - 80) / 2, 80);
        } catch (e) {
            return false;
        }
    }
}];
var showPage = function (pageObj) {
    Screen.mount(pageObj.title);
    Screen.mount(pageObj.content);
};
var clearPage = function (pageObj) {
    Screen.unmount(pageObj.title);
    Screen.unmount(pageObj.content);
};
var nextPageBtn = new Button(Screen, {
    x: Screen.col - 43,
    y: Screen.row - 10,
    width: 41,
    height: 8,
    color: '#333',
    highlightColor: '#555',
    text: 'next page'
});
var pageNow = 0;
showPage(pages[0]);
function nextPage() {
    clearPage(pages[pageNow]);
    if (pageNow === pages.length - 1) {
        pageNow = 0;
    } else {
        pageNow = pageNow + 1;
    }
    showPage(pages[pageNow]);
}

nextPageBtn.show().onClick(nextPage);
//# sourceMappingURL=demo.m.js.map
