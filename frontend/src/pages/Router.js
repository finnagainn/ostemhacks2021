import 'typeface-roboto'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavBar from '../components/NavBar';
import ViewRequests from './ViewRequests';
import RequestPage from './RequestPage';
import Home from './Home';


function RouterDisplay() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/requests">
          <RequestPage />
        </Route>
        <Route path="/request">
          <ViewRequests />
        </Route>
      </Switch>
    </Router>
  );
}

export default RouterDisplay;
