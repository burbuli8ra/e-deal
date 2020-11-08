import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from 'provider';
import { Header, Footer, Loader, Section } from 'components';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Header />
      </Router>
      {/* @todo replace with actual component */}
      <Section>
        <Loader />
      </Section>
      <Footer />
    </AppProvider>
  );
}

export default App;
