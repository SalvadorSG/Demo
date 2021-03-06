import { Actor } from "./Actor2";

export class FPSViewer extends Actor {
  update() {}
  keyboard_event() {}
  draw(delta: number, ctx: CanvasRenderingContext2D) {
    const fps = (1 / delta).toFixed(2);
    ctx.font = "25px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(`FPS:${fps}`, this.position.x, this.position.y);
  }
}
