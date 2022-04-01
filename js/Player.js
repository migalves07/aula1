class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionx = 0;
    this.positiony = 0;
  }
  getcount(){
    var playercountref = database.ref("playerCount")
    playercountref.on("value", data =>{
      playerCount = data.val()
      
    })
 }
  updatecount(count){
    database.ref("/").update({
      playerCount: count
    })
  }
  addplayer(){
    var playerIndex = "players/player"+ this.index
    if(this.index == 1){
      this.positionx = width/2 - 100
    }
    else{
    this.positionx = width/2 + 100
    }
    database.ref(playerIndex).set({
      name: this.name,
      positionx: this.positionx,
      positiony: this.positiony
    })

    
  }
}
