class Game {
    constructor(){

    }

    getState(){
        var gameStateref = database.ref('gameState');
        gameStateref.on("value", function(data){
            gameState = data.val()
        });
    }

    update(State){
        database.ref('/').update({
            gameState: State
        });
    }

    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountref = await database.ref('playerCount').once("value");
            if(playerCountref.exists()){
                playerCount = playerCountref.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
    }

    play(){
        form.hide();
        textSize(40);
        text("Game Start", 120,100);
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
            var display_position = 130;
            for(var plr in allPlayers){
                if(plr === "player" + player.Index)
                    fill('red');
                    else
                        fill('black');
                        display_position +=20;//i=i+1   i+=1
                        textSize(20);
                        text(allPlayers[plr].name+":"  +allPlayers[plr].distance,120,display_position)

            }
        }
        if(keyDown("UP_ARROW") && player.Index !== null){
            player.distance += 50;
            player.update();
        }
    }
}