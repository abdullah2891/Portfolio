import Index from './lib/Index';

export default class Contact extends Index{

	render(){
		return `
			<div class="row margin-top-4  margin-left-4 padding-right-4 padding-left-4">
					<div class="col-md-7">
						<p>I am Fullstack developer who can help you with your digital needs.I can help you with the cutting edge technology. You can contact me here 
						or email at abdullah2891@gmail.com</p>
					</div>
					<div class="col-md-5 login-form">
						<form>
							<div class="form-group">
								<label>Name</label>
								<input type="text" class="form-control input-lg " />
							</div>

						</form>
						<form>
							<div class="form-group">
								<label>Email</label>
								<input type="text" class="form-control input-lg " />
							</div>

						</form>
						<form>
							<div class="form-group">
								<label>Comment</label>
								<textarea type="text" class="form-control input-lg "></textarea>
							</div>

						</form>

						<button type="submit" class="btn btn-primary">Submit</button>
					</div>
			</div>
		`
	}

}
