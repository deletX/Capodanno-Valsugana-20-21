import React from 'react';
import './App.css';
import MainPage from "./containers/MainPage";
import Planimetria from "./containers/Planimetria";
import {Route, Router, Switch} from "react-router-dom";
import PianoCovid from "./containers/PianoCovid";
import Camere from "./containers/Camere";
import NotFound from "./containers/NotFound";
import {NavBar} from "./components/NavBar";
import {createBrowserHistory} from "history";


const history = createBrowserHistory();

function App() {
    return (
        <div>
            <Router history={history}>
                <NavBar/>

                <Switch>
                    <Route exact path="/">
                        <MainPage/>
                    </Route>
                    <Route path="/planimetria">
                        <Planimetria/>
                    </Route>
                    <Route path="/piano-covid">
                        <PianoCovid/>
                    </Route>
                    <Route path="/camere">
                        <Camere/>
                    </Route>
                    <Route path="*">
                        <NotFound/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
