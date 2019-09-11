import React, { Component } from 'react';
import './sidebar.css';
import FolderList from '../dynamicComponents/folderList';
import NotePageSideBar from '../notePageComponents/notePageSideBar';
import NotefulContext from '../../context';
import SideBarError from './sideBarError';

class Sidebar extends Component {
  render() {
    return (
      <NotefulContext.Consumer>
        {value => (
          <SideBarError>
            <div id="sidebar">
              {value.value.checked ? <NotePageSideBar /> : <FolderList />}
            </div>
          </SideBarError>
        )}
      </NotefulContext.Consumer>
    );
  }
}

export default Sidebar;
