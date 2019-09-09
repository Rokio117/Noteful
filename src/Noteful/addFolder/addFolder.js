import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class addFolder extends Component {
  render() {
    console.log(this.props.history, 'history in addFolder');

    return (
      <fieldset>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.history.goBack();
          }}
        >
          <label htmlFor="folderInput">Enter a Folder Name</label>
          <input type="text" id="folderInput"></input>
          <button type="submit">Submit</button>
        </form>
      </fieldset>
    );
  }
}

export default withRouter(addFolder);
