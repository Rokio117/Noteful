import React, { Component } from 'react';
import Folder from './folder';
import './folderList.css';
import NotefulContext from '../.././context';
import { Link } from 'react-router-dom';

class FolderList extends Component {
  render() {
    return (
      <NotefulContext.Consumer>
        {value => {
          console.log(value, 'value in folderlist');
          console.log(value.value.folders, 'value.value.folders in FolderList');
          return (
            <div className="folderList">
              {value.value.folders.map(folder =>
                folder.name ? (
                  <Folder name={folder.name} id={folder.id} />
                ) : null
              )}
              <Link to="/addFolder" className="addFolderButton">
                Add Folder
              </Link>
            </div>
          );
        }}
      </NotefulContext.Consumer>
    );
  }
}

export default FolderList;
