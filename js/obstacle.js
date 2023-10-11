class Obstacle {
	constructor(ctx, canvasH, playerX, playerW) {
		this.ctx = ctx
		this.canvasH = canvasH

		this.w = 20
		this.h = 50

		this.y = 0
		this.x = playerX + (playerW/2)	
		this.dy = 10
	}

	draw() {
		this.ctx.drawImage()
		// fillStyle = 'black'
		// this.ctx.fillRect(this.x, this.y, this.w, this.h)
	}

	move() {
		this.y += this.dy
	}
}