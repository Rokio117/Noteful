import React, { Component } from 'react';

class Note extends Component {
  render() {
    return (
      <div className="note">
        <div className="noteName">{this.props.name}</div>
        <div className="noteModified">{this.props.modified}</div>
      </div>
    );
  }
}
export default Note;
