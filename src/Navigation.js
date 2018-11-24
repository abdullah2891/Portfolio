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
				
			    	//section position
				const second_page_position  =( (3/10) * scrollHeight()) ;
				const third_page_position = (8/10) * scrollHeight();
				
				state.didScroll[pageName] = true;
console.log(pageName)
			    	switch(pageName){
					case 'secondPage':
						scroll(second_page_position);
						fadeIn(this.secondPageElementId);
						document.getElementById('projectDescription').className+=' vertical-line-project ';
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
			<div class="row">
				<div data-navigation="about" class="col-md-4 cursor-pointer  navigation-button">
					<img class="icon" src="css/icons/idea.svg" />
				</div>
				<div data-navigation="secondPage" class="col-md-4 cursor-pointer navigation-button">
					<img class="icon" src="css/icons/briefing.svg"/>
				</div>
				
				<div data-navigation="thirdPage" class="col-md-4 cursor-pointer navigation-button">
					<img class="icon" src="css/icons/present.svg"/>
				</div>
			</div>
		`;

	}

}
