import React, { Component } from 'react';
import Folder from './folder';
import './folderList.css';

class FolderList extends Component {
  render() {
    console.log(this.props.folders, 'props.folders in FolderList');
    const folders = this.props.folders;
    return (
      <div className="folderList">
        {folders.map(folder => (
          <Folder name={folder.name} id={folder.id} />
        ))}
      </div>
    );
  }
}

export default FolderList;
