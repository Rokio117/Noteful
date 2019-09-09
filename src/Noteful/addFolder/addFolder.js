import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class addFolder extends Component {
  render() {
    return (
      <fieldset>
        <form>
          <label for="folderInput">Enter a Folder Name</label>
          <input type="text" id="folderInput"></input>
        </form>
      </fieldset>
    );
  }
}

export default withRouter(addFolder);
