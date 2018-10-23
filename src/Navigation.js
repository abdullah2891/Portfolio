import Index from './lib/index';

export default class Navigation extends Index{
	constructor(name){
		super(name);

	}


	render(){

		return `
			<ul class="navigation">
				<li>About Me</li>
				<li>Project</li>
				<li>Contact me</li>

			</ul>
		`;

	}

}
