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
				const pageName = event.srcElement.getAttribute('data-navigation')||event.currentTarget.getAttribute('data-navigation');
			    	const position = event.srcElement.offsetTop || event.currentTarget.offsetTop;
				
				state.didScroll[pageName] = true;

			    	switch(pageName){
					case 'secondPage':
						scroll(state.position.secondPage -20);
						fadeIn(this.secondPageElementId);
						 break;
					case 'thirdPage':
						fadeIn(this.secondPageElementId);
						scroll(state.position.thirdPage+2000);
						fadeIn(this.thirdPageElementId);
						document.getElementById('contactFooter').className +=' contact-footer ';
						break;
				}

		    }.bind(this));
		});
	}
	render(){

		return `
			<div class="row">
				<div data-navigation="about"  title="Github" class="col-lg-4 col-sm-4 cursor-pointer  navigation-button">
					<a href="https://github.com/abdullah2891"> <img class="icon" src="css/icons/architect.svg" /></a>
				</div>
				<div data-navigation="secondPage"  title="Projects" class="col-lg-4 col-sm-4 cursor-pointer navigation-button">
					<img class="icon" src="css/icons/projector-screen.svg"/>
				</div>
				
				<div data-navigation="thirdPage"  title="Contacts" class="col-lg-4 col-sm-4 cursor-pointer navigation-button">
					<img class="icon" src="css/icons/lightbulb.svg"/>
				</div>
			</div>
		`;

	}

}
