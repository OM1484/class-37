class Player {
    constructor(){
        this.index=null
        this.name=null
        this.distance=0
    }

    //read the player count value from the database
    getCount(){
        database.ref("playerCount").on("value",function(data){
            playerCount = data.val()
        })
    }

    //write the playerCount value to the database 
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }

    //write player name and distance to the database
    updateInfo(){
        database.ref("players/player"+this.index).set({
            name : this.name,
            distance:this.distance
        })
    }

    //pulls all the players values from the database in 1 go
    static getPlayersInfo(){
        database.ref("players").on("value",(data)=>{
            players = data.val()
        })
    } 
    
}