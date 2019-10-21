import React, { Component } from 'react';
import './mainSection.css';
import NoteList from '../dynamicComponents/noteList';
import PropTypes from 'prop-types';

class MainSection extends Component {
  render() {
    return (
      <div id="mainSection">
        <NoteList selected={this.props.info} />
      </div>
    );
  }
}

MainSection.propTypes = {
  value: PropTypes.object
};

export default MainSection;
