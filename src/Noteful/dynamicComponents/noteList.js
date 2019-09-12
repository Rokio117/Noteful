import React, { Component } from 'react';
import Note from './note';
import NotefulContext from '../../context';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class NoteList extends Component {
  render() {
    return (
      <NotefulContext.Consumer>
        {value => {
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
            </div>
          );
        }}
      </NotefulContext.Consumer>
    );
  }
}

NoteList.propTypes = {
  value: PropTypes.object
};

export default NoteList;
