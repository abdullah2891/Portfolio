export  const state  =  {
	didScroll : {about : false, secondPage : false , thirdPage : false},
	projects: [{
		id : null,
		title: "TASK ORGANIZER",
		description :"A Task Organizer web application with Ember.js frontend and Django Rest Framework, integrating MySQL as database support. Currently working recommendations system that will allow users to create smart lists.",
		skills: "DJANGO REST, EMBER JS, MYSQL, HEROKU, Meterial UI",
		link : "css/ticketing-system.gif", 	
		show : true,
		url: "https://github.com/abdullah2891/TicketingSystem-",
		position: 0,
		opacity: 1,
		didScroll: false
	},
	{
		id : null,
		title: "OFFLINE FIRST REDDIT VIEWER",
		description :"This React app utilizes service worker and caching to give offline experience for a subreddit(Reddit subforum). Currently, I am working on making it more friendly for reading and writing posts",
		skills: "React, Service Worker, Oauth2, Heroku, Bootstrap",
		link : "css/changemyview.gif",
		url: "https://github.com/abdullah2891/Change-My-View",
		show : false,
		position : 282,
		opacity: 0.2,
		didScroll: false

	},
	{
		id : null,
		title: "Task Organizer Android",
		description :"This project is porting the Task Organizer Website to Android devices. Written in Java. ",
		skills: "Java(Android)",
		link : "css/cmv.png",
		url:"https://github.com/abdullah2891/TicketingSytem-Android",
		show : false,
		position : 626,
		opacity: 0.05,
		didScroll: false
	}],
	position:{
		firstPage: null,
		secondPage: null,
		thirdPage: null
	},

	scroll:{
		firstPage: null,
		secondPage: null,
		thirdPage: null
	},
	notifyPropertyChange(){}
}
