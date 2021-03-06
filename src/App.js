import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import { AuthComponent } from './pages/auth'
import { BookingsComponent } from './pages/bookings'
import { EventsComponent } from './pages/events'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect from="/" to="/auth" exact />
        <Route path="/auth" component={AuthComponent} />
        <Route path="/events" component={EventsComponent} />
        <Route path="/bookings" component={BookingsComponent} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
