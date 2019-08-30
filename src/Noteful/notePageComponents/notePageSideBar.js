import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from '../.././context';
import { withRouter } from 'react-router-dom';

class notePageSideBar extends Component {
  render() {
    console.log(this.props.history, 'prop info in notePageSideBar');

    return (
      <NotefulContext.Consumer>
        {value => {
          console.log(value, 'value in notePageSideBar');
          return (
            <div>
              <button
                className="goBackButton"
                onClick={() => this.props.history.goBack()}
              >
                Go Back
              </button>
              <h2>
                {function(value) {
                  const noteId = this.props.history.match.params.noteId;
                  const folderId = value.notes.find(note => note.id === noteId)
                    .folderId;
                  const folderName = value.info.find(id => id.id === folderId)
                    .name;
                  return folderName;
                }}
              </h2>
            </div>
          );
        }}
      </NotefulContext.Consumer>
    );
  }
}
export default withRouter(notePageSideBar);
