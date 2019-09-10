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
    console.log(content);
  }

  validateName() {
    const name = this.state.noteName;
    if (name.changed) {
      if (name.name.length > 60) {
        return 'name must be less than 60 characters';
      }
      if (name.name.length < 3) {
        return 'name must be at least three characters';
      }
    }
  }

  validateContent() {
    const content = this.state.content;
    if (content.changed) {
      if (content.content.length < 3) {
        return 'note must be at least three characters';
      }
      if (content.content.length > 1000) {
        return 'note must be less than 1000 characters';
      }
    }
  }
  render() {
    console.log(this.props.history.location.key, 'key in addnote');

    return (
      <NotefulContext.Consumer>
        {value => {
          console.log(value, 'value in AddNote');
          const folders = value.value.folders.map(folder => {
            return <option value="folder.id">{folder.name}</option>;
          });

          return (
            <fieldset>
              <form
                id="noteField"
                onSubmit={e => {
                  e.preventDefault();
                  this.props.history.goBack();
                }}
              >
                <h2>Add a Note</h2>
                <label htmlFor="folderSelect">Pick a Folder</label>
                <select id="folderSelect">{folders}</select>
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
                <button type="submit" id="submitButton">
                  Submit
                </button>
                <button
                  id="cancelButton"
                  onClick={() => this.props.history.goBack()}
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
