import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Noteful/header';
import Sidebar from './Noteful/sidebar';
import MainSection from './Noteful/mainSection';
import MainPage from './Noteful/mainPage';
import INFO from './store';
import LinkTest from './Noteful/linkTest';
import FolderPage from './Noteful/folderPage';
import NotePage from './Noteful/notePageComponents/notePage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { INFO };
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <MainPage info={this.state} />} />
          <Route
            path="/note/:noteId"
            component={props => {
              console.log(props, 'props in note path');
              return <NotePage info={this.state} pathInfo={props} />;
            }}
          />
          <Route
            path="/folder/:folderId"
            component={props => {
              return <FolderPage info={this.state} pathInfo={props} />;
            }}
          />
          <Route component={LinkTest} />
        </Switch>
      </div>
    );
  }
}

export default App;
