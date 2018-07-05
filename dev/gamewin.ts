class GameWin {
    private textfield: HTMLElement

    private schip: HTMLElement
    

constructor() {       

        this.textfield = document.createElement("textfieldGameOver")
        document.body.appendChild(this.textfield)  
        this.textfield.addEventListener("click", ()=> this.functienaam()) 

        this.schip = document.createElement("schip");
        document.body.appendChild(this.schip);
    }

    public update() {
        this.textfield.innerHTML = "Je hebt genoeg power verzameld voor de turbo speed! <br><br> Click hier om verder te gaan."
    }

    private functienaam(){
        location.href = "index3.html"

    }
   
}