import React, { Component } from 'react';
import './mainSection.css';
import NoteList from './dynamicComponents/noteList';

class MainSection extends Component {
  render() {
    console.log(this.props, 'props in mainSection');
    return (
      <div id="mainSection">
        <NoteList notes={this.props} />
      </div>
    );
  }
}

export default MainSection;
