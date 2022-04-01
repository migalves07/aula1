class Game {
  constructor() {}

  start() {
    form = new Form();
    form.display();
    player = new Player();
  }
  getstate() {
   var gamestateref = database.ref("gameState")
   gamestateref.on("value", function(data){
   gameState = data.val()
   
  })
  }
   update(state){
    database.ref("/").update({
    gameState: state
   })
  }
}
