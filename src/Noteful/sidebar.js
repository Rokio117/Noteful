import React, { Component } from 'react';
import './sidebar.css';
import FolderList from './dynamicComponents/folderList';

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <FolderList folders={this.props.info} />
      </div>
    );
  }
}

export default Sidebar;
