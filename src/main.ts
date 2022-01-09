import { Actor, IActor } from "./actors/Actor";
import { Barrier } from "./actors/Barrier";
import { FPSViewer } from "./actors/FPSViewer";
import { Hero } from "./actors/Hero"; 
import { Map } from "./actors/Map"



window.onload = () => {
	var canvas = document.getElementById("canvas") as HTMLCanvasElement;
	var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

	let tablero = new Map();
	let actor = new Hero({ w: 25, h: 25 }, { x: 70, y: 70 }, tablero.blocks);
	let fps = new FPSViewer({ x: 5, y: 15 });
	let barrier = new Barrier();
	
	
	


	let actors: Array<IActor> = [ tablero, actor, fps, barrier];



	let lastFrame = 0;
	const render = (time: number) => {
		let delta = (time - lastFrame) / 1000;

		lastFrame = time;
		actors.forEach((e) => e.update(delta));
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		actors.forEach((e) => {

			e.draw(delta, ctx);

		});
		window.requestAnimationFrame(render);
	};

	window.requestAnimationFrame(render);

	document.body.addEventListener("keydown", (e) => {
		actors.forEach((actor) => {
			if (actor.keyboard_event_down) {
				actor.keyboard_event_down(e.key);
			}
		});
	});
	document.body.addEventListener("keyup", (e) => {
		actors.forEach((actor) => {
			if (actor.keyboard_event_up) {
				actor.keyboard_event_up(e.key);
			}
		});
	});
}



