import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import "./index.css";
import App from "./components/App";

ReactDOM.render(
<Router>
    <AppWithRouter />
    </Router>,
    document.getElementById('root')
    );
