import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
} from 'react-router-dom'
import FormAdd from '../components/FormAdd'
import Home from '../components/Home'
import NavBar from '../components/NavBar'
import 'bootswatch/dist/united/bootstrap.min.css'

const AppRouter = () => {

    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/edit" component={FormAdd} />
                <Redirect to="/" />
            </Switch>
        </Router>
    )
}

export default AppRouter