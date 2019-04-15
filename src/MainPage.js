import Index from './lib/index';
import Navigation from './Navigation';

export default class MainPage extends Index{
	componentDidMount(){
		this.attachServiceWorker();
	}
	attachServiceWorker(){
		if ('serviceWorker' in navigator) {
		  window.addEventListener('load', function() {
			navigator.serviceWorker.register('/js/sw.js').then(function(registration) {
			  // Registration was successful
			  console.log('ServiceWorker registration successful with scope: ', registration.scope);
			}, function(err) {
			  // registration failed :(
			  console.log('ServiceWorker registration failed: ', err);
			});
		  });
		}
	}
	childViews(){
		return [Navigation];
	}
	render(){
		return `
			<div class="row introduction introduction-sm">

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
