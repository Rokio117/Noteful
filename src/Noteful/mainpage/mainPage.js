import React, { Component } from 'react';
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
          <SideBar />
          <MainSection />
        </div>
      </>
    );
  }
}
export default MainPage;
