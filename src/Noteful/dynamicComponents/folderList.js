import React, { Component } from 'react';
import Folder from './folder';
import './folderList.css';
import NotefulContext from '../.././context';
import Note from './note';

class FolderList extends Component {
  render() {
    const folders = this.props.folders;
    return (
      <NotefulContext.Consumer>
        <div className="folderList">
          {folders.map(folder => (
            <Folder name={folder.name} id={folder.id} />
          ))}
          <button>Add Folder</button>
        </div>
      </NotefulContext.Consumer>
    );
  }
}

export default FolderList;
