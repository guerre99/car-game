const ScoreBoard = {
	init: function (ctx) {
		this.ctx = ctx
	},

	update: function (score) {
		this.ctx.font = '60px Arial'
		this.ctx.fillStyle = 'Black'
		this.ctx.fillText(Math.floor(score), 70, 70)
	},
}