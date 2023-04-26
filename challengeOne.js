//pseudocode for space invaders
/*
suggestions:
have a different background, maybe one with more detail or in space.
give the ship a different shape to make it look more aesthetically pleasing.
make the alien invaders look like aliens instead of blue squares.
make the game more vertical than it is horizontal.
allow there to be more aliens on the screen at once, but make them slower.
have different aliens, where some take multiple hits to destroy.
*/
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
/*  
  
 draw the aliens and the spaceship
 
 add an if statement, checking to see if the shots or ship are colliding with the alien, and change it so if the ship collides a life is lost.
 
 add an if statement, saying that if the shots collide with the alien, the alien disappears.
 
 add an if statement, saying that if all lives are lost, the game over screen appears.
*/
}

/*

create a function that draws the space invaders ship, and add a function inside of it, using keyPressed, but only have it move left and right. Have the Y variable set
to a single value, to lock it on the Y axis. add that if the player presses spacebar, a shot will be called and shot at the alien. (can achieve this by adding +1 to the 
Y coordinate of the original shape)

create a function that draws the enemy aliens, and have the X variable set to a random variable between 0 and the furthest the canvas goes, and have the Y variable start
slightly above the canvas, and give it a variable that causes it to continously drop down. (this can be achieved by doing something like y = y + 4)

create a function drawing the title screen, using text(), then have an if statement saying that if the spacebar is pressed, change the screen.



*/
