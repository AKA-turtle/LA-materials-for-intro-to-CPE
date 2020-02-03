//Screensaver Dots
//A simple use of an array and some randomness

let Lumen: number[] = [0, 10, 50, 100, 255]; //an array that holds recommended brightness values for LEDs

basic.forever(function () {
    let B = Lumen[Math.randomRange(0, 4)] //randomly pulls one of the 5 brightness values from array
    let x = Math.randomRange(0, 4) //generates a random coordinate for x
    let y = Math.randomRange(0, 4) //generates a random coordinate for y

    led.plotBrightness(x, y, B) //plots the pixel with brightness 
})
