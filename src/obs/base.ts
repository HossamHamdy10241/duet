export class Base{
    width = 220
    height = 35
    y:number
    left=!!Math.round(Math.random())
    game:any
    constructor(game:any,y:number){
        this.y=y
        this.game=game
    }
    draw(){
        let ctx = this.game.ctx as CanvasRenderingContext2D
        ctx.fillStyle='white'
        ctx.fillRect(this.left?this.game.w/2-this.width:this.game.w/2 , this.y,this.width,this.height)

    }
    update(){
        this.y+=this.game.speed
    }

}