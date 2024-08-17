export class Game{
    w = window.innerWidth
    h = window.innerHeight
    canvas =<HTMLCanvasElement> document.createElement('canvas')
    ctx=this.canvas.getContext('2d') as CanvasRenderingContext2D
    constructor(){
        this.canvas.width=this.w
        this.canvas.height=this.h
       
    }
}