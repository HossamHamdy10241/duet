import { Player } from "./player"
export class Game{
    w = window.innerWidth
    h = window.innerHeight
    key={ArrowLeft:false,ArrowRight:false}
    canvas =<HTMLCanvasElement> document.querySelector('canvas')
    ctx=this.canvas.getContext('2d') as CanvasRenderingContext2D
    player = new Player(this)
    constructor(){

        this.canvas.width=this.w
        this.canvas.height=this.h
        window.addEventListener('keydown' ,(e)=>{
            
            if(e.key=='ArrowLeft'){this.key[e.key]=true;this.key.ArrowRight=false}
            if(e.key=='ArrowRight'){this.key[e.key]=true;this.key.ArrowLeft=false}
    
        })
        
        window.addEventListener('keyup' ,(e)=>{
            if(e.key == "ArrowLeft"){this.key[e.key]=false}
            if(e.key == "ArrowRight"){this.key[e.key]=false}
        })
        this.tick()
        
    }
    tick(){
        this.ctx.clearRect(0,0,this.w,this.h)
        this.player.draw()
        this.player.update()
        // this.player.update()
        requestAnimationFrame(()=>this.tick())
    }
}