import React, { Component } from 'react';
import './folder.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NotefulContext from '../../context';
import PropTypes from 'prop-types';

class Folder extends Component {
  render() {
    return (
      <NotefulContext.Consumer>
        {value => {
          return (
            <div className="folder" key={this.props.id}>
              <NavLink
                //key={this.props.id}
                to={`/folder/${this.props.id}`}
                className="folder"
              >
                Folder: {this.props.name}
              </NavLink>
              <button
                id="folderDelete"
                onClick={() => value.handleDeleteFolder(this.props.id)}
              >
                Delete Folder
              </button>
            </div>
          );
        }}
      </NotefulContext.Consumer>
    );
  }
}

Folder.propTypes = {
  value: PropTypes.object
};

export default Folder;
