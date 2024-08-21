import { Base } from "./obs/base"
import { Player } from "./player"
export class Game{
    w = window.innerWidth
    h = window.innerHeight
    gap=220
    speed=4
    rotSpeed=Math.PI/(this.gap/this.speed)
    key={ArrowLeft:false,ArrowRight:false}
    canvas =<HTMLCanvasElement> document.querySelector('canvas')
    ctx=this.canvas.getContext('2d') as CanvasRenderingContext2D
    player = new Player(this)
    obst :Base[] =[]
    animationframeid:any
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
                this.obst.push(new Base(this,-300 + i*-this.gap));
            }
        }


    }
    detect(){
        let obst = this.obst
        if(obst.length){
            for(let i=0;i<3 && i<obst.length;i++){
                let block = obst[i]
                let blocdim:any={
                    x:block.left?this.w/2-block.width/2:this.w/2+block.width/2,
                    y:block.y+block.height/2,
                    w:block.width,
                    h:block.height}
                // if(block.left){
                //     blocdim.x=this.w/2-block.width/2
                // }
                // else{
                //     blocdim.x=this.w/2+block.width/2

                    
                // }
                let oneball = {
                    radius:this.player.ballSize,
                    x: this.player.x + this.player.radius * Math.cos(this.player.angel),
                    y: this.player.y + this.player.radius * Math.sin(this.player.angel),

                    
                }
                let otherball = {
                    radius:this.player.ballSize,
                    x: this.player.x + this.player.radius * Math.cos(this.player.angel+Math.PI),
                    y: this.player.y + this.player.radius * Math.sin(this.player.angel+Math.PI),

                    
                }
                if(oneball.radius+blocdim.w/2 >= Math.abs(blocdim.x-oneball.x) && oneball.radius+blocdim.h/2 >=Math.abs(blocdim.y-oneball.y)){

                    cancelAnimationFrame(this.animationframeid)
                    console.log('cancelled')
                }
                if(otherball.radius+blocdim.w/2 >= Math.abs(blocdim.x-otherball.x) && otherball.radius+blocdim.h/2 >=Math.abs(blocdim.y-otherball.y)){
                    console.log('cancelled')


                    cancelAnimationFrame(this.animationframeid)
                }
                
            }
        }

    }
    tick(){
        this.ctx.clearRect(0,0,this.w,this.h)
        this.obs()
        this.player.update()
        for(let i=0;i<this.obst.length;i++){
            this.obst[i].draw()
            this.obst[i].update()
            if(this.obst[i].y > this.h){
                this.obst.shift()
                i--
            }
        }
        this.player.draw()
        
        // this.obst.draw()        // this.player.update()
        this.animationframeid = requestAnimationFrame(()=>this.tick())
        this.detect() 
    }
}