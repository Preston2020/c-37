class Form {
    constructor(){
        this.input = createInput("test");
        this.button = createButton("play");
        this.greeting = createElement("h2");
    }

    display(){
    var title = createElement('h2');
    title.html("car racing game");
    title.position(130,0);
    /*var input = createInput("enter your name here");
    var button = createButton('play');*/
    
    this.input.position(130,160);
    this.button.position(250,300);
    this.button.mousePressed( () => {
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount = playerCount +1;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("hello" + player.name);
        this.greeting.position(300,160);
    });
}

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
}