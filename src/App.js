import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Noteful/header/header';
import Sidebar from './Noteful/sideBar/sidebar';
import MainSection from './Noteful/mainSection/mainSection';
import MainPage from './Noteful/mainpage/mainPage';
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

  componentDidMount() {
    fetch('http://localhost:9090/folders', {
      method: 'GET'
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log(response);
        this.setState({ folders: response });
      });
    fetch('http://localhost:9090/notes')
      .then(response => {
        return response.json();
      })
      .then(notes => {
        console.log(notes);
        this.setState({ notes: notes });
        console.log(this.state, 'state');
      });
  }
}

export default App;
