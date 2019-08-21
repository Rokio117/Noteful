import React, { Component } from 'react';

class notePageSideBar extends Component {
  render() {
    console.log(this.props.pathInfo, 'prop info in notePageSideBar');
    console.log(this.props.info, 'info in notePageSideBar');
    console.log(this.props.notes, 'notes in notepageSideBar');
    return (
      <div>
        <button className="goBackButton">Go Back</button>
        <h2>{}</h2>
      </div>
    );
  }
}
export default notePageSideBar;
