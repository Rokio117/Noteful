import React, { Component } from 'react';
import './folder.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Folder extends Component {
  render() {
    return (
      <div className="folder">
        <NavLink
          key={this.props.id}
          to={`/folder/${this.props.id}`}
          className="folder"
        >
          Folder: {this.props.name}
        </NavLink>
        <Link to="/addNote" id="addNote">
          Add Note
        </Link>
      </div>
    );
  }
}

export default Folder;
