import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header, Footer, Loader } from './components';

const App = () => {
  return (
    <>
      <Router>
        <Header />
      </Router>
      {/* @todo replace with actual component */}
      <Loader />
      <Footer />
    </>
  );
}

export default App;
