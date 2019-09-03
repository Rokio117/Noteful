import React, { Component } from 'react';
import '../mainpage/mainPage.css';
import Note from '../dynamicComponents/note';
import NotefulContext from '../../context';

class NotePageMainSection extends Component {
  render() {
    return (
      <NotefulContext.Consumer>
        {value => {
          return (
            <div id="mainSection">
              <Note info={value.notes} />
            </div>
          );
        }}
      </NotefulContext.Consumer>
    );
  }
}

export default NotePageMainSection;
