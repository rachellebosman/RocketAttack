class GameOver {
    private textfield: HTMLElement
    

constructor() {      

        this.textfield = document.createElement("textfieldGameOver")
        document.body.appendChild(this.textfield)  
        this.textfield.addEventListener("click", ()=> this.functienaam()) 
 
    }

    public update() {
        this.textfield.innerHTML = "GAME OVER <br><br> Door te veel botsingen is het schip beschadigd en niet in staat om verder te vliegen. <br><br> Nog een keer proberen ? <br>Click op de tekst. "
    }

    private functienaam(){
        location.href = "index2.html"

    }

    
   
}