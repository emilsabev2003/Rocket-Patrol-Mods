// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame)
  
      scene.add.existing(this)  // add to existing, displayList, updateList
      this.isFiring = false     // track rocket's firing status
      this.moveSpeed = 2        // rocket speed in pixels/frame

      this.sfxShot = scene.sound.add('sfx-shot')

      //create fire text and start as not visible
      this.fireText = scene.add.text(x - 20, y - 380, 'FIRE', {fontFamily: 'Courier', fontSize: '28px', backgroundColor: '#F3B141',  color: '#843605', align: 'right', padding: {
            top: 5,
            bottom: 5,
            },
            fixedWidth: 70})
      this.fireText.setVisible(false)
    }

    update() {
        // left/right movement
        if(!this.isFiring) {
            if(keyLEFT.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed
            } else if(keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeed
            }
            //update fire text to not be visible
            this.fireText.setVisible(false)
        }
        // fire button
        if(Phaser.Input.Keyboard.JustDown(keyFIRE) && !this.isFiring) {
            this.isFiring = true
            this.sfxShot.play()
            //update fire text to be visible
            this.fireText.setVisible(true)
        }
        // if fired, move up
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed
        }
        // reset on miss
        if(this.y <= borderUISize * 3 + borderPadding) {
            this.isFiring = false
            this.y = game.config.height - borderUISize - borderPadding
            //update fire text to not be visible
            this.fireText.setVisible(false)
        }
    }

    // reset rocket to "ground"
    reset() {
        this.isFiring = false
        this.y = game.config.height - borderUISize - borderPadding
    }
}