//pseudocode for asteroid game

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  /*
  call in the asteroids and spaceship.
  
  using the dist()function, create code that determines the distance between the x and y value of the spaceship shot, and the x and y of one of the asteroids.
  Add an if statement, stating that if the shot hits the asteroid, the smaller asteroid sprites are called.
  
  */
}

/*
create a function to create the shape of the spaceship the player controls, in this function, also include a KeyPressed function, allowing the player to actually control it.
add and if statement that  creates the shot from the spaceship, so that if the spacebar is pressed, the shot continually moves foreward by adding a variable to it repeatedly.
(for example, adding 1 until its equal to 401, so its off the canvas) have the starting location of the shot be equal to the tip of the ship.



create a function that actually draws the asteroid, the asteroids are seemingly random when it comes to shape, so for the vertex points, put a random variation in their
set coordinates. Add a random variable for movement as well. (for example, x = x * random(-1,1)), and do the same for Y

create a very similiar function for the small asteroid bits
*/
