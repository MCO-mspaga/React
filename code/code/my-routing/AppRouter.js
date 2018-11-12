import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import Home from './Home'
import About from './About'
import Users from './Users'
import Persist from './Persist'
import PageNotFound from './PageNotFound'

const AppRouter = ()=> {
    return (
    <Router>
        <div>
            <nav>
                <Link to='/'> Home</Link>
                <Link to='/about/'> About</Link>
                <Link to='/users/'> User</Link>
            </nav>
        <Switch> 
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/users' component={Users}/>
        <Redirect to='/' />
        <Route  component={PageNotFound}/>
        </Switch>
            <Route  component={Persist}/>
            </div>  

    </Router>
    )
}

export default  AppRouter 