import React from "react";
import styled from "styled-components";
import DocumentationView from "./views/DocumentationView";
import TimersView from "./views/TimersView";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";



const Container = styled.div`
height: 100vh;
display: block;
overflow: hidden;
`;

function App() {
  return (
    <Container>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Timers</Link>
            </li>
            <li>
              <Link to="/docs">Documentation</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <TimersView />
          </Route>
          <Route exact path="/docs">
            <DocumentationView />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
