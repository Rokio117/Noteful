import React, { Component } from 'react';
import FolderList from '../dynamicComponents/folderList';
import NotefulContext from '../../context';

class FolderSelector extends Component {
  render() {
    return (
      <NotefulContext.Consumer>
        {value => {
          return <div>Select a Folder</div>;
        }}
      </NotefulContext.Consumer>
    );
  }
}

export default FolderSelector;
