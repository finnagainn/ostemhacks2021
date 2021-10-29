import 'typeface-roboto'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavBar from '../components/NavBar';
import {ViewRequests, Request} from './ViewRequests';
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
          <ViewRequests />
        </Route>
        <Route path="/request/:id">
          <Request />
        </Route>
        <Route path="/request/">
            <RequestPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default RouterDisplay;
