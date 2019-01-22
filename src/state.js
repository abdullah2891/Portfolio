export  const state  =  {
	didScroll : {about : false, secondPage : false , thirdPage : false},
	projects: [{
		id : null,
		title: "TASK ORGANIZER",
		description :"A TASK ORGANIZER WEB APPLICATION WITH EMBER JS FRONTEND AND DJANGO REST FRAMEWORK,INTEGRATING MYSQL AS DATABASE SUPPORT.",
		skills: "DJANGO REST, EMBER JS, MYSQL, HEROKU, BOOTSTRAP",
		link : "https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/how-to-setup-website.jpg", 	
		show : true,
		position: 0,
		opacity: 1,
		didScroll: false
	},
	{
		id : null,
		title: "OFFLINE FIRST REDDIT VIEWER",
		description :"THIS REACT APP UTILIZES SERVICE WORKER AND CACHING HEAVILY TO GIVE OFFLINE FIRST EXPERIENCE FOR A SUBREDDIT(REDDIT SUB FORUM).CURRENTLY, I AM WORKING ON MAKING IT MORE READER FRIENDLY AND WRITER FRIENDLY.",
		skills: "REACT , SERVICE WORKER , OAUTH2 . HEROKU, BOOTSTRAP",
		link : "https://cdn.blessthisstuff.com/imagens/stuff/clear-app-for-iphone.jpg",
		show : false,
		position : 282,
		opacity: 0.2,
		didScroll: false

	},
	{
		id : null,
		title: "CHANGE MY VIEW READER",
		description :"A REDDIT CLIENT MADE USING REACT NATIVE WHICH ALLOWS USER ADD POST AND PERFORM ACTION ON THE APP(AUTHENTICATED USING OAUTH2)",
		skills: "REACT NATIVE , OAUTH2 , HEROKU",
		link : "https://phandroid.s3.amazonaws.com/wp-content/uploads/2016/04/Boost-for-reddit-android.jpg",
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
