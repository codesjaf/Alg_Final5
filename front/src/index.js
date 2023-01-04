//подключение библиотек и пр.
import React from "react";
import ReactDOM from "react-dom";
import {store} from "./redux/store";
import {Provider} from "react-redux";
import App from "./Components/App";
import { BrowserRouter as Router,Route} from "react-router-dom";


const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route component={App}/>
        </Router>
    </Provider>,
    rootElement
);
