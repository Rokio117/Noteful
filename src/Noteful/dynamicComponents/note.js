import React, { Component } from 'react';
import './note.css';
import { Link } from 'react-router-dom';

class Note extends Component {
  render() {
    return (
      <div className="note">
        <Link key={this.props.note.id} to={`/note/${this.props.note.id}`}>
          <div className="noteName">{this.props.note.name}</div>
          <div className="noteModified">
            Modified on: {this.props.note.modified}
          </div>
        </Link>
      </div>
    );
  }
}
export default Note;
