import React, { Component } from 'react';
import './sidebar.css';
import FolderList from '../dynamicComponents/folderList';
import NotePageSideBar from '../notePageComponents/notePageSideBar';
import NotefulContext from '../../context';

class Sidebar extends Component {
  render() {
    return (
      <NotefulContext.Consumer>
        {value => (
          <div id="sidebar">
            {value.value.checked ? <NotePageSideBar /> : <FolderList />}
          </div>
        )}
      </NotefulContext.Consumer>
    );
  }
}

export default Sidebar;
