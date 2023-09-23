import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Block from "./component/Block";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/hash">
                    <Block />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;