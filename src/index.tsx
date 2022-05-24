import { createRoot } from 'react-dom/client';
import { MemoryRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/login';
import AppPage from './pages/app';
import './index.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/app" component={AppPage} />
        <Route path="*">
          <Redirect to="/app" />
        </Route>
      </Switch>
    </Router>
  )
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
