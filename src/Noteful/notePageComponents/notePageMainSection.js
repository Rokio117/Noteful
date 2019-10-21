import React, { Component } from 'react';
import '../mainpage/mainPage.css';
import Note from '../dynamicComponents/note';
import NotefulContext from '../../context';
import { withRouter } from 'react-router-dom';

class NotePageMainSection extends Component {
  render() {
    return (
      <NotefulContext.Consumer>
        {value => {
          const noteId = this.props.history.location.pathname.replace(
            '/note/',
            ''
          );
          const noteInfo = value.value.notes;
          const note = noteInfo.filter(note => note.id == noteId);
          return (
            <div id="mainSection">
              <Note info={note} />
            </div>
          );
        }}
      </NotefulContext.Consumer>
    );
  }
}

export default withRouter(NotePageMainSection);
