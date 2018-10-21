export default class Index{
	/**
	 * constructor
	 *
	 * @param component component name
	 */
	constructor(component){
		this.component = component;

		this.componentDidMount()
			.then(()=>{
				const template  = this.render();

				this.insertElement(template);
			})
	}

	/**
	 * returns a promise whether component loaded
	 *
	 * @returns {Promise}
	 */
	componentDidMount(){
		const promises = this.componentSelector().map(querySelector=>{
			return new Promise((resolve,reject)=>{
				resolve();
			});

		})

		return Promise.all(promises);
	}

	/**
	 * populating the innerhtml
	 *
	 * @param template
	 */
	insertElement(template){
		this.componentSelector().forEach(componentInstance=>{
			componentInstance.innerHTML =  template;
		})
	}
	render(){
		return '';

	}

	componentSelector(){
		return [...document.querySelectorAll(`[data-component="${this.component}"]`)];
	}


}
