import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppProvider } from 'provider';
import { Header, Footer, Section } from 'components';
import { CategoriesListView, ProductsListView } from 'views';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Header />
        <Section>
          <Switch>
            <Route
              component={CategoriesListView}
              exact={true}
              path="/"
            />
            <Route
              component={ProductsListView}
              path="/categories/:categoryId"
            />
          </Switch>
        </Section>
      </Router>
      <Footer />
    </AppProvider>
  );
}

export default App;
