import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NotefulContext from '../../context';
import ValidationError from './folderValidation';

const baseUrl = 'https://fast-plains-77694.herokuapp.com/api/';
class addFolder extends Component {
  constructor(props) {
    super(props);
    this.folderInput = React.createRef();
    this.state = { name: '', touched: false };
  }
  updateName(name) {
    this.setState({ name: name, touched: true });
  }
  validateName() {
    const name = this.state.name.trim();
    if (this.state.touched) {
      if (name.length === 0) {
        return 'Please enter a name';
      } else if (name.length < 3) {
        return 'Name must be at least 3 characters long';
      }
    }
  }
  render() {
    return (
      <NotefulContext.Consumer>
        {value => {
          return (
            <fieldset>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  const name = this.state.name;
                  fetch(`${baseUrl}folders`, {
                    method: 'POST',
                    body: JSON.stringify({ folder_name: `${name}` }),
                    headers: { 'Content-Type': 'application/json' }
                  })
                    .then(response => response.json())
                    .then(responseJson => {
                      value.handleAddFolder(responseJson);
                    });
                  this.props.history.goBack();
                }}
              >
                <label htmlFor="folderInput">Enter a Folder Name</label>
                <input
                  type="text"
                  id="folderInput"
                  ref={this.folderInput}
                  placeholder="Charlie"
                  onChange={e => this.updateName(e.target.value)}
                ></input>
                <ValidationError message={this.validateName()} />
                <button
                  type="submit"
                  disabled={!this.state.touched || this.validateName()}
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => this.props.history.goBack()}
                >
                  Cancel
                </button>
              </form>
            </fieldset>
          );
        }}
      </NotefulContext.Consumer>
    );
  }
}

export default withRouter(addFolder);
