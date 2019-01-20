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


	_draw_wavy_path(ctx){
		let region = new Path2D();
		const offsety = 10;

		region.lineTo(0,0);
		region.lineTo(0,30);
		// Define the points as {x, y}
		
		region.lineTo(300,30);
		region.lineTo(300,0);
		region.closePath();

		ctx.fillStyle = 'green';
		ctx.fill(region, 'evenodd');
		for(let offsetx = 0; offsetx <= 300 ; offsetx = offsetx + 40){
			let start = { x: 0+offsetx,    y: 20 + offsety  };
			let cp1 =   { x: 10+offsetx,   y: 0  + offsety};
			let cp2 =   { x: 30+offsetx,   y: 80  + offsety};
			let end =   { x: 40+offsetx,   y: 20 + offsety };
			
			region.moveTo(start.x, start.y);
			region.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
		}
		ctx.fillStyle = '#4e2d2dfc';
		ctx.fill(region, 'evenodd');

	}
	render(){
		
		return `
			<canvas id="wave-animation"></canvas>
		`;

	}
};
