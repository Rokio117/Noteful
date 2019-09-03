import React, { Component } from 'react';
import Note from './note';
import NotefulContext from '../../context';

class NoteList extends Component {
  render() {
    return (
      <NotefulContext.Consumer>
        {value => {
          return (
            <div className="noteList">
              {value.notes.info.map(note => (
                <Note note={note} />
              ))}
            </div>
          );
        }}
        }
      </NotefulContext.Consumer>
    );
  }
}

export default NoteList;
