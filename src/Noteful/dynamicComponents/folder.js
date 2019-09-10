import React, { Component } from 'react';
import './folder.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Folder extends Component {
  render() {
    //console.log(this.props.id, 'id in folder');
    return (
      <div className="folder">
        <NavLink
          onClick={() => console.log(this.props.id, 'id for folder')}
          key={this.props.id}
          to={`/folder/${this.props.id}`}
          className="folder"
        >
          Folder: {this.props.name}
        </NavLink>
      </div>
    );
  }
}

export default Folder;
