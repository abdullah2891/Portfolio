import Index from './lib/index';
import Navigation from './Navigation';

export default class MainPage extends Index{
	childViews(){
		return [Navigation];
	}
	render(){
		return `
			<div class="row introduction">

			<div class=" col-lg-1"></div>
			<div class="name-pad col-lg-6   col-sm-10">
				<p class="title"><strong>Hi,</strong></p>
					<p><strong>Welcome to this corner of the internet</strong></p>
					<p><strong>My Name is Abdullah Rahman</strong></p>
					<p><strong>How can I help you today</strong></p>
					<div data-component="Navigation"></div>
				</div>
			</div>

		`;
	}

}
