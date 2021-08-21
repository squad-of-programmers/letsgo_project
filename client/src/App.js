import React from "react";
import TableEditor from "./TableEditor/TableEditor";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateEvent from "./CreateEvent/CreateEvent";
import RegFormBloger from "./RegFormBloger/RegFormBloger";
import SpecCabinet from './SpecCabinet/SpecCabinet';
import Events from './Events/Events';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="container">
            <TableEditor />
          </div>
        </Route>
        <Route exact path="/regBloger">
          <RegFormBloger />
        </Route>
        <Route exact path="/specCabinet">
          <SpecCabinet />
        </Route>
        <Route exact path="/eventNew">
          <CreateEvent />
        </Route>
        <Route exact path="/events">
          <Events />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
