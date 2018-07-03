class Game {

    private spaceship : Spaceship
    private rock: Rock
    private rocks:Array<Rock> = []
    private maxRocks:number = 10
    private smallRock: SmallRock
    private smallRocks:Array<Rock> = []
  
    constructor(){

        this.spaceship = new Spaceship()
        this.rock = new Rock()
        this.smallRock = new SmallRock()

        for(let i = 0; i < this.maxRocks; i++){
            this.rocks.push(new Rock())
            console.log('nieuwe steen')   
        }     

        for(let i = 0; i < this.maxRocks; i++){
            this.smallRocks.push(new SmallRock())
            console.log('nieuwe kleine steen')   
        }   

        
          
    }

    checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
     }

 

    private gameLoop() {

        this.spaceship.update()
        this.rock.update()
        this.smallRock.update()

        for(let i = 0; i < this.maxRocks; i++){
            this.rocks[i].update()
            }

            for(let i = 0; i < this.maxRocks; i++){
                this.smallRocks[i].update()
                }

        requestAnimationFrame(()=>this.gameLoop())
    }
}

window.addEventListener("load", () => new Game())
