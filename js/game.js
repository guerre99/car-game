
const Game = {

	ctx: undefined,
	canvasW: undefined,
	canvasH: undefined,
	scoreboard: ScoreBoard,
	fps: 60,
	keys: {
		LEFT: 'ArrowLeft',
		RIGHT: 'ArrowRight',
	},

	init: function () {
		const canvas = document.querySelector('canvas')
		this.ctx = canvas.getContext('2d')

		this.canvasW = canvas.width 
		this.canvasH = canvas.height 

		this.bso = new Audio('./assets/Police Siren Remix.mp3')

		this.bso.volume = 0.10

		this.bso.play()

		this.reset()
	},

	reset: function () {

		this.background = new Background(this.ctx, this.canvasW, this.canvasH)

		this.player = new Player(this.ctx, this.canvasW, this.canvasH, this.keys)

		this.obstacles = []

		this.score = 0

		this.scoreboard.init(this.ctx)

		this.start()
	},

	start: function () {
		// loop de render
		
		let frameCounter = 0
		

		this.intervalId = setInterval(() => {
			frameCounter++
			this.ctx.clearRect(0, 0, this.canvasW, this.canvasH)


			if (frameCounter % 50 === 0) {
				this.generateObstacle()
				this.score += 10
			}

			this.background.draw()

			this.scoreboard.update(this.score)
			
			this.obstacles.forEach((obstacle) => {
				obstacle.draw()
				obstacle.move()
			})

			if (this.isCollision()) {
				this.gameOver()
			}

			this.clearObstacles()

			this.player.draw(frameCounter)
			this.player.move()

		}, 1000 / this.fps)
	},

	gameOver: function () {
		// para el intervalo que implementa el loop de animación
		clearInterval(this.intervalId)

		if (confirm(`GAME OVER! \n TU PUNTUACION ES : ${this.score} puntos \n¿Volver a jugar?`)) {
			this.reset()
		}
	},	

	generateObstacle: function () {
		this.obstacles.push(
			new Obstacle(this.ctx, this.canvasH)
		)
	},

	clearObstacles: function () {
		this.obstacles = this.obstacles.filter(
			(obstacle) => obstacle.x + obstacle.w > 0
		)
	},

	

	isCollision: function () {
		let collision = false

		this.obstacles.forEach((obstacle) => {
			// Algoritmo de colisión por los 4 lados
			if (
				obstacle.x + 94 < this.player.x + this.player.w &&
				obstacle.x + obstacle.w > this.player.x +90 &&
				obstacle.y + obstacle.h > this.player.y + 50 &&
				obstacle.y + 300 < this.player.y + this.player.y
			) {
				collision = true
			}
		})

		return collision
	},
}

