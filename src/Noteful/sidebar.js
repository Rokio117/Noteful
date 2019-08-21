import React, { Component } from 'react';
import './sidebar.css';
import FolderList from './dynamicComponents/folderList';
import NotePageSideBar from './notePageComponents/notePageSideBar';

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        {this.props.info ? (
          <FolderList folders={this.props.info} />
        ) : (
          <NotePageSideBar />
        )}
      </div>
    );
  }
}

export default Sidebar;
