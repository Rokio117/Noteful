import React, { Component } from 'react';
import './sidebar.css';
import FolderList from './dynamicComponents/folderList';

class Sidebar extends Component {
  render() {
    console.log(this.props.info, 'this.props.info in Sidebar');
    return (
      <div id="sidebar">
        <FolderList folders={this.props.info} />
      </div>
    );
  }
}

export default Sidebar;
