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
    fetch('http://localhost:9090/folders', {
      method: 'GET'
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log(response, 'first folder response');
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

  state = this.state;

  handleAddFolder = response => {
    console.log('handleAddFolder Ran');
    let stateCount = this.state.stateChange;
    const oldFolders = this.state.folders;
    const folders = oldFolders.push(response);
    this.setState({ stateChange: `${stateCount + 1}` });
    console.log(this.state.folders, 'folders', folders, 'new folders');
  };
  handleAddNote = response => {
    console.log('handleAddNote ran');
    let notes = this.state.notes;
    let newNotes = this.state.notes.push(response);
    let stateCount = this.state.stateChange;
    this.setState({ stateChange: `${stateCount + 1}` });
    console.log(notes, 'notes');
    console.log(newNotes, 'new notes, should be 1 longer than notes');
  };

  handleDelete = (note, path) => {
    const notes = this.state.notes.filter(noteId => note !== noteId.id);
    console.log(notes, path);
    this.setState({ notes });
  };
  render() {
    return (
      <NotefulContext.Provider
        value={{
          value: this.state,
          handleDelete: this.handleDelete,
          handleAddFolder: this.handleAddFolder,
          handleAddNote: this.handleAddNote
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

//{' '}
