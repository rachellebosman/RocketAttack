# Programmeren 4 game
## Link naar de game
https://sven-koene.github.io/programmeren4/

# Checklist programmeren4 game

- [x] De code van het individuele project staat op GitHub.
- [x] De game is online speelbaar.
- [x] De game bevat minimaal één van de onderstaande extra uitdagingen.
- [x] De game heeft een startscherm en een eindscherm.
- [x] Er zijn geen bugs.
- [x] Het project maakt gebruik van deze OOP principes.
    - [x] Classes
    - [x] Encapsulation
    - [x] Composition
    - [x] Inheritance
- [x] De GitHub pagina bevat een ReadMe bestand. Dit bestand bevat:
    - [x] Per bovengenoemd OOP principe een uitleg: waar is het toegepast, en waarom is het
        op die plek toegepast. De uitleg is inclusief code voorbeelden.
    - [x] Een klassendiagram van de game.
    - [x] Een link naar de peer review die in week 6 is gedaan

### Extra opdrachten 

- [ ] De game ziet er zeer verzorgd uit dankzij goed uitgewerkt UI design en artwork.
- [ ] De game bevat een hiscore lijst. Scores worden bewaard nadat de game is afgesloten.
- [ ] De game werkt met Canvas in plaats van DOM elementen
- [x] De game bevat local of online multiplayer.
- [ ] De game werkt op mobiele schermen en ondersteunt touchscreen controls.
- [ ] De game maakt gebruik van device api's zoals de camera, microfoon, gyroscoop of GPS.
- [ ] De game gebruikt een externe library uit de lijst in deze modulewijzer.

## OOP principes
### Classes
    Classes worden in mijn game best veel gebruikt en dit is logisch. 
    Voor elke nieuwe onderdeel dat je maakt moet je een Class maken en in de constructor en de update
    van de class geef je dan alle onderdelen mee die die Class moet hebben.  
    De Classes die ik in mijn game heb zitten zijn bijvoorbeeld:
-	Character
-	Coin
-	Enemy
-	Game
-	Startscreen
-	Gamescreen
-	Gameover
-	Wall
Hieronder een voorbeeld van de Class Gameover
``` class GameOver {
    private gamescreen: GameScreen
    private textfield: HTMLElement

    constructor(g:GameScreen) {
        this.gamescreen = g
       
        this.textfield = document.createElement("textfield")
        let foreground = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this.textfield)
    }
    public update() {
        this.textfield.innerHTML = "GAME OVER, MAN!"+"<br> Player 1 score:"+this.gamescreen.score1+ "<br> Player 2 score:"+this.gamescreen.score2

    }
}
```

### Encapsulation

    Encapsulation is het gebruiken van de tags: private, public en protected. 
    Door deze 3 tags te gebruiken bepaal je waar die methods en properties kan worden gebruikt.  
    
    Bij het gebruik van private kan je het onderdeel alleen gebruiken in de class waar je hem aan maakt.
    
    Bij het gebruik van public kan je dat onderdeel van elk bestand in de bestandsmap aanroepen.
    
    Bij het gebruik van protected kan je de onderdelen alleen wijzigen als die classes 
    een child class zijn van de parent class. Protected wordt dan in de parent class gebruikt. 
    Denk aan een Character object met 2 character childs.

```    
    private element:HTMLElement
    protected  x:number
    protected  y:number

    protected leftKey:number
    protected rightKey:number
    protected upKey:number
    protected downKey:number
        
    private leftSpeed: number = 0
    private rightSpeed: number = 0
    private upSpeed: number = 0
    private downSpeed: number = 0
    public speed: number = 10
    public lives:number = 5
```
#### Private

    In het bovenstaande voorbeeld komend uit mijn CharacterObject class zie je 
    
    private element:HTMLElement

    dit houd in dat alleen in deze class dit onderdeel kan worden gebruikt en aangepast. 
    Door zoveel mogelijk gebruik te maken van private waar dat kan houd je je code veilig. 
    Ook kan je er iets zekerder van zijn dat er minder bugs zijn.

#### Public

    Ook zie je bijvoorbeeld:

    public speed: number = 10
    public lives: number = 5

    Deze zijn public omdat ik in de game de waardes van deze variabele wil kunnen veranderen
    als deze bijvoorbeeld private waren had ik deze niet vanuit een andere class kunnen bereiken en aanpassen.

