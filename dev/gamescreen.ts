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

    constructor(g:Game) {

        this.game = g
        this.spaceship = new Spaceship()

        this.rocks = [new Rock(), new Rock(), new Rock(), new Rock(), new Rock()]

        this.smallRocks = [new SmallRock(), new SmallRock()]

       

        this.textfield = document.createElement("textfield")
        document.body.appendChild(this.textfield) 

        this.liveElement = document.createElement("lives");
        document.body.appendChild(this.liveElement);

        this.scoreElement = document.createElement("score");
        document.body.appendChild(this.scoreElement);

        this.updateLives(3)
        this.updateScore(0)
        

    }

    public update(): void 
    {
        this.spaceship.update()
        


        for(let r of this.rocks)
        {
            r.update()
            if (this.checkCollision(this.spaceship.getRectangle(), r.getRectangle())) {
                r.reset()
                console.log("paniek, steen geraakt!")
                this.updateLives(-1)
            
            }
            if (r.getRectangle().bottom - r.getRectangle().height > window.innerHeight) {
                r.reset()
        }

     
        for(let sr of this.smallRocks)
        {
            sr.update()
            if (this.checkCollision(this.spaceship.getRectangle(), sr.getRectangle())) {
                sr.reset()
                console.log("power!!")
                this.updateScore(1)
            }
           
            if (sr.getRectangle().left + sr.getRectangle().width < 0) {
                sr.reset()
        }

 
    }
        }}
    public checkCollision(a: ClientRect, b: ClientRect): boolean {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }

    private updateLives(points:number) {
        this.lives = this.lives + points;
        this.liveElement.innerHTML = "Levens: " + this.lives;
        if(this.lives <= 0){
            this.game.emptyScreen()
            this.game.showScreen(new GameOver())
        }
    }

    private updateScore(pointss:number) {
        this.score = this.score + pointss;
        this.scoreElement.innerHTML = "Power: " + this.score;
        if(this.score == 3){

            console.log('3 power items gefixt')
            this.game.emptyScreen()
            this.game.showScreen(new GameWin())

        }
    }

    



    
}