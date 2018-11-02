export const scrollHeight = ()=>{
	return Math.max( document.body.scrollHeight, document.body.offsetHeight, 
		document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
}

export const scroll = (last_postion,initial_position=0)=>{
	const rate = 15;
	let position = initial_position ;
	const repeatOften = ()=>{
		position = position+rate;
		window.scroll(0,position);
		const globalID = requestAnimationFrame(repeatOften);
		if(position >= last_postion){
			cancelAnimationFrame(globalID);
		}
	}

	repeatOften();
}

export const fadeIn = (element,initial=0)=>{
	const rate = 0.05;
	//final opacity can't be bigger than 1
	const finalOpacity = 1;

	let opacity = initial;

	const _task = ()=>{
		element.style.opacity = opacity;
		opacity = opacity + rate; 
		const globalID =  requestAnimationFrame(_task);
		if(opacity >= finalOpacity){
			cancelAnimationFrame(globalID)
		}
	}

	_task();

}


