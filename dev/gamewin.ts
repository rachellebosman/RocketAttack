class GameWin {
    
    private textfield: HTMLElement

constructor() {       

        this.textfield = document.createElement("textfieldGameOver")
        document.body.appendChild(this.textfield)  
        this.textfield.addEventListener("click", ()=> this.functienaam())
    }

    public update() {
        this.textfield.innerHTML = "Je hebt genoeg power verzameld voor de turbo speed! <br><br> Klik hier om verder te gaan."
    }

    private functienaam(){
        location.href = "index3.html"
    }
   
}