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
          console.log(value, 'value in NotepageMainSection');
          const noteId = this.props.history.location.pathname.replace(
            '/note/',
            ''
          );
          const note = value.value.notes;

          console.log(noteId, note);
          return (
            <div id="mainSection">
              <Note info={value.notes[0]} />
            </div>
          );
        }}
      </NotefulContext.Consumer>
    );
  }
}

export default withRouter(NotePageMainSection);
