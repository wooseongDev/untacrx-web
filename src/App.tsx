import { Route, Switch } from 'react-router-dom';

import useChannelServiceEffect from './hooks/useChannelServiceEffect';
import { MainPage, MatchinPage } from './pages';

function App() {
  useChannelServiceEffect();

  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/match" component={MatchinPage} />
    </Switch>
  );
}

export default App;
