class Spaceship {

    private htmlElement : HTMLElement

    private x:number = 200
    private y:number = window.innerHeight - 100
    private speedLeft: number = 0
    private speedRight: number = 0


    constructor() {

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

        if (this.x + this.htmlElement.clientWidth > window.innerWidth || this.x < 0){
            this.speedLeft = 0
        }
        if (this.y + this.htmlElement.clientHeight > window.innerHeight || this.y < 0){
            this.speedRight = 0
        }

    }
}