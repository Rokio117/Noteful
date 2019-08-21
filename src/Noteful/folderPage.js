import React, { Component } from 'react';
import SideBar from './sidebar';
import Header from './header';
import MainSection from './mainSection';
import './mainPage.css';

class FolderPage extends Component {
  render() {
    console.log(
      this.props.pathInfo.match.params.folderId,
      'this.props.pathinfo in FolderPage'
    );
    const folderId = this.props.pathInfo.match.params.folderId;
    const notes = this.props.info.INFO.notes;
    const selectedFolder = notes.filter(note => note.folderId === folderId);
    console.log(selectedFolder);
    return (
      <>
        <Header />
        <div id="mainPage">
          <SideBar info={this.props.info.INFO.folders} />
          <MainSection info={selectedFolder} />
        </div>
      </>
    );
  }
}
export default FolderPage;
