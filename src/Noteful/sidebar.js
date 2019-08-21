import React, { Component } from 'react';
import './sidebar.css';
import FolderList from './dynamicComponents/folderList';
import NotePageSideBar from './notePageComponents/notePageSideBar';

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        {this.props.pathInfo ? (
          <NotePageSideBar
            notes={this.props.notes}
            pathInfo={this.props.pathInfo}
            info={this.props.info}
          />
        ) : (
          <FolderList folders={this.props.info} />
        )}
      </div>
    );
  }
}

export default Sidebar;
