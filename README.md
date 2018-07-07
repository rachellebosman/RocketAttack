# Programmeren 4 game

Link naar de game die ik heb gemaakt voor programmeren 4: 

https://rachellebosman.github.io/project_rachellebosman/index.html

Als extra uitdaging heb ik gekozen voor:
"De game ziet er zeer verzorgd uit dankzij goed uitgewerkt UI design en artwork."
Dit heb ik gedaan door zelf alle afbeelingen en achtergronden te maken met behulp van photoshop. Zo heb ik 
alles op elkaar kunnen afstemmen zodat het een geheel lijkt maar ook wat qua stijl bij de game past. 

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

# Extra opdrachten 

- [x] De game ziet er zeer verzorgd uit dankzij goed uitgewerkt UI design en artwork.
- [ ] De game bevat een hiscore lijst. Scores worden bewaard nadat de game is afgesloten.
- [ ] De game werkt met Canvas in plaats van DOM elementen
- [ ] De game bevat local of online multiplayer.
- [ ] De game werkt op mobiele schermen en ondersteunt touchscreen controls.
- [ ] De game maakt gebruik van device api's zoals de camera, microfoon, gyroscoop of GPS.
- [ ] De game gebruikt een externe library uit de lijst in deze modulewijzer.

# OOP principes

## Classes

Classes zijn een blauwdruk, hierin wordt het gedrag en hun eigenschappen beschreven. Je verdeeld je code in allemaal classes, alle classes bij elkaar vormen de gehele code. 

Mijn game is verdeeld in de volgende classes (deze zijn te vinden in het mapje "dev"): 
 
-	Game
-	Gameover
-	Gamestart
-	Gamewin
-	Rock
-	Smallrock
-	Spaceship
-   Startscreen 

Hier een voorbeeld hoe de startscreen class er uit ziet: 


Hieronder een voorbeeld van de Class Gameover:

``` 
class StartScreen {

    private textfield: HTMLElement
    
    private game : Game
    

    //private imgField: HTMLElement
   

    constructor(g:Game) {
       
        this.game = g
        this.textfield = document.createElement("textfield")
    
        let foreground = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this.textfield)
        
        this.textfield.addEventListener("click", ()=> this.switchScreens())
        console.log('startsceen')
       
        }
    
    public update() {
        this.textfield.innerHTML = "<br><br>Help, we zijn vast komen te zitten in een asteroide storm! We hebben te weinig brandstof om met turbo speed te kunnen ontsnappen. Help jij ons om genoeg groene power-elementen (20) te verzamelen voor deze turbo speed ?<br><br> Gebruik de pijltjes toetsen om naar links en rechts te bewegen en ontwijk de stenen. <br><br> Klik op de tekst om de reddingsactie te starten!  "    
    }

    private switchScreens(){
        this.game.emptyScreen()
        this.game.showScreen(new GameScreen(this.game))
    }
}
```

## Encapsulation

Bij encapsulation maak je gebruik van de volgende tags: Private, public en protected. Met behulp van deze tags vertel je waar de methods en properties gebruikt kunnen worden. 
- Private, is alleen te gebruiken in de class waar deze wordt aangemaakt.
- Public, zoals de naam al een beetje verklapt, deze kan overal worden aangeroepen.
- Protected, deze is ook bruikbaar in de childclass van de parentclass. 

Voorbeelden volgen hier:

Ik heb er voor gekozen om een aantal functies public te maken, zoals onderstaande. 
Zo kan ik de functie vanuit verschillende locaties oproepen. 

```
 public emptyScreen() {
       let foreground = document.getElementsByTagName("foreground")[0]
      
       foreground.innerHTML = ""
    }
```

In mijn code heb ik op vele verschillende momenten gebruik gemaakt van de private tag. 
Deze private elementen gaan alleen in deze class gebruikt worden en worden dus verder ook niet aangepast. 

```
class GameScreen {

    private textfield:HTMLElement
    private game:Game
    private spaceship: Spaceship
    private rocks: Rock[]
    private smallRocks: SmallRock[]
    private liveElement:HTMLElement;
    private lives:number = 0
    private scoreElement: HTMLElement;
    private score:number = 0 
```


## Composition

Composistion vindt plaats wanneer er meerdere objecten in een ander object geplaatst (classes worden aan elkaar gekoppeld)worden om zo de game te kunnen laten werken.

Game -> GameScreen -> SpaceShip 

Hoe dit in mijn game in elkaar zit, is duidelijker te zien in het klassendiagram die onderaan de pagina is toegevoegd.

## Inheritance

Inheritance wordt gebruikt bij objecten met veel overlappende code. Hierbij maak je een object aan en zet je alle code die hetzelfde is daarin. Daarna maak je voor de objecten individuele bestanden. Je koppelt meerde classes aan 1 parentclass. 

Omdat ik meerdere verschillende vallende objecten in mijn game wou leek het mij makkelijk om gebruik te maken van inheritance zodat ik niet 2 of 3x dezelfde code te zou hoefen typen. Hier is de code van het rockObject, hier staat dus alle code in die hetzelfde is voor alle vallende objecten.

```
class rocksObject {

    private htmlElement : HTMLElement
    private x: number
    private y: number
   
    public constructor( naamObject : string) {

        this.htmlElement = document.createElement(naamObject);
        document.body.appendChild(this.htmlElement);
        this.x = Math.random() * (window.innerWidth - 200)
        this.y = Math.floor(Math.random() * -600) + -50  
    }

    public getRectangle() {
        return this.htmlElement.getBoundingClientRect()
    }

    update() {
        this.y = this.y + 2
        this.htmlElement.style.transform = `translate(${this.x}px, ${this.y}px)`

        if (this.y + this.htmlElement.clientHeight > 650){
            this.reset()    
        }
    }

    public reset(){  
        this.x = Math.random() * (window.innerWidth - 200)
        this.y = -400 - (Math.random() * 450)        
    }
}
```

'naamObject' wordt oa uit de volgende code gehaald, in deze code wordt de naam "rock" meegegeven en wordt aangemaakt in bovenstaande code.

```
///<reference path="rocksObject.ts"/>

class Rock extends rocksObject{
    
    constructor() {
        super("rock")  
    }
}
```


# Klassendiagram


# Peer-review 

Hier is een linkje naar de review die ik heb geschreven over de game van Janessa: 
https://stud.hosted.hr.nl/0957541/2018/07/05/peer-review-over-de-game-van-janessa/

