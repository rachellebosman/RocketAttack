"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Game = (function () {
    function Game() {
        this.rocks = [];
        this.maxRocks = 10;
        this.smallRocks = [];
        this.spaceship = new Spaceship();
        this.rock = new Rock();
        this.smallRock = new SmallRock();
        for (var i = 0; i < this.maxRocks; i++) {
            this.rocks.push(new Rock());
            console.log('nieuwe steen');
        }
        for (var i = 0; i < this.maxRocks; i++) {
            this.smallRocks.push(new SmallRock());
            console.log('nieuwe kleine steen');
        }
        var hit = this.checkCollision(this.spaceship.getRectangle(), this.rock.getRectangle());
        console.log("car 1 hits car 2 ? " + hit);
        this.gameLoop();
    }
    Game.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.spaceship.update();
        this.rock.update();
        this.smallRock.update();
        for (var i = 0; i < this.maxRocks; i++) {
            this.rocks[i].update();
        }
        for (var i = 0; i < this.maxRocks; i++) {
            this.smallRocks[i].update();
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var rocksObject = (function () {
    function rocksObject(naamObject) {
        this.htmlElement = document.createElement(naamObject);
        document.body.appendChild(this.htmlElement);
        this.x = Math.random() * window.innerWidth;
        this.y = Math.floor(Math.random() * -600) + -50;
    }
    rocksObject.prototype.getRectangle = function () {
        return this.htmlElement.getBoundingClientRect();
    };
    rocksObject.prototype.update = function () {
        this.y = this.y + 2;
        this.htmlElement.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        if (this.y + this.htmlElement.clientHeight > 900) {
            this.reset();
        }
    };
    rocksObject.prototype.reset = function () {
        this.x = Math.random() * (window.innerWidth - 200);
        this.y = -400 - (Math.random() * 450);
    };
    return rocksObject;
}());
var Rock = (function (_super) {
    __extends(Rock, _super);
    function Rock() {
        return _super.call(this, "rock") || this;
    }
    return Rock;
}(rocksObject));
var SmallRock = (function (_super) {
    __extends(SmallRock, _super);
    function SmallRock() {
        return _super.call(this, "smallRock") || this;
    }
    return SmallRock;
}(rocksObject));
var Spaceship = (function () {
    function Spaceship() {
        var _this = this;
        this.x = 200;
        this.y = window.innerHeight - 100;
        this.speedLeft = 0;
        this.speedRight = 0;
        this.htmlElement = document.createElement("spaceship");
        document.body.appendChild(this.htmlElement);
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Spaceship.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case 37:
                this.speedLeft = 10;
                break;
            case 39:
                this.speedRight = 10;
                break;
        }
    };
    Spaceship.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case 37:
                this.speedLeft = 0;
                break;
            case 39:
                this.speedRight = 0;
                break;
        }
    };
    Spaceship.prototype.getRectangle = function () {
        return this.htmlElement.getBoundingClientRect();
    };
    Spaceship.prototype.update = function () {
        this.x = this.x + this.speedRight - this.speedLeft;
        this.htmlElement.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        if (this.x + this.htmlElement.clientWidth > window.innerWidth || this.x < 0) {
            this.speedLeft = 0;
        }
        if (this.y + this.htmlElement.clientHeight > window.innerHeight || this.y < 0) {
            this.speedRight = 0;
        }
    };
    return Spaceship;
}());
//# sourceMappingURL=main.js.map