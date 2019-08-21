import React, { Component } from 'react';
import './note.css';
import { Link } from 'react-router-dom';

class Note extends Component {
  render() {
    const noteId = this.props.pathInfo
      ? this.props.pathInfo.match.params.noteId
      : null;
    console.log(this.props, 'props in Note in note path');
    const folderName = this.props.info
      ? this.props.info.find(folder => folder.id === noteId).name
      : null;
    const noteObject = this.props.info
      ? this.props.info.find(note => note.id === noteId)
      : null;
    console.log(folderName, 'folder name');
    console.log(noteObject, 'note name');
    return (
      <div className="note">
        {this.props.pathInfo ? (
          <div>
            <div className="notename">{noteObject.name}</div>
            <div className="noteModified">
              Modified on: {noteObject.modified}
            </div>
            <p className="noteContent">{noteObject.content}</p>
          </div>
        ) : (
          <Link key={this.props.note.id} to={`/note/${this.props.note.id}`}>
            <div className="noteName">{this.props.note.name}</div>
            <div className="noteModified">
              Modified on: {this.props.note.modified}
            </div>
          </Link>
        )}
      </div>
    );
  }
}
export default Note;
