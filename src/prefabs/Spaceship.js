// Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame)
        scene.add.existing(this)                        // add to existing scene
        this.points = pointValue                        // store pointValue
        this.moveSpeed = game.settings.spaceshipSpeed   // spaceship speed in pixels/frame
        this.rocketDirection = Math.random() < 0.5 ? 0 : 1 //choose random rocket direction (0 for left, 1 for right)
    }

    update() 
    {
        if (this.rocketDirection === 0)
        {
            // move spaceship left
            this.x -= this.moveSpeed

            // wrap from left to right edge
            if(this.x <= 0 - this.width) {
            this.x = game.config.width
            }
        }

        else
        {
            //move spaceship right
            this.x += this.moveSpeed

            //wramp from right to left edge
            if (this.x >= game.config.width)
            {
                this.x = 0 - this.width
            }
        }
    }

    // reset position
    reset() {
        this.x = game.config.width
    }
}