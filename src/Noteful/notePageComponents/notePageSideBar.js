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
        <Link
          className="goBackButton"
          //to={this.props.pathInfo.history.push('/')}
        >
          Go Back
        </Link>
        <h2>{folderName}</h2>
      </div>
    );
  }
}
export default notePageSideBar;
