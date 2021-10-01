class Game{
    constructor()
    {

    }

    getState()
    {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",(data)=>{
        gameState=data.val()
        })
    }

    update(state)
    {
        database.ref("/").update({
            gameState:state,
        });
    }
    start()
    {
        form = new Form()
        form.display();

        player = new Player()
        playerCount=player.getCount()
        
        c1 = createSprite(width/2-50,height-100);
        c1.addImage(cImg1);
        c1.scale=0.07;

        c2 = createSprite(width/2+100,height-100);
        c2.addImage(cImg2);
        c2.scale=0.07;

        cars=[c1,c2];
    }
    handleElements()
    {
        form.hide();
        form.titleImg.position(40,50);
        form.titleImg.class("gameTitleAfterEffect");

    }
    play()
    {
       this.handleElements()
       Player.getPlayersInfo();
       if(allPLayer !==undefined)
       {
           image(track,0,-height*5,width,height*6);
           drawSprites();
       }
    }
}