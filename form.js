class Form{
    constructor(){
        this.title=createElement("h1")
        this.input=createInput("Enter Name")
        this.button=createButton("Play")
        this.greeting=createElement("h2")
    }
    display(){   
        this.title.html("Car Racing")
        this.title.position(130,0)
        this.input.position(130,160)
        
       
        this.button.position(250,200)

        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name=  this.input.value()
            playerCount++
            player.index = playerCount
            player.updateCount(playerCount)
            player.updateInfo()   
            this.greeting.html("Hello "+ player.name)
            this.greeting.position(130,160)
        })

        
    }
}
