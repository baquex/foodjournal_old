import React from 'react'
import {Link} from 'react-router-dom';

const UserLanding = () =>(
  <div className="row">
    <div className="col-12 main-content">
      <div className="row p-2 my-3">
        <div className="col-12">
          <h1>My Food Journal</h1>
        </div>
      </div>
      <div className="row user-landing d-flex justify-content-center">
        <Link to={'/MyProfile'} className="col-4 links">My Profile</Link>
        <Link to={'/Calendar'} className="col-4 links">Calendar</Link>
      </div>
      <div className="row user-landing d-flex justify-content-center">
        <Link to={'/Calculator'} className="col-4 links">Calculator</Link>
        <Link to={'/Reports'} className="col-4 links">Reports</Link>
      </div>
    </div>
</div>
)

export default UserLanding;