#### Protected

    als laatst is er nog:

    protected  x:number
    protected  y:number

    Deze x en y variabele zijn hier protected omdat de 2 Child Classes, 
    in dit geval 2 characters, verschillende x en y waarde mee krijgen.
    door in de constructor van die child Classes 
    super()
    te zetten zijn dan de protected waardes dus aan te passen zodat de children beide andere waardes kunnen krijgen.
    Het gebruik van te veel public op te veel plaatsen kan ervoor zorgen dat je code onveilig is of bugs krijgt.



### Composition

    Composition is als het waren hoe alle classes met elkaar samen werken en hoe ze in elkaar verweven zijn om 
    de game te laten werken.
    Bijvoorbeeld:
    
    Mijn class Game staat als parent bovenaan het schema.
    In de game staan dan het StartScreen, GameScreen en de GameOver.
    
    Elk van deze 3 classes heeft daar dan weer nieuwe classes in zitten. 
    Zo creëer je een structuur van Classes die samen functioneren als een game.
    
    In het klassendiagram is de structuur/composition te zien van mijn game.


### Inheritance

    Inheritance gebruik je om dubbele code te voorkomen door meerdere classes aan 1 parent class te koppelen. 
    In mijn code heb ik dit 2 keer toegepast. 
    Ik weet zeker dat er een betere manier is om dit efficienter te gebruiken maar omdat ik nog niet bekend ben 
    met het gebruik ervan heb ik het veilig gehouden en gebruikt voor de characters en de enemies. 

    Ik heb in mijn game 2 characters zitten en beide characters zijn in de basis hetzelfde. 
    Het enige verschil is de x en y locatie, de toetsen waarmee ze bestuurd worden en de ruimte waar ze in kunnen 
    lopen.

    In de code hieronder zie je als eerst het CharacterObject en daaronder de 2 codes van de Characters. 
    Het CharacterObject en het EnemyObject zijn hier de parents. 
    Hier zie je ook het gebruik van encapsulation doormiddel van public, private en protected tags voor 
    methods en properties.
#### CharacterObject
```
class CharacterObject
{
    private element:HTMLElement
    protected  x:number
    protected  y:number

    protected leftKey:number
    protected rightKey:number
    protected upKey:number
    protected downKey:number
        
    private leftSpeed: number = 0
    private rightSpeed: number = 0
    private upSpeed: number = 0
    private downSpeed: number = 0
    public speed: number = 10
    public lives:number = 5

    constructor()
    {
        this.element = document.createElement("character")
        let foreground = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this.element)
        
    
        this.leftKey = 37
        this.rightKey = 39
        this.upKey = 38
        this.downKey = 40

        this.x = innerWidth - 100
        this.y = innerHeight - 200
    
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }
    

    private onKeyDown(e: KeyboardEvent): void {
        switch (e.keyCode) {
            case this.leftKey:
                this.leftSpeed = this.speed
                break
            case this.rightKey:
                this.rightSpeed = this.speed
                break
            case this.upKey:
                this.upSpeed = this.speed
                break
            case this.downKey:
                this.downSpeed = this.speed
                break             
        }
    }

    private onKeyUp(e: KeyboardEvent): void 
    {
        switch (e.keyCode) {
            case this.leftKey:
                this.leftSpeed = 0
                break
            case this.rightKey:
                this.rightSpeed = 0
                break
            case this.upKey:
                this.upSpeed = 0
                break
            case this.downKey:
                this.downSpeed = 0
                break
        }
    }
    
    public update() {
  
        let newX = this.x - this.leftSpeed + this.rightSpeed
        let newY = this.y - this.upSpeed + this.downSpeed
        
        if (newX > 90 && newX + 66 < window.innerWidth / 2 - 50) this.x = newX
        if (newX > window.innerWidth / 2 + 45 && newX + 66 < window.innerWidth - 95) this.x = newX
        
        if (newY > 0 && newY + 129 < window.innerHeight) this.y = newY
       
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    
    }
    public getRectangle() {
        return this.element.getBoundingClientRect()
    }

}
```
#### Character 1
```
/// <reference path="characterObject.ts"/>
class Character extends CharacterObject
{
    constructor()
    {
        super()
        this.leftKey = 65
        this.rightKey = 68
        this.upKey = 87
        this.downKey = 83

        this.x = 100
        this.y = innerHeight - 200
    }
}


```
#### Character 2
```	
/// <reference path="characterObject.ts"/>
class Character2 extends CharacterObject
{
    constructor()
    {
        super()
        this.leftKey = 37
        this.rightKey = 39
        this.upKey = 38
        this.downKey = 40

        this.x = innerWidth - 166
        this.y = innerHeight - 200
    }
}


 ```


