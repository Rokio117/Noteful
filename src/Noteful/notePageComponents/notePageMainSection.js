import React, { Component } from 'react';
import '../mainSection.css';

import Note from '../dynamicComponents/note';

class NotePageMainSection extends Component {
  render() {
    console.log(this.props.pathInfo, 'pathInfo in NotePageMainSection');
    return (
      <div id="mainSection">
        <Note info={this.props.info} pathInfo={this.props.pathInfo} />
      </div>
    );
  }
}

export default NotePageMainSection;
