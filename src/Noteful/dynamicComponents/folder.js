import React, { Component } from 'react';
import './folder.css';

class Folder extends Component {
  render() {
    return <div className="folder">Folder{this.props.name}</div>;
  }
}

export default Folder;
