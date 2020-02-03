//bouncy ball
//using two arrays and two for loops
//animation slows down near apex
//sprite gets brighter too

basic.forever(function () {
    for (let i = 0; i < 2; i++) {  //this creates the up or down segment
        for (let j = 0; j <= 3; j++) {
            ball.move(1)
            ball.set(LedSpriteProperty.Brightness, Lumen[ball.get(LedSpriteProperty.Y)]); //changes the brighness of sprite by getting current Y value of sprite and using that value to pull data from array
            basic.pause(timing[j]) //pulls timing values from array
        }
        ball.turn(Direction.Right, 180) //turns the sprite around after it hits apex
        timing.reverse()  //reverses timimg array!! for animation before re-running for loop
    }
})


let Lumen: number[] = [255, 200, 100, 50, 20]; //an array that holds brightness values for LEDs
let timing: number[] = [10, 30, 80, 120] //an array that holds pause timing for each step

let ball = game.createSprite(2, 5) // creates sprite at starting coordinates
ball.turn(Direction.Right, -90) // setup: orients sprite upward

