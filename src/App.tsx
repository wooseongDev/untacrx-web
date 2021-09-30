import { Route, Switch } from 'react-router-dom';

import { useChannelServiceEffect } from './hooks';
import {
  ForbiddenPage,
  MainPage,
  MatchingPage,
  ProductItemPage,
  ProductPage,
} from './pages';

function App() {
  useChannelServiceEffect();

  return (
    <Switch>
      <Route exact path="/" component={MainPage} />

      <Route exact path="/match" component={MatchingPage} />

      <Route exact path="/product" component={ProductPage} />

      <Route exact path="/product/:id" component={ProductItemPage} />

      <Route component={ForbiddenPage} />
    </Switch>
  );
}

export default App;
