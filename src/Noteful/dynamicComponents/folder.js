import React, { Component } from 'react';
import './folder.css';
import { Link } from 'react-router-dom';

class Folder extends Component {
  render() {
    console.log(this.props, 'folder props');
    return (
      <Link
        key={this.props.id}
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
