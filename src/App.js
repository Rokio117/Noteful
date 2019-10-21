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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { folders: [], notes: [], checked: false, stateChange: 0 };
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/folders', {
      method: 'GET'
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log(response);
        this.setState({ folders: response });
      });
    fetch('http://localhost:8000/api/notes')
      .then(response => {
        return response.json();
      })
      .then(notes => {
        console.log(notes);
        this.setState({ notes: notes });
      });
  }

  state = this.state;

  handleAddFolder = response => {
    let stateCount = this.state.stateChange;
    this.state.folders.push(response);
    this.setState({ stateChange: `${stateCount + 1}` });
  };
  handleAddNote = response => {
    this.state.notes.push(response);
    let stateCount = this.state.stateChange;
    this.setState({ stateChange: `${stateCount + 1}` });
  };

  handleDelete = note => {
    console.log(note, 'note in handleDelete');
    const notes = this.state.notes.filter(noteId => note !== noteId.id);
    this.setState({ notes });
    fetch(`http://localhost:8000/api/notes/${note}`, {
      method: 'DELETE'
    });
  };

  handleDeleteFolder = folder => {
    const folderId = this.state.folders.filter(
      folderId => folder !== folderId.id
    );
    fetch(`http://localhost:8000/api/folders/${folder}`, {
      method: 'DELETE'
    });
    this.setState({ folders: folderId });
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
