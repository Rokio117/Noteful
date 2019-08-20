import React, { Component } from 'react';
import Note from './note';

class NoteList extends Component {
  render() {
    return (
      <div className="noteList">
        {this.props.notes.map(note => (
          <Note note={note} />
        ))}
      </div>
    );
  }
}

export default NoteList;
