import Index from './lib/index';
import Navigation from './Navigation';

export default class MainPage extends Index{
	childViews(){
		return [Navigation];
	}
	render(){
		return `
			<div class="introduction">
				<p class="title">Hi</p>
				<p>Welcome to this corner of the internet</p>
				<p>My Name is Abdullah Rahman</p>
				<p> How can I help you today</p>
				<div data-component="Navigation"></div>
			</div>

		`;
	}

}
