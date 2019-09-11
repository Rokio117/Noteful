import React, { Component } from 'react';

class SideBarError extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <h2>Sorry, an error occured</h2>;
    }
    return this.props.children;
  }
}

export default SideBarError;
