import Index from  './lib/index';
import {scroll,fadeIn,scrollHeight} from './util';
import {state} from './state';

import MainPage from './MainPage';
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
		return [MainPage,Contact, ProjectDescription,SideFooter2,SideFooter];
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
					document.getElementById('projectDescription').className+=' vertical-line-project ';

					scroll(second_page_position );
					fadeIn(this.secondPageElementId);
				}
				
				if(!state.didScroll.thirdPage && scroll_position >=  third_page_position ){
					state.didScroll.thirdPage = true;
					scroll(scrollHeight(),third_page_position);
					fadeIn(this.thirdPageElementId);
				}
				
			
		}.bind(this));

	}

	
	
	render(){
		return `
			<div class="container-fluid">
				<div id="firstPage"  class="row first-page">
					<div class="col-md-12 main-page">
						<div data-component="MainPage"></div>	
					</div>

				</div>

				<div id="secondPage" class="row second-page">
					<div class='col-md-7' data-component="ProjectDescription">
					</div>
					<div class="col-md-5" data-component="SideFooter" data-parameter-title="Project">
					</div>
					
				</div>
				
				<div id="thirdPage"  class="row third-page">
						<div class='col-md-12' data-component="Contact"></div>
					</div>
			</div>
			`

	}
	


}
