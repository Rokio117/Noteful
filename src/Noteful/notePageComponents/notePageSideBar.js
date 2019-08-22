import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class notePageSideBar extends Component {
  render() {
    console.log(this.props.pathInfo, 'prop info in notePageSideBar');
    const noteId = this.props.pathInfo.match.params.noteId;
    const folderId = this.props.notes.find(note => note.id === noteId).folderId;
    const folderName = this.props.info.find(id => id.id === folderId).name;
    return (
      <div>
        <button
          className="goBackButton"
          onClick={() => this.props.pathInfo.history.goBack()}
        >
          Go Back
        </button>
        <h2>{folderName}</h2>
      </div>
    );
  }
}
export default notePageSideBar;
