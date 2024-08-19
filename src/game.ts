import { Base } from "./obs/base"
import { Player } from "./player"
export class Game{
    w = window.innerWidth
    h = window.innerHeight
    gap=220
    speed=3
    rotSpeed=Math.PI/(this.gap/this.speed)
    key={ArrowLeft:false,ArrowRight:false}
    canvas =<HTMLCanvasElement> document.querySelector('canvas')
    ctx=this.canvas.getContext('2d') as CanvasRenderingContext2D
    player = new Player(this)
    obst :Base[] =[]
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
    obs(){
        if(this.obst.length ==0){
            for(let i =0; i<20; i++){
                this.obst.push(new Base(this,0 + i*-this.gap));
            }
        }


    }
    tick(){
        this.ctx.clearRect(0,0,this.w,this.h)
        this.obs()
        this.player.draw()
        this.player.update()
        for(let i=0;i<this.obst.length;i++){
            this.obst[i].draw()
            this.obst[i].update()
            if(this.obst[i].y > this.h){
                this.obst.shift()
                i--
            }
        }

        // this.obst.draw()        // this.player.update()
        requestAnimationFrame(()=>this.tick())
    }
}