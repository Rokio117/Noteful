import React, { Component } from 'react';
import './note.css';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import NotefulContext from '../../context';
class Note extends Component {
  render() {
    return (
      <NotefulContext.Consumer>
        {context => {
          return (
            <div className="note">
              {this.props.info[0] ? (
                <div key={this.props.info[0].id}>
                  <div className="notename">{this.props.info[0].name}</div>
                  <div className="noteModified">
                    Modified on: {this.props.info[0].modified_date}
                  </div>
                  <button
                    onClick={() => {
                      context.handleDelete(this.props.info[0].id);
                      this.props.history.push('/');
                    }}
                  >
                    Delete Note
                  </button>
                  <p className="noteContent">{this.props.info[0].content}</p>
                </div>
              ) : (
                <>
                  <Link
                    key={this.props.info.id}
                    to={`/note/${this.props.info.id}`}
                  >
                    <div className="noteName">{this.props.info.name}</div>
                    <div className="noteModified">
                      Modified on: {this.props.info.modified_date}
                    </div>
                  </Link>
                  <button
                    onClick={() =>
                      context.handleDelete(this.props.info.id, 'cows')
                    }
                  >
                    Delete Note
                  </button>
                </>
              )}
            </div>
          );
        }}
      </NotefulContext.Consumer>
    );
  }
}
export default withRouter(Note);
