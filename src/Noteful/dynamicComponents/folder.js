import React, { Component } from 'react';
import './folder.css';
import { Link } from 'react-router-dom';

class Folder extends Component {
  render() {
    return (
      <Link
        to={`/folder/${this.props.id}`}
        className="folder"
        onClick={console.log('Link was sucessful')}
      >
        Folder{this.props.name}
      </Link>
    );
  }
}

export default Folder;
