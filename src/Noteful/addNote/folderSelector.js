import React, { Component } from 'react';
import FolderList from '../dynamicComponents/folderList';
import NotefulContext from '../../context';

class FolderSelector extends Component {
  render() {
    return (
      <NotefulContext.Consumer>
        {value => {
          console.log(value, 'value in Folder Selector');
          return <div>Select a Folder</div>;
        }}
      </NotefulContext.Consumer>
    );
  }
}

export default FolderSelector;
