import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NotefulContext from '../../context';
import './addNote.css';
import { Link } from 'react-router-dom';
import FolderSelector from './folderSelector';
import ValidationError from '../addFolder/folderValidation';

class AddNote extends Component {
  constructor(props) {
    super(props);
    this.noteInput = React.createRef();
    this.state = {
      folder: { folderName: '', changed: false },
      noteName: { name: '', changed: false },
      content: { content: '', changed: false }
    };
  }
  nameChange(name) {
    this.setState({ noteName: { name: name, changed: true } });
  }
  noteChange(content) {
    this.setState({ content: { content: content, changed: true } });
  }
  folderChange(folder) {
    this.setState({ folder: { folderName: folder, changed: true } });
  }

  validateName() {
    const name = this.state.noteName.name;
    if (this.state.noteName.changed || this.state.noteName.name.length) {
      if (name.length > 60) {
        return 'name must be less than 60 characters';
      }
      if (name.trim().length < 3) {
        return 'name must be at least three characters';
      }
    }
  }

  validateFolder() {
    if (this.state.folder.folderName === 'Pick A Folder') {
      return true;
    }
  }

  validateContent() {
    if (this.state.content.changed) {
      if (this.state.content.content.trim().length < 3) {
        return 'note must be at least three characters';
      }
      if (this.state.content.content.length > 1000) {
        return 'note must be less than 1000 characters';
      }
    }
  }
  render() {
    return (
      <NotefulContext.Consumer>
        {value => {
          console.log(value.value.folders, 'value.value in addNote');
          const folders = value.value.folders.map(folder => {
            return (
              <option value={folder.folder_name} key={folder.folder_name}>
                {folder.folder_name}
              </option>
            );
          });

          const folderId = value.value.folders.filter(
            folder => folder.folder_name === this.state.folder.folderName
          );

          return (
            <fieldset>
              <form
                id="noteField"
                onSubmit={e => {
                  e.preventDefault();
                  //const date = new Date();
                  fetch('http://localhost:8000/api/notes', {
                    method: 'POST',
                    body: JSON.stringify({
                      name: this.state.noteName.name,
                      folder: folderId[0].id,
                      content: this.state.content.content
                    }),
                    headers: { 'Content-Type': 'application/json' }
                  })
                    .then(response => response.json())
                    .then(responseJson => {
                      value.handleAddNote(responseJson);
                    });
                  this.props.history.goBack();
                }}
              >
                <h2>Add a Note</h2>
                <label htmlFor="folderSelect">Pick a Folder</label>
                <select
                  id="folderSelect"
                  name="selectFolder"
                  onChange={e => {
                    this.folderChange(e.target.value);
                  }}
                >
                  <option>Pick A Folder</option>
                  {folders}
                </select>
                <label htmlFor="nametext">Enter a name</label>
                <input
                  type="text"
                  className="nameText"
                  onChange={e => this.nameChange(e.target.value)}
                ></input>
                <ValidationError message={this.validateName()} />
                <label>notes:</label>
                <textarea
                  id="textarea"
                  rows="20"
                  cols="50"
                  onChange={e => this.noteChange(e.target.value)}
                ></textarea>
                <ValidationError message={this.validateContent()} />
                <button
                  type="submit"
                  id="submitButton"
                  disabled={
                    !this.state.folder.changed ||
                    !this.state.noteName.changed ||
                    !this.state.content.changed ||
                    this.validateContent() ||
                    this.validateName() ||
                    this.validateFolder()
                  }
                >
                  Submit
                </button>
                <button
                  id="cancelButton"
                  onClick={() => this.props.history.push('/')}
                >
                  Cancel
                </button>
              </form>
            </fieldset>
          );
        }}
      </NotefulContext.Consumer>
    );
  }
}

export default withRouter(AddNote);
