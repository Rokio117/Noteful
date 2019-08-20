import React, { Component } from 'react';
import Folder from './folder';

class FolderList extends Component {
  render() {
    const folders = this.props.folders;
    return (
      <div key={folders.name}>
        {folders.map(folder => (
          <Folder name={folder.name} key={folder.id} />
        ))}
      </div>
    );
  }
}

export default FolderList;
