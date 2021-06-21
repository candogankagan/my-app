import React from 'react';
import {LoginScreen} from "./screens/LoginScreen";
import {DashboardScreen} from "./screens/DashboardScreen";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <LoginScreen/>
                </Route>
                <Route path='/dashboard'>
                    <DashboardScreen/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
