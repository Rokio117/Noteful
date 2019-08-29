import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from '../.././context';
import { withRouter } from 'react-router-dom';

class notePageSideBar extends Component {
  render() {
    console.log(this.props.history, 'prop info in notePageSideBar');
    const noteId = this.props.history.match.params.noteId;
    const folderId = this.props.notes.find(note => note.id === noteId).folderId;
    const folderName = this.props.info.find(id => id.id === folderId).name;
    return (
      <NotefulContext.Consumer>
        <div>
          <button
            className="goBackButton"
            onClick={() => this.props.history.goBack()}
          >
            Go Back
          </button>
          <h2>{folderName}</h2>
        </div>
      </NotefulContext.Consumer>
    );
  }
}
export default withRouter(notePageSideBar);
