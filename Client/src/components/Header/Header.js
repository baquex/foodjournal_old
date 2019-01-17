import React from 'react';

const Header = () => (
	<div className="row">
		<div className="col-12 sidebar">
			<div className="row my-3">
				<div className="col-12 d-flex justify-content-center">
						<img className="profile-pic" src={require("../../imgs/user.jpg")} alt="user profile"/>
			 	</div>
			</div>
			<div className="row my-3">
				<div className="col-12 d-block text-center">
					<h4>Name: Cecilia Alvarado</h4>
					<h4>Age: 32</h4>
				</div>
			</div>
		</div>
	</div>

)

export default Header;