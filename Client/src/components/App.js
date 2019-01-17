import React from 'react';
import Header from './Header/Header';
import Calendar from './Calendar/Calendar';
import Login from './Login/Login'
import UserLanding from './UserLanding/UserLanding'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer/Footer'
import {Switch, Route} from 'react-router-dom';

const App = () => (
	<main>
		<Header />
		<Switch>
			<Route exact path='/' component={UserLanding} />
			<Route exact path='/Calendar' component={Calendar} />
			<Route exact path='/Login' component={Login} />
		</Switch>
		<Footer />
	</main>

)

export default App;