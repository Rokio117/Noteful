import React, { Component } from 'react';
import './mainSection.css';
import noteList from './dynamicComponents/noteList';

class MainSection extends Component {
  render() {
    return (
      <div id="mainSection">
        <noteList notes={this.props.notes} />
      </div>
    );
  }
}

export default MainSection;
