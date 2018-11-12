import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import Header from './Header'
import Form from './Form'
import Results from './Results'
import Instructions from './Instructions'
import PageNotFound from './PageNotFound'

const AppRouter = ()=> {
    return (
        <Router>
            <div>
                <nav>
                    <Link to='/Form'> Form </Link>
                    <Link to='/Results'> Results </Link>
                    <Link to='/'> Instructions </Link>
                </nav>
                <Route  component={Header}/>
                <Switch>
                    <Route path='/' exact component={Instructions}/>
                    <Route path='/Form'  component={Form}/>
                    <Route path='/Form/Results'  component={Results}/>
                    <Redirect to='/' />
                    <Route  component={PageNotFound}/>
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter