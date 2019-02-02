import Index from './lib/index';
import {state} from './state';

export default class SideFooter extends Index{
	componentDidMount(){
		this._handleScrolling();

		console.log(state)

	}
	
	_updateOpacity(scrollPosition){
		[...document.querySelectorAll('[data-index]')].forEach(currentDom=>{
			const index = currentDom.getAttribute('data-index');
			const project = state.projects[index];

			const y = (x,position)=>{
				const range = project.upper_end - project.position;
				const opacity = -Math.pow((x-position)/range,2) + 1;
				return opacity > 0.3 ? opacity: 0.2;
			}
			const position = parseInt(project.position);
			const positionHighestOpacity =  project.position;
			const currentOpacity = y(scrollPosition,positionHighestOpacity);
console.log(currentOpacity)
			currentDom.style.opacity = currentOpacity;
			project.offset = currentOpacity;
			project.opacity = currentOpacity;
		})

	}


	_handleScrolling(){
		const imageContainer = document.getElementById('projectImageContainer'); 
		
		imageContainer.addEventListener('scroll',function(event){
			const scrollPosition = event.currentTarget.scrollTop;
			state.notifyPropertyChange(scrollPosition);	
			this._updateOpacity(scrollPosition);
		}.bind(this));

	}
	
	_updateDOMPosition(){
		[...document.getElementsByClassName('project-image')].forEach((image,index)=>{
			state.projects[index].position = image.offsetTop;
		})
	}

	render(){
		return `
			<ul class="image-container" id="projectImageContainer">
				${
					state.projects.reduce((html,project,index)=>{
						html += `<li><img class="project-image" data-index=${index} style="opacity:${project.opacity}"  src="${project.link}" /></li>`;

						return html;
					},'')
				}
				<li><div class="empty-image"></div></li>
			</ul>
		`;

	}

}
