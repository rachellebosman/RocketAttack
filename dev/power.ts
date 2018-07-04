class Power {

    private htmlElement : HTMLElement

    //private x:number = 300
    //private y:number = -50`

    private x: number
    private y: number
   
   


    public constructor() {

        this.htmlElement = document.createElement('power');
        document.body.appendChild(this.htmlElement);

        
        this.x = Math.random() * window.innerWidth
        //this.y = Math.random() * window.innerHeight
        //this.y = -400 - (Math.random() * 450)
        //this.y = -50
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