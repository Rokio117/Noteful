import React, { Component } from 'react';
import SideBar from '../sideBar/sidebar';
import Header from '../header/header';
import MainSection from '../mainSection/mainSection';
import './mainPage.css';
import NotefulContext from '../src/context';

class MainPage extends Component {
  render() {
    return (
      <NotefulContext.Consumer>
        {value => {
          //console.log(value, 'value in consumer on mainpage');
          return (
            <>
              <Header />
              <div id="mainPage">
                <SideBar info={value.folders} />
                <MainSection info={value.notes} />
              </div>
            </>
          );
        }}
      </NotefulContext.Consumer>
    );
  }
}
export default MainPage;
