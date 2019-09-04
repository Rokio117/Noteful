import React, { Component } from 'react';
import SideBar from './sideBar/sidebar';
import Header from './header/header';
import MainSection from './mainSection/mainSection';
import '../Noteful/mainSection/mainSection.css';
import NotefulContext from '../context';
import { withRouter } from 'react-router-dom';

class FolderPage extends Component {
  render() {
    console.log(
      this.props.pathInfo.match.params.folderId,
      'this.props.pathinfo in FolderPage'
    );
    return (
      <NotefulContext.Consumer>
        {value => {
          //console.log(value.value, 'value.notes');
          //console.log(this.props.history, 'history in folderpage');
          //const folderId = this.props.history.match.params.folderId;
          const folderId = this.props.history.location.pathname.replace(
            '/folder/',
            ''
          );
          //console.log(folderId);
          const notes = value.value.notes;
          const selectedFolder = notes.filter(
            note => note.folderId === folderId
          );
          //console.log(selectedFolder, 'selected folder');
          return (
            <>
              <Header />
              <div id="mainPage">
                <SideBar info={value.folders} />
                <MainSection info={selectedFolder} />
              </div>
            </>
          );
        }}
      </NotefulContext.Consumer>
    );
  }
}
export default withRouter(FolderPage);
