import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NotefulContext from '../../context';
import './addNote.css';

class AddNote extends Component {
  render() {
    console.log(this.props.history, 'history in addnote');
    return (
      <fieldset id="noteField">
        <form>
          <h2>Add a Note</h2>
          <label htmlFor="nametext">Enter a name</label>
          <input type="text" className="nameText"></input>
          <label>notes:</label>
          <textarea id="textarea" rows="20" cols="50"></textarea>
          <button id="cancelButton" onClick={() => this.props.history.goBack()}>
            Cancel
          </button>
        </form>
      </fieldset>
    );
  }
}

export default withRouter(AddNote);
