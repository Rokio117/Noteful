import React from 'react';

const NotefulContext = React.createContext({
  folders: [],
  notes: [],
  handleDelete: () => {},
  selected: false
});

export default NotefulContext;
