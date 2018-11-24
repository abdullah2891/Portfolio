import Index from './lib/index';
import {state} from './state';
import {fadeIn} from './util';

export default class ProjectDescription extends Index{
	componentDidMount(){
		state.notifyPropertyChange = (scrollPosition)=>{
			console.log({scrollPosition});
			this._updateProjectText(scrollPosition);
			this.render();		
		};
	}
	
	/**
	 * _updateProjectText
	 *
	 * @param scrollPosition
	 */
	_updateProjectText(scrollPosition){
		[...document.getElementsByClassName('project-text')].forEach((text,index)=>{
			const project_dom = state.projects[index];
			const showText = project_dom.upper_end > scrollPosition && project_dom.position <=scrollPosition;
			text.style.display = showText ? 'block' : 'none'; 
			console.log(project_dom.opacity)
			text.style.opacity = project_dom.opacity;
		})
	}

	render(){
		return `
			<div class="project-description side-footer" id="projectDescription">
				${
					state.projects.reduce((html,project)=>{
						const showRow = project.show ? "block" : "none";

						const row = `
							<div class="row project-text" style="display: ${showRow}" >
								<div class="col-md-12">
									<h3>${project.title}</h3>
									<p>${project.description}</p>
									<p>${project.skills}</p>
								</div>
							</div>
						`;
						html+=row + '\n';
						
						return html;

					},'')

				}


			</div>
		`;

	}
}
