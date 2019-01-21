import Index from './lib/index';


export default class WaveAnimation extends Index {
	componentDidMount(){
		const canvas = document.getElementById('wave-animation');
	
		if(canvas.getContext){
			this._draw(canvas);
		}else{
			console.warn('failed intialized canvase');
		}
	}
	_draw(canvas){
		const ctx = canvas.getContext('2d');
		this._draw_wavy_path(ctx);	
		
	}


	_draw_wavy_path(ctx,offset=0){
		const draw = ()=>{
			ctx.clearRect(0, 0, 300, 300);
			let region = new Path2D();
			const offsety = 10;

			region.lineTo(0,0);
			region.lineTo(0,30 + offset);
			// Define the points as {x, y}
			
			region.lineTo(300,30 + offset);
			region.lineTo(300,0);
			region.closePath();

			ctx.fillStyle = '#77dd77';
			ctx.fill(region, 'evenodd');
			for(let offsetx = 0; offsetx <= 300 ; offsetx = offsetx + 40){
				let start = { x: 0+offsetx,    y: 20 + offsety  + offset };
				let cp1 =   { x: 10+offsetx,   y: 0  + offsety + offset};
				let cp2 =   { x: 30+offsetx,   y: 80  + offsety + offset};
				let end =   { x: 40+offsetx,   y: 20 + offsety + offset };
				
				region.moveTo(start.x, start.y);
				region.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
			}
			ctx.fillStyle = '#77dd77';
			ctx.fill(region, 'evenodd');
			offset = offset + 0.33;

			const requestId = requestAnimationFrame(draw);


console.log("test" , offset, requestId)
			if(offset >= 1000){
				cancelAnimationFrame(requestId);
			}
		}

		draw();

	}
	render(){
		
		return `
			<canvas id="wave-animation"></canvas>
		`;

	}
};
