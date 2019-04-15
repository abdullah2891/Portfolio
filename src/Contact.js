import Index from './lib/Index';

export default class Contact extends Index{

	render(){
		return `
			<div class="row margin-top-4  margin-left-4 padding-right-4 padding-left-4">
				<p>Currently Working <strong>AT&T</strong> as an <strong>Web Developer(Under Contract, July 2016 to Present)</strong></p>

				<ul>
					<li>Developed and maintained complex web applications combining several of the AT&T internal automation tools. Written in JavaScript, Perl, and PHP using Ember.js and Mojolicious frameworks.</li>
					<li>Integrated 25 SQL Server databases with over 200 tables in a complex network of ticketing system applications that controlled security permissions for thousands of users, user groups, and company clients from around the world.</li>
					<li>Consistently met deadlines and repeatedly exceeded expectations to effectively deliver in an Agile environment using JIRA and four-week development lifecycles.</li>
					<li>Evaluated code for efficiency, debugging, and quality assurance using Crucible on a daily basis</li>
					<li>Improved development time substantially by designing automation scripts for faster development testing.</li>
				</ul>
			
			</div>
		`
	}

}
