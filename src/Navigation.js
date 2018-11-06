import Index from './lib/index';
import {fadeIn,scroll,scrollHeight} from  './util';
import {state} from './state';

export default class Navigation extends Index{
	componentDidMount(){
		this.secondPageElementId = document.getElementById('secondPage');
		this.thirdPageElementId = document.getElementById('thirdPage');
		this._addEventListener();
	}


	_addEventListener(){
		[...document.getElementsByClassName('navigation-button')].forEach(button=>{

		    button.addEventListener('click',function(event){
				const pageName = event.srcElement.getAttribute('data-navigation');
			    	const position = event.srcElement.offsetTop;

				//section position
				const second_page_position  =( (3/10) * scrollHeight()) ;
				const third_page_position = (8/10) * scrollHeight();
				
				state.didScroll[pageName] = true;

			    	switch(pageName){
					case 'secondPage':
						scroll(second_page_position);
						fadeIn(this.secondPageElementId);
						document.getElementById('projectText').className+=' vertical-line-project ';
						 break;
					case 'thirdPage':
						fadeIn(this.secondPageElementId);
						scroll(third_page_position);
						fadeIn(this.thirdPageElementId);
						document.getElementById('contactFooter').className +=' contact-footer ';
						break;
				}

		    }.bind(this));
		});
	}
	render(){

		return `
			<ul class="navigation">
				<li data-navigation="about"  class="navigation-button" >About Me</li>
				<li data-navigation="secondPage" class="navigation-button">Project</li>
				<li data-navigation="thirdPage" class="navigation-button">Contact me</li>

			</ul>
		`;

	}

}
