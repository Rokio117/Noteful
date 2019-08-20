import React, { Component } from 'react';
import './note.css';

class Note extends Component {
  render() {
    return (
      <div className="note" key={this.props.note.id}>
        <div className="noteName">{this.props.note.name}</div>
        <div className="noteModified">
          Modified on: {this.props.note.modified}
        </div>
      </div>
    );
  }
}
export default Note;
