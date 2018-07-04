class GameOver {
    private textfield: HTMLElement
    

constructor() {       
        this.textfield = document.createElement("textfieldGameOver")
        document.body.appendChild(this.textfield)   
    }

    public update() {
        this.textfield.innerHTML = "GAME OVER <br><br> Door te veel botsingen is het schip beschadigd en niet in staat om verder te vliegen. <br><br> Nog een keer proberen ? <br><br>Druk op F5. "
    }

    
   
}