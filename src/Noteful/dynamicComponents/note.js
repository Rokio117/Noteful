import React, { Component } from 'react';
import './note.css';

class Note extends Component {
  render() {
    console.log(this.props.note, 'props in Note component');
    return (
      <div className="note">
        <div className="noteName">{this.props.note.name}</div>
        <div className="noteModified">
          Modified on: {this.props.note.modified}
        </div>
      </div>
    );
  }
}
export default Note;
