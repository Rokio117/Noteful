import React, { Component } from 'react';
import SideBar from '../sideBar/sidebar';
import Header from '../header/header';
import NotePageMainSection from './notePageMainSection';
import '../mainpage/mainPage.css';

class NotePage extends Component {
  render() {
    return (
      <>
        <Header />
        <div id="mainPage">
          <SideBar
            notes={this.props.notes}
            info={this.props.folders}
            pathInfo={this.props.pathInfo}
          />
          <NotePageMainSection
            info={this.props.info.INFO.notes}
            pathInfo={this.props.pathInfo}
          />
        </div>
      </>
    );
  }
}

export default NotePage;
