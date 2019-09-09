import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NotefulContext from '../../context';

class addFolder extends Component {
  constructor(props) {
    super(props);
    this.folderInput = React.createRef();
  }
  randomNum = () => {};
  createId = () => {};
  render() {
    return (
      <NotefulContext.Consumer>
        {value => {
          return (
            <fieldset>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  const name = this.folderInput.current.value;
                  console.log(name, 'name in form');
                  fetch('http://localhost:9090/folders', {
                    method: 'POST',
                    body: JSON.stringify({ name: `${name}` }),
                    headers: { 'Content-Type': 'application/json' }
                  })
                    .then(response => response.json())
                    .then(responseJson =>
                      console.log(responseJson, 'responseJson')
                    );
                  fetch('http://localhost:9090/folders')
                    .then(response => {
                      return response.json();
                    })
                    .then(responseJson => {
                      value.handleAddFolder(responseJson);
                      console.log(
                        responseJson,
                        'response in 2nd fetch request'
                      );
                    });

                  //value.handleAddFolder();
                  this.props.history.push('/');
                }}
              >
                <label htmlFor="folderInput">Enter a Folder Name</label>
                <input
                  type="text"
                  id="folderInput"
                  ref={this.folderInput}
                ></input>
                <button type="submit">Submit</button>
              </form>
            </fieldset>
          );
        }}
      </NotefulContext.Consumer>
    );
  }
}

export default withRouter(addFolder);
