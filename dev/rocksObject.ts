class rocksObject {

    private htmlElement : HTMLElement
    private x: number
    private y: number
    protected speed:number = 0;            

   
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
        this.y = this.y + this.speed
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