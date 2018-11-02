import Index from  './lib/index';
import {scroll,fadeIn,scrollHeight} from './util';
import {state} from './state';

import MainPage from './MainPage';
import Navigation from './Navigation';
import SideFooter from './SideFooter';
import SideFooter2 from './SideFooter2';
import ProjectDescription from './ProjectDescription';
import Contact from './Contact'; 



export default class App extends Index{
	componentDidMount(){
		this.secondPageElementId = document.getElementById('secondPage');
		this.thirdPageElementId = document.getElementById('thirdPage');
		this._handleScrolling();
	}



	childViews(){
		return [MainPage,Navigation,Contact, ProjectDescription,SideFooter2,SideFooter];
	}

	

	

	_handleScrolling(){
		//section position
		const second_page_position  =( (7/10) * scrollHeight()) + 50;
		const third_page_position = (9/10) * scrollHeight();
		

		//saving this positionn for change
		let previous_position = 0;

		window.addEventListener('scroll',function(){
				//get the scrolling position 
				let scroll_position =  window.scrollY;
			
				let change = scroll_position - previous_position;	
 				
				previous_position = scroll_position;

				
				if(!state.didScroll.secondPage  && change > 0){
					state.didScroll.secondPage  = true;
					document.getElementById('projectText').className+=' vertical-line-project ';

					scroll(second_page_position );
					fadeIn(this.secondPageElementId);
				}
				
				if(!state.didScroll.thirdPage && scroll_position >=  third_page_position ){
					state.didScroll.thirdPage = true;
					document.getElementById('contactFooter').className +=' contact-footer ';
					scroll(scrollHeight(),third_page_position);
					fadeIn(this.thirdPageElementId);
				}
				
			
		}.bind(this));

	}

	
	
	render(){
		return `
			<div class="container-fluid">
				<div id="firstPage"  class="row first-page">
					<div class="col-md-8 main-page">
						<div data-component="MainPage"></div>	
					</div>
					<div class="col-md-3 navigation">
						<div data-component="Navigation"></div>
					</div>

				</div>

				<div id="secondPage" class="row second-page">
					<div class="col-md-3" data-component="SideFooter" data-parameter-title="Project">
					</div>
					
					<div class='col-md-9' data-component="ProjectDescription">
					</div>
				
				</div>
				
				<div id="thirdPage"  class="row third-page">
					<div class='col-md-9' data-component="Contact">
					</div>

					<div class="col-md-3" data-component="SideFooter2" data-parameter-title="Project">
					</div>
				
				</div>
			</div>
			`

	}
	


}
