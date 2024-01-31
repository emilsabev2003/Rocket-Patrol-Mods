//Name: Emil Sabev
//Enhanced Rocket Patrol
//Approx time: 
/*
Mods Added:  

-Fire text when ship fires (1pt)
-Random spaceship direction (1pt)
-Custom menu background (3pt)
-Parallax scrolling to play background (3pt)
-Random sound effect played upon collision (3pt)
-Background music (1pt)
-Added smaller spaceship (5pt)

TOTAL: 16pts
*/
/*
Sources: 

-Explosion sound effects are not mine and were all downloaded here: https://creatorassets.com/a/8bit-explosion-sound-effects (copyright free) 
-ChatGPT helped debug my code for random sound effect mod: https://chat.openai.com/share/0c8ba645-6d5e-4e7a-8a21-9284398b34ed
-Gameplay music is not mine: https://www.fesliyanstudios.com/royalty-free-music/download/8-bit-retro-funk/883 (copyright free)
-ChatGPT helped with looping my music: https://chat.openai.com/share/adc07a79-ab35-4310-987b-fdcd755920e7
*/

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scale: { autoCenter: Phaser.Scale.CENTER_BOTH},
    physics: { default: 'arcade', arcade: { debug: true }},
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config)

// set UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3

// reserve keyboard bindings
let keyFIRE, keyRESET, keyLEFT, keyRIGHT
