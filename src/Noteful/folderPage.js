import React, { Component } from 'react';
import SideBar from './sideBar/sidebar';
import Header from './header/header';
import MainSection from './mainSection/mainSection';
import '../Noteful/mainSection/mainSection.css';
import NotefulContext from '../context';
import { withRouter } from 'react-router-dom';

class FolderPage extends Component {
  render() {
    return (
      <NotefulContext.Consumer>
        {value => {
          const folderId = this.props.history.location.pathname.replace(
            '/folder/',
            ''
          );
          const notes = value.value.notes;
          const selectedFolder = notes.filter(note => note.folder == folderId);
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
