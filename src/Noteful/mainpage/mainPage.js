import React, { Component } from 'react';
import SideBar from '../sideBar/sidebar';
import Header from '../header/header';
import MainSection from '../mainSection/mainSection';
import './mainPage.css';
import NotefulContext from '../.././context';

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
