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
        this.currentscreen = new StartScreen(this);
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.currentscreen.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.emptyScreen = function () {
        var foreground = document.getElementsByTagName("foreground")[0];
        foreground.innerHTML = "";
    };
    Game.prototype.showScreen = function (screen) {
        this.currentscreen = screen;
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var GameOver = (function () {
    function GameOver() {
        var _this = this;
        this.textfield = document.createElement("textfieldGameOver");
        document.body.appendChild(this.textfield);
        this.textfield.addEventListener("click", function () { return _this.functienaam(); });
    }
    GameOver.prototype.update = function () {
        this.textfield.innerHTML = "GAME OVER <br><br> Door te veel botsingen is het schip beschadigd en niet in staat om verder te vliegen. <br><br> Nog een keer proberen ? <br>Click op de tekst. ";
    };
    GameOver.prototype.functienaam = function () {
        location.href = "index2.html";
    };
    return GameOver;
}());
var GameScreen = (function () {
    function GameScreen(g) {
        this.lives = 0;
        this.score = 0;
        this.game = g;
        this.spaceship = new Spaceship();
        this.rocks = [new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(),];
        this.smallRocks = [new SmallRock(), new SmallRock()];
        this.textfield = document.createElement("textfield");
        document.body.appendChild(this.textfield);
        this.liveElement = document.createElement("lives");
        document.body.appendChild(this.liveElement);
        this.scoreElement = document.createElement("score");
        document.body.appendChild(this.scoreElement);
        this.updateLives(3);
        this.updateScore(0);
    }
    GameScreen.prototype.update = function () {
        this.spaceship.update();
        for (var _i = 0, _a = this.rocks; _i < _a.length; _i++) {
            var r = _a[_i];
            r.update();
            if (this.checkCollision(this.spaceship.getRectangle(), r.getRectangle())) {
                r.reset();
                console.log("paniek, steen geraakt!");
                this.updateLives(-1);
            }
            if (r.getRectangle().bottom - r.getRectangle().height > window.innerHeight) {
                r.reset();
            }
            for (var _b = 0, _c = this.smallRocks; _b < _c.length; _b++) {
                var sr = _c[_b];
                sr.update();
                if (this.checkCollision(this.spaceship.getRectangle(), sr.getRectangle())) {
                    sr.reset();
                    console.log("power!!");
                    this.updateScore(1);
                }
                if (sr.getRectangle().left + sr.getRectangle().width < 0) {
                    sr.reset();
                }
            }
        }
    };
    GameScreen.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    GameScreen.prototype.updateLives = function (points) {
        this.lives = this.lives + points;
        this.liveElement.innerHTML = "Levens: " + this.lives;
        if (this.lives <= 0) {
            this.game.emptyScreen();
            this.game.showScreen(new GameOver());
        }
    };
    GameScreen.prototype.updateScore = function (pointss) {
        this.score = this.score + pointss;
        this.scoreElement.innerHTML = "Power: " + this.score;
        if (this.score == 20) {
            console.log('alle power items gefixt');
            this.game.emptyScreen();
            this.game.showScreen(new GameWin());
        }
    };
    return GameScreen;
}());
var GameWin = (function () {
    function GameWin() {
        var _this = this;
        this.textfield = document.createElement("textfieldGameOver");
        document.body.appendChild(this.textfield);
        this.textfield.addEventListener("click", function () { return _this.functienaam(); });
        this.schip = document.createElement("schip");
        document.body.appendChild(this.schip);
    }
    GameWin.prototype.update = function () {
        this.textfield.innerHTML = "Je hebt genoeg power verzameld voor de turbo speed! <br><br> Click hier om verder te gaan.";
    };
    GameWin.prototype.functienaam = function () {
        location.href = "index3.html";
    };
    return GameWin;
}());
var rocksObject = (function () {
    function rocksObject(naamObject) {
        this.htmlElement = document.createElement(naamObject);
        document.body.appendChild(this.htmlElement);
        this.x = Math.random() * (window.innerWidth - 200);
        this.y = Math.floor(Math.random() * -600) + -50;
    }
    rocksObject.prototype.getRectangle = function () {
        return this.htmlElement.getBoundingClientRect();
    };
    rocksObject.prototype.update = function () {
        this.y = this.y + 2;
        this.htmlElement.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        if (this.y + this.htmlElement.clientHeight > 650) {
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
        this.speed = 10;
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
        if (this.x + this.htmlElement.clientWidth > window.innerWidth) {
            this.x = this.speedLeft = 0;
            this.speedRight = this.speed;
        }
        if (this.x + this.htmlElement.clientWidth < 0) {
            this.x = window.innerWidth - this.htmlElement.clientWidth;
            this.speedLeft = this.speed;
            this.speedRight = 0;
        }
    };
    return Spaceship;
}());
var StartScreen = (function () {
    function StartScreen(g) {
        var _this = this;
        this.game = g;
        this.textfield = document.createElement("textfield");
        var foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this.textfield);
        this.textfield.addEventListener("click", function () { return _this.switchScreens(); });
    }
    StartScreen.prototype.update = function () {
        this.textfield.innerHTML = "<br><br>Help, we zijn vast komen te zitten in een asteroide storm! We hebben te weinig brandstof om met turbo speed te kunnen ontsnappen. Help jij ons om genoeg groene power-elementen (20) te verzamelen voor deze turbo speed ?<br><br> Gebruik de pijltjes toetsen om naar links en rechts te bewegen en ontwijk de stenen. <br><br> Click op de tekst om de reddingsactie te starten!  ";
    };
    StartScreen.prototype.switchScreens = function () {
        this.game.emptyScreen();
        this.game.showScreen(new GameScreen(this.game));
    };
    return StartScreen;
}());
//# sourceMappingURL=main.js.map