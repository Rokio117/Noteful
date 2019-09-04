import React, { Component } from 'react';
import Note from './note';
import NotefulContext from '../../context';

class NoteList extends Component {
  render() {
    console.log(this.props, 'props in notelist');
    return (
      <NotefulContext.Consumer>
        {value => {
          console.log(value.value);
          return (
            <div className="noteList">
              {this.props.notes.info.map(note => (
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
