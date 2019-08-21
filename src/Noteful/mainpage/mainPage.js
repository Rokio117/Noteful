import React, { Component } from 'react';
import mainSection from '../mainSection/mainSection';
import SideBar from '../sideBar/sidebar';
import Header from '../header/header';
import MainSection from '../mainSection/mainSection';
import './mainPage.css';

class MainPage extends Component {
  render() {
    return (
      <>
        <Header />
        <div id="mainPage">
          <SideBar info={this.props.info.INFO.folders} />
          <MainSection info={this.props.info.INFO.notes} />
        </div>
      </>
    );
  }
}
export default MainPage;
