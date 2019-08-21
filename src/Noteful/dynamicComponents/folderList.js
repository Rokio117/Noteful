import React, { Component } from 'react';
import Folder from './folder';
import './folderList.css';

class FolderList extends Component {
  render() {
    const folders = this.props.folders;
    return (
      <div className="folderList">
        {folders.map(folder => (
          <Folder name={folder.name} id={folder.id} />
        ))}
        <button>Add Folder</button>
      </div>
    );
  }
}

export default FolderList;
