import React from 'react';

const NotefulContext = React.createContext({
  folders: [],
  notes: [],
  selected: false
});

export default NotefulContext;
