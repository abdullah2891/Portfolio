import Index from './lib/index';
import {state} from './state';
import {fadeIn,offset} from './util';
import WaveAnimation from './wave-animation';

export default class ProjectDescription extends Index{
	componentDidMount(){
		this._handleScrolling();
		this._set_position();
	
	}

	childViews(){
		return [WaveAnimation];
	}
	_handleScrolling(){
		console.log(state.projects)
		window.addEventListener('scroll',function(event){
			const scroll_position = window.scrollY;
			const range = 100;

			const scrolled_project = state.projects.find(project=>{
				const position = project.position.top;

				return scroll_position >= (position -range) && scroll_position <= (position + range);
			});
			
			if(!scrolled_project){return };

			const selected_project_element= document.getElementById(scrolled_project.id);

			if(!selected_project_element || scrolled_project.didScroll){return };
			
			scrolled_project.didScroll = true;
			selected_project_element.scrollTop = scrolled_project.position;
			selected_project_element.style.opacity = 1;
			fadeIn(selected_project_element);

		})

	}

	_set_position(){
		state.projects.forEach(project=>{
			project.position = offset(document.getElementById(project.id));
		});


	}
	render(){
		const project_description = (project)=>{
			return `
				<h3>${project.title}</h3>
				<p>${project.description}</p>
				<p>${project.skills}</p>
			`;
		};

		const image = (project)=>`<img src="${project.link}" alt="${project.title}" />`;

		return `
			<div class data-component="WaveAnimation"></div>	
			${
				state.projects.reduce((html,project,index)=>{
					const showRow = project.show ? "block" : "none";
					const isEven = index % 2 ===0;
					const row = `
						<div id="${project.id}" class="row project-row" style="opacity:0">
							<div class="col-md-${isEven ? '5': '7'}  image-container">
								${!isEven ? image(project) : project_description(project)}	
							</div>
							<div class="col-md-${isEven ? '7': '5'} image-container">
								${isEven ? image(project) : project_description(project)}	
							</div>
						</div>
					`;
					html+=row + '\n';
					
					return html;

				},'')

			}

		`;

	}
}
