import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components';

const App = () => {
  return (
    <>
      <Router>
        <Header />
      </Router>
      {/* @todo replace with actual component */}
      <div>Main App Content</div>
    </>
  );
}

export default App;
