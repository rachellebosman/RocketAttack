class Spaceship {

    private htmlElement : HTMLElement

    private x:number = 200
    private y:number = window.innerHeight - 100
    private speedLeft: number = 0
    private speedRight: number = 0
    public lives:number = 5
    protected speed:number


    constructor() {

        this.speed = 10

        this.htmlElement = document.createElement("spaceship");
        document.body.appendChild(this.htmlElement);

        window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e:KeyboardEvent) => this.onKeyUp(e))

        
    }

    onKeyDown(event: KeyboardEvent): void {

        switch (event.keyCode) {
            case 37:
                this.speedLeft = 10
                break
            case 39:
                this.speedRight = 10
                break
        }
    }

    onKeyUp(event: KeyboardEvent): void {

        switch (event.keyCode) {
            case 37:
                this.speedLeft = 0
                break
            case 39:
                this.speedRight = 0
                break  
        }
    }

    public getRectangle() {
        return this.htmlElement.getBoundingClientRect()
    }



    update() {
        
        this.x = this.x + this.speedRight - this.speedLeft
        this.htmlElement.style.transform = `translate(${this.x}px, ${this.y}px)`

       
        if (this.x + this.htmlElement.clientWidth > window.innerWidth){
            this.x = this.speedLeft = 0
            this.speedRight = this.speed
        }
        if (this.x + this.htmlElement.clientWidth < 0){
            this.x = window.innerWidth - this.htmlElement.clientWidth 
            this.speedLeft = this.speed
            this.speedRight = 0
        }

    }
}