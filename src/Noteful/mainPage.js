import React, { Component } from 'react';
import mainSection from './mainSection';
import SideBar from './sidebar';
import Header from './header';
import MainSection from './mainSection';

class MainPage extends Component {
  render() {
    console.log(this.props.info.INFO.folders, 'folders');
    // console.log(this.props.info.notes, 'notes');
    return (
      <>
        <Header />
        <SideBar info={this.props.info.INFO.folders} />
        <MainSection info={this.props.info.INFO.notes} />
      </>
    );
  }
}
export default MainPage;
