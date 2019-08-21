import React, { Component } from 'react';
import mainSection from './mainSection';
import SideBar from './sidebar';
import Header from './header';
import MainSection from './mainSection';
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
