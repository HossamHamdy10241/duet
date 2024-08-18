export class base{
    width = 120
    height = 25
    left=!!Math.round(Math.random())
    game:any
    constructor(game:any){
        this.game=game
    }
    draw(){
        let ctx = this.game.ctx as CanvasRenderingContext2D
        ctx.fillRect(this.left?this.game.w/2-this.width:this.game.w/2 , 300,this.width,this.height)

    }

}