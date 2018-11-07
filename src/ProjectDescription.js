import Index from './lib/index';


export default class ProjectDescription extends Index{

	render(){
		return `
			<div class="project-description">
				<div class="row">
					<div class="col-md-6">
						<h3>Task Organizer</h3>
						<p>A Task Organizer web application with Ember js frontend and Django Rest Framework,integrating MySQL as database support.</p>
						<p>Django REST, Ember Js, MySQL, Heroku, Bootstrap </p>
					</div>

					<div class="col-md-6">
						<h3>Offline First Reddit Viewer</h3>
						<p>This react app utilizes service worker and caching heavily to give offline first experience for a subreddit(reddit sub forum).Currently, I am working on making it more reader friendly and writer friendly.</p>
						<p>React , Service Worker , Oauth2 . Heroku, Bootstrap </p>
					</div>



				</div>
				<div class="row">
					<div class="col-md-6">
						<h3>Change My View Reader </h3>
						<p>A Reddit Client made using React Native which allows user add post and perform action on the app(authenticated using Oauth2)</p>
						<p>React Native , Oauth2 , Heroku</p>
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
