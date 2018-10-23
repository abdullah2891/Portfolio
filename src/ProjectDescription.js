import Index from './lib/index';


export default class ProjectDescription extends Index{

	render(){
		return `
			<div class="project-description">
				<div class="row">
					<div class="col-md-6">
						<h3>Project 1</h3>
						<p>description</p>
				
						<p>description</p>
						<p>description</p>
						<p>description</p>
					</div>

					<div class="col-md-6">
						<h3>Project 2</h3>
						<p>description</p>
				
						<p>description</p>
						<p>description</p>
						<p>description</p>
					</div>



				</div>
				<div class="row">
					<div class="col-md-6">
						<h3>Project 3</h3>
						<p>description</p>
				
						<p>description</p>
						<p>description</p>
						<p>description</p>
					</div>

						<div class="col-md-6">
						<h3>Project 4</h3>
						<p>description</p>
				
						<p>description</p>
						<p>description</p>
						<p>description</p>
					</div>
				</div>
			</div>
		`;

	}
}
