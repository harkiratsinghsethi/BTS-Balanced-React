
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Fragment} from 'react';
import {withRouter} from 'react-router';
import {BrowserRouter, Route, Switch, Router} from 'react-router-dom';
import Home from '../src/universal/screens/Home/Home'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <div className="container">
                        <Switch>
                            <Route path="/" render={() => <Home/>}/>
                        </Switch>
                    </div>
                </Fragment>
            </BrowserRouter>

        );
    }
}

export default App
