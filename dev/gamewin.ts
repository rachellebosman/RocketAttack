class GameWin {
    private textfield: HTMLElement

    private schip: HTMLElement
    

constructor() {       
        this.textfield = document.createElement("textfieldWin")
        document.body.appendChild(this.textfield)  
        this.textfield.addEventListener("click", ()=> this.functienaam()) 

        this.schip = document.createElement("schip");
        document.body.appendChild(this.schip);
    }

    public update() {
        this.textfield.innerHTML = "Yes, dankzij jou is het gelukt te ontsnappen! "
    }

    functienaam(){
        location.href = "index3.html"

    }
   
}