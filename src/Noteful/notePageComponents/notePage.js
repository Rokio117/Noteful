import React, { Component } from 'react';
import SideBar from '../sideBar/sidebar';
import Header from '../header/header';
import NotePageMainSection from './notePageMainSection';
import '../mainpage/mainPage.css';
import NotefulContext from '../../context';

class NotePage extends Component {
  render() {
    return (
      <NotefulContext.Consumer>
        {value => {
          return (
            <>
              <Header />
              <div id="mainPage">
                <SideBar
                  notes={value.notes}
                  info={value.folders}
                  pathInfo={this.props.pathInfo}
                />
                <NotePageMainSection
                  info={this.props.info.INFO.notes}
                  pathInfo={this.props.pathInfo}
                />
              </div>
            </>
          );
        }}
      </NotefulContext.Consumer>
    );
  }
}

export default NotePage;
