import { Route, Switch } from 'react-router-dom';

import { useChannelServiceEffect } from './hooks';
import { MatchinPage } from './pages';

function App() {
  useChannelServiceEffect();

  return (
    <Switch>
      <Route exact path="/match" component={MatchinPage} />
    </Switch>
  );
}

export default App;
