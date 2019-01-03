import Index from  './lib/index';
import {scroll,fadeIn,scrollHeight,offset} from './util';
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
		this._set_element_id();
		this._handleScrolling();
	}



	childViews(){
		return [MainPage,Contact, ProjectDescription,SideFooter2,SideFooter];
	}

	
	_set_element_id(){
		state.projects.forEach(project=>{
			project.id = 'project' + Math.random();
		});
	}

	_set_element_position(){
		Object.keys(state.position).forEach(function(key){
			state.position[key] = offset(document.getElementById(key)).top || 0;
		});
	}

	_handleScrolling(){
		//section position
		
		//saving this positionn for change
		let previous_position = 0;

		window.addEventListener('scroll',function(){
				this._set_element_position();
				const second_page_position = state.position.secondPage;
				const third_page_position = state.position.thirdPage;
				

				//get the scrolling position 
				let scroll_position =  window.scrollY;
				let change = scroll_position - previous_position;	
 				
				previous_position = scroll_position;

					
				if(!state.didScroll.secondPage  && change > 0){
					state.didScroll.secondPage  = true;

					scroll(second_page_position - 50 );
					fadeIn(this.secondPageElementId);
				}
				
				if(!state.didScroll.thirdPage && change > 0 &&  scroll_position >=  third_page_position - 500 ){
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
					<div class="col-md-12 main-page  main-page-sm">
						<div data-component="MainPage"></div>	
					</div>

				</div>
				<div id="secondPage">
					<div  data-component="ProjectDescription"></div>
				</div>
				
				<div id="thirdPage"  class="row third-page">
						<div class='col-md-12' data-component="Contact"></div> </div> </div> ` } 


}
