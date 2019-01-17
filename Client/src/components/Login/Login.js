import React from 'react'
import foodImage from '../../imgs/food3.jpg'
import {Input, Button, Form, FormGroup} from 'reactstrap'

const Login = () =>(
	<main className="container-fluid p-5">
		
			<div className="row d-flex justify-content-center my-4">
				
				<div className="col-12 col-lg-8 login2 p-5">
					<div className="row d-flex justify-content-center">
						<div className="col login-square">
							<div className="login-box p-5 text-center">
								<h1>Food Journal</h1><br/><br/>
								<h2>Please sign in</h2><br/><br/>
								<Form>
									<FormGroup>
										<Input type="text" name="username" placeholder="username" />
										<br/>
										<Input type="password" name="password" placeholder="password" />
									</FormGroup>
									<br/>
									<Button>Submit</Button>
								</Form>
							</div>		
						</div>
						<div className="col login-square food-image"></div>
					</div>
				
				</div>
			</div>
	</main>
)

export default Login;