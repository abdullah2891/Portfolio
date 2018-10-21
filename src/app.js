import Index from  './lib/index';
import MainPage from './MainPage';


export default class App extends Index{
	childViews(){
		return [MainPage];
	}
	
	render(){
		return `<div>
			<div>app</div>

			<div data-component="MainPage"></div>
			
		</div>`;

	}
	


}
