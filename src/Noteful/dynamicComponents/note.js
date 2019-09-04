import React, { Component } from 'react';
import './note.css';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Note extends Component {
  render() {
    //console.log(this.props.history, 'history in Note');
    //console.log(this.props.info, 'props in Note');
    // const noteId = this.props.history.match
    //   ? this.props.history.match.params.noteId
    //   : null;
    // const noteObject = this.props.info
    //   ? this.props.info.find(note => note.id === noteId)
    //   : null;
    console.log(this.props.info[0], 'props in Note');
    return (
      <div className="note">
        {this.props.info[0] ? (
          <div>
            <div className="notename">{this.props.info[0].name}</div>
            <div className="noteModified">
              Modified on: {this.props.info[0].modified}
            </div>
            <button>Delete Note</button>
            <p className="noteContent">{this.props.info[0].content}</p>
          </div>
        ) : (
          <Link key={this.props.info.id} to={`/note/${this.props.info.id}`}>
            <div className="noteName">{this.props.info.name}</div>
            <div className="noteModified">
              Modified on: {this.props.info.modified}
            </div>
            <button>Delete Note</button>
          </Link>
        )}
      </div>
    );
  }
}
export default withRouter(Note);
