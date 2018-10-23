import Index from  './lib/index';

import MainPage from './MainPage';
import Navigation from './Navigation';
import SideFooter from './SideFooter';
import SideFooter2 from './SideFooter2';
import ProjectDescription from './ProjectDescription';
import Contact from './Contact'; 



export default class App extends Index{
	childViews(){
		return [MainPage,Navigation,Contact, ProjectDescription,SideFooter2,SideFooter];
	}
	
	render(){
		return `
			<div class="container-fluid">
				<div class="row first-page">
					<div class="col-md-8 main-page">
						<div data-component="MainPage"></div>	
					</div>
					<div class="col-md-3 navigation">
						<div data-component="Navigation"></div>
					</div>

				</div>

				<div class="row second-page">
					<div class="col-md-3" data-component="SideFooter" data-parameter-title="Project">
					</div>
					
					<div class='col-md-9' data-component="ProjectDescription">
					</div>
				
				</div>
				
				<div class="row third-page">
					<div class='col-md-9' data-component="Contact">
					</div>

					<div class="col-md-3" data-component="SideFooter2" data-parameter-title="Project">
					</div>
				
				</div>
			</div>
			`

	}
	


}
