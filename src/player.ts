export class Player {
  angel = 0;
  radius = 90;
  game: any;
  x: number;
  y: number;
  ballSize = 16;
  constructor(game: any) {
    this.game = game;
    this.x = this.game.w / 2;
    this.y = (this.game.h * 2) / 3;
  }
  draw() {
    this.frame();
    this.balls();
  }
  frame() {
    let ctx = this.game.ctx as CanvasRenderingContext2D;
    // ctx.clearRect(0, 0, this.game.w, this.game.h)
    ctx.strokeStyle = "rgba(255,255,255,0.4)";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
    // console.log('pp')
  }
  balls() {
    let ctx = <CanvasRenderingContext2D>this.game.ctx;
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(
      this.x + this.radius * Math.cos(this.angel),
      this.y + this.radius * Math.sin(this.angel),
      this.ballSize,
      0,
      2 * Math.PI
    );
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.arc(
      this.x + this.radius * Math.cos(this.angel + Math.PI),
      this.y + this.radius * Math.sin(this.angel + Math.PI),
      this.ballSize,
      0,
      2 * Math.PI
    );

    ctx.fill();
  }
  update(){
    let key = this.game.key
    if (key.ArrowLeft==true) {
        this.angel -= 0.05;

    }
    if (key.ArrowRight == true) {
        this.angel += 0.05;
    }
  }
}
