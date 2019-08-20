import React, { Component } from 'react';
import './mainSection.css';
import NoteList from './dynamicComponents/noteList';

class MainSection extends Component {
  render() {
    return (
      <div id="mainSection">
        <NoteList notes={this.props} />
      </div>
    );
  }
}

export default MainSection;
