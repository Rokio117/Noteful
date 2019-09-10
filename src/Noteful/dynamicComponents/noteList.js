import React, { Component } from 'react';
import Note from './note';
import NotefulContext from '../../context';
import { Link } from 'react-router-dom';

class NoteList extends Component {
  render() {
    //console.log(this.props, 'props in notelist');
    return (
      <NotefulContext.Consumer>
        {value => {
          //console.log(value.value);
          return this.props.selected ? (
            <div className="noteList">
              {this.props.selected.map(note => (
                <Note info={note} checked={value.checked} />
              ))}
              <Link to="/addNote" id="addNote" key={` ${this.props.id}`}>
                Add Note
              </Link>
            </div>
          ) : (
            <div className="noteList">
              {value.value.notes.map(note => (
                <Note info={note} checked={value.checked} />
              ))}
              <Link to="/addNote" id="addNote" key={` ${this.props.id}`}>
                Add Note
              </Link>
              ;
            </div>
          );
        }}
      </NotefulContext.Consumer>
    );
  }
}

export default NoteList;
