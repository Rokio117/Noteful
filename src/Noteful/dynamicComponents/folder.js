import React, { Component } from 'react';
import './folder.css';
import { NavLink } from 'react-router-dom';

class Folder extends Component {
  render() {
    return (
      <NavLink
        key={this.props.id}
        to={`/folder/${this.props.id}`}
        className="folder"
      >
        Folder: {this.props.name}
      </NavLink>
    );
  }
}

export default Folder;
