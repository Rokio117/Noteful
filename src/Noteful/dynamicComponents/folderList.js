import React, { Component } from 'react';
import Folder from './folder';
import './folderList.css';
import NotefulContext from '../.././context';

class FolderList extends Component {
  render() {
    return (
      <NotefulContext.Consumer>
        {value => {
          return (
            <div className="folderList">
              {value.value.folders.map(folder => (
                <Folder name={folder.name} id={folder.id} />
              ))}
              <button>Add Folder</button>
            </div>
          );
        }}
      </NotefulContext.Consumer>
    );
  }
}

export default FolderList;
