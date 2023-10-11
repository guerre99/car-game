class Obstacle {
	constructor(ctx, canvasH) {
		this.ctx = ctx
		this.canvasH = canvasH

		this.img = new Image()
		this.img.src = 'assets/car.png'

		this.w = 100
		this.h = 100

		function getRndInteger(min, max) {
			return Math.floor(Math.random() * (max - min) ) + min;
		}
		
		this.y = 0 - this.h
		this.x = getRndInteger(50,370)
		this.dy = 10
	}

	draw() {
		this.ctx.drawImage(this.img,this.x,this.y,this.w,this.h)		
	}

	move() {
		this.y += this.dy
	}
}