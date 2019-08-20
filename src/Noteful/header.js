import React, { Component } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <h1>
        <Link to="/">Noteful</Link>
      </h1>
    );
  }
}
