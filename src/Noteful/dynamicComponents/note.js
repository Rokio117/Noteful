import React, { Component } from 'react';
import './note.css';
import { Link } from 'react-router-dom';

class Note extends Component {
  render() {
    const noteId = this.props.pathInfo
      ? this.props.pathInfo.match.params.noteId
      : null;
    const noteObject = this.props.info
      ? this.props.info.find(note => note.id === noteId)
      : null;
    return (
      <div className="note">
        {this.props.pathInfo ? (
          <div>
            <div className="notename">{noteObject.name}</div>
            <div className="noteModified">
              Modified on: {noteObject.modified}
            </div>
            <button>Delete Note</button>
            <p className="noteContent">{noteObject.content}</p>
          </div>
        ) : (
          <Link key={this.props.note.id} to={`/note/${this.props.note.id}`}>
            <div className="noteName">{this.props.note.name}</div>
            <div className="noteModified">
              Modified on: {this.props.note.modified}
            </div>
            <button>Delete Note</button>
          </Link>
        )}
      </div>
    );
  }
}
export default Note;
