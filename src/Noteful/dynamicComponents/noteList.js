import React, { Component } from 'react';
import Note from './note';

class NoteList extends Component {
  render() {
    console.log(this.props.notes.info, 'this.props.notes.info in NoteList');
    return (
      <div className="noteList">
        {this.props.notes.info.map(note => (
          <Note note={note} />
        ))}
      </div>
    );
  }
}

export default NoteList;
