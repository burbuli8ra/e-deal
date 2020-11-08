import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header, Footer } from './components';

const App = () => {
  return (
    <>
      <Router>
        <Header />
      </Router>
      {/* @todo replace with actual component */}
      <div>Main App Content</div>
      <Footer />
    </>
  );
}

export default App;
