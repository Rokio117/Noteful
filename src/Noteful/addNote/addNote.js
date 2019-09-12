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
    const name = this.state.noteName.name.trim();
    if (name.changed) {
      if (name.name.length > 60) {
        return 'name must be less than 60 characters';
      }
      if (name.name.length < 3) {
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
    const content = this.state.content.content.trim();
    if (content.changed) {
      if (content.length < 3) {
        return 'note must be at least three characters';
      }
      if (content.length > 1000) {
        return 'note must be less than 1000 characters';
      }
    }
  }
  render() {
    return (
      <NotefulContext.Consumer>
        {value => {
          const folders = value.value.folders.map(folder => {
            return (
              <option value={folder.name} key={folder.name}>
                {folder.name}
              </option>
            );
          });

          const folderId = value.value.folders.filter(
            folder => folder.name === this.state.folder.folderName
          );

          return (
            <fieldset>
              <form
                id="noteField"
                onSubmit={e => {
                  e.preventDefault();
                  const date = new Date();
                  fetch('http://localhost:9090/notes', {
                    method: 'POST',
                    body: JSON.stringify({
                      name: this.state.noteName.name,
                      modified: date,
                      folderId: folderId[0].id,
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
