class StartScreen {

    private textfield: HTMLElement
    
    private game : Game
    

    //private imgField: HTMLElement

   

    constructor(g:Game) {
       

        this.game = g
        this.textfield = document.createElement("textfield")
    
        let foreground = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this.textfield)
        
        this.textfield.addEventListener("click", ()=> this.switchScreens())
        console.log('startsceen')
       
        }
    

    public update() {
        this.textfield.innerHTML = "<br><br>Help, we zijn vast komen te zitten in een asteroide storm! We hebben te weinig brandstof om met turbo speed te kunnen ontsnappen. Help jij ons om genoeg groene power-elementen (20) te verzamelen voor deze turbo speed ?<br><br> Gebruik de pijltjes toetsen om naar links en rechts te bewegen en ontwijk de stenen. <br><br> Click op de tekst om de reddingsactie te starten!  "
     
        

        
    }

    private switchScreens(){
        this.game.emptyScreen()
        this.game.showScreen(new GameScreen(this.game))
    }
}