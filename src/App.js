import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import MainPage from './Noteful/mainpage/mainPage';
import LinkTest from './Noteful/linkTest';
import FolderPage from './Noteful/folderPage';
import NotePage from './Noteful/notePageComponents/notePage';
import NotefulContext from './context';
import FolderList from '.././src/Noteful/addFolder/addFolder';
import AddNote from './/./Noteful/addNote/addNote';

const baseUrl = 'https://fast-plains-77694.herokuapp.com:8000/api/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { folders: [], notes: [], checked: false, stateChange: 0 };
  }

  componentDidMount() {
    fetch(`${baseUrl}folders`, {
      method: 'GET'
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({ folders: response });
      });
    fetch(`${baseUrl}notes`)
      .then(response => {
        return response.json();
      })
      .then(notes => {
        this.setState({ notes: notes });
      });
  }

  state = this.state;

  handleAddFolder = response => {
    const newFolders = [...this.state.folders, response];
    this.setState({ ...this.state, folders: newFolders });
  };
  handleAddNote = response => {
    this.state.notes.push(response);
    let stateCount = this.state.stateChange;
    this.setState({ stateChange: `${stateCount + 1}` });
  };

  handleDelete = note => {
    const notes = this.state.notes.filter(noteId => note !== noteId.id);
    this.setState({ notes });
    fetch(`${baseUrl}notes/${note}`, {
      method: 'DELETE'
    });
  };

  handleDeleteFolder = folder => {
    const folderId = this.state.folders.filter(
      folderId => folder !== folderId.id
    );
    let notes = this.state.notes.filter(note => note.folder !== folder);
    if (notes === []) {
      notes = this.state.notes;
    }
    fetch(`${baseUrl}folders/${folder}`, {
      method: 'DELETE'
    });
    this.setState({ folders: folderId, notes: notes });
  };
  render() {
    return (
      <NotefulContext.Provider
        value={{
          value: this.state,
          handleDelete: this.handleDelete,
          handleAddFolder: this.handleAddFolder,
          handleAddNote: this.handleAddNote,
          handleDeleteFolder: this.handleDeleteFolder
        }}
      >
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              render={() => <MainPage info={this.state} />}
            />
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
            <Route exact path="/addFolder" component={FolderList} />
            <Route exact path="/addNote" component={AddNote} />
            <Route component={LinkTest} />
          </Switch>
        </div>
      </NotefulContext.Provider>
    );
  }
}

export default App;

//https://fast-plains-77694.herokuapp.com

//${baseUrl}folders
