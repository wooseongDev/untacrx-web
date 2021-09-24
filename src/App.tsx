import { Route, Switch } from 'react-router-dom';

import { MainPage } from './pages';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
    </Switch>
  );
}

export default App;
