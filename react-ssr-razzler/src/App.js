import React, { useState, useEffect } from 'react';
import './App.css';

const App = (props) => {

  return (<div>
   Name: {!props.firstName || !props.lastName ? 'Loading...' : `${props.firstName} ${props.lastName}`}
  </div>) 
};

export default App;