Bij de enemies lag dit ongeveer hetzelfde. Ik heb deze in 2e gedeeld zodat ik enemies van rechts naar links kan laten bewegen en een aantal van links naar rechts.
#### EnemyObject
```
class enemyObject{
    protected element:HTMLElement
    protected speed:number

    constructor(){
        this.speed = Math.floor(Math.random() * 5) + 4
        this.element = document.createElement("enemy")
        let foreground = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this.element)
    }
    
    public getRectangle() {
        return this.element.getBoundingClientRect()
    }
}
```
#### enemy 1
```
/// <reference path="enemyObject.ts"/>

class Enemy extends enemyObject
{

    private x:number
    private y:number

    constructor ()
    {
        super()
       

        this.y = Math.random() * (window.innerHeight - 77)
        this.x = -77 - (Math.random() * 450)

    }

    public update():void{
        this.x += this.speed
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    public reset(){
        this.y = Math.random() * (window.innerHeight - 100)
        this.x = -77 - (Math.random() * 450) 
    }
}
```
#### enemy 2
``` 
/// <reference path="enemyObject.ts"/>

class Enemy2 extends enemyObject
{

    private x:number
    private y:number

    constructor ()
    {
        super()
       

        this.y = Math.random() * (window.innerHeight - 77)
        this.x = (window.innerWidth + 77) + (Math.random() * 450)

    }
    
    public update():void{
        this.x -= this.speed
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    public reset(){
        this.y = Math.random() * (window.innerHeight - 100)
        this.x = (window.innerWidth + 77) + (Math.random() * 450)
    }
}
```
## Klassendiagram

![plaatje van mijn klassendiagram](../master/docs/images/klassendiagram.png)

# peer review game Jordy van Santen.
https://jordy770.github.io/game-master/  </br>
https://github.com/jordy770/game-master

    Over het algemeen ziet de game er goed uit en op het eerste oog kon ik geen bugs vinden. 
    Toen ik de game ging spelen was het al snel duidelijk wat de bedoeling was en ook toen kon ik geen bugs vinden. 
    De game ziet er netjes uit en werkt goed. 
    Alle verplichte punten zitten erin. Een goeie simpele game voor programmeren 4.

- [x] De code van het individuele project staat op GitHub.
- [x] De game is online speelbaar.
- [x] De game bevat minimaal één van de onderstaande extra uitdagingen.
- [x] De game heeft een startscherm en een eindscherm.
- [x] Er zijn geen bugs.
- [x] Het project maakt gebruik van deze OOP principes.
    - [x] Classes
    - [x] Encapsulation
    - [x] Composition
    - [x] Inheritance
- [x] De GitHub pagina bevat een ReadMe bestand. Dit bestand bevat:
    - [x] Per bovengenoemd OOP principe een uitleg: waar is het toegepast, en waarom is het
        op die plek toegepast. De uitleg is inclusief code voorbeelden.
    - [x] Een klassendiagram van de game.
    - [x] Een link naar de peer review die in week 6 is gedaan

### Extra opdrachten 

- [x] De game ziet er zeer verzorgd uit dankzij goed uitgewerkt UI design en artwork.
- [ ] De game bevat een hiscore lijst. Scores worden bewaard nadat de game is afgesloten.
- [ ] De game werkt met Canvas in plaats van DOM elementen
- [x] De game bevat local of online multiplayer.
- [ ] De game werkt op mobiele schermen en ondersteunt touchscreen controls.
- [ ] De game maakt gebruik van device api's zoals de camera, microfoon, gyroscoop of GPS.
- [ ] De game gebruikt een externe library uit de lijst in deze modulewijzer.
