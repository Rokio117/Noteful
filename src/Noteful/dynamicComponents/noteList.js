import React, { Component } from 'react';
import Note from './note';
import NotefulContext from '../../context';

class NoteList extends Component {
  render() {
    return (
      <NotefulContext.Consumer>
        {value => {
          console.log(value.value);
          return (
            <div className="noteList">
              {value.value.notes.map(note => (
                <Note info={note} checked={value.checked} />
              ))}
            </div>
          );
        }}
      </NotefulContext.Consumer>
    );
  }
}

export default NoteList;
