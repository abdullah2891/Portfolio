import Index from './lib/Index';

export default class Contact extends Index{

	render(){
		return `
			<div class="contact">
				<form>
					<div class="form-group">
						<label>Name<label>
						<input type="text" class="form-control input-lg custom-input" />
					</div>

				</form>
				<form>
					<div class="form-group">
						<label>watever<label>
						<input type="text" class="form-control input-lg custom-input" />
					</div>

				</form>
				<form>
					<div class="form-group">
						<label>watever<label>
						<input type="text" class="form-control input-lg custom-input" />
					</div>

				</form>
			</div>
		`
	}

}
