import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App.js';
import AddItem from "./src/components/AddItem";
import Header from "./src/components/header";
import SellItem from "./src/components/sellitem";
import ShowItem from "./src/components/showItem";
import ViewItem from "./src/components/viewItem";
import { MuiThemeProvider } from 'material-ui/styles';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

ReactDOM.render(
  <Router>
      <MuiThemeProvider>
        <div>
            <Route path="/" component={App} />
            <Route path="/durgesh_app/header" component={Header} />
            <Route path="/durgesh_app/sellitem" component={SellItem} />
            <Route path="/durgesh_app/additem" component={AddItem} />
            <Route path="/durgesh_app/showItem" component={ShowItem} />
            <Route path="/durgesh_app/viewItem/:itemname" component={ViewItem} />
        </div>
      </MuiThemeProvider>
  </Router >, document.getElementById('app'));
