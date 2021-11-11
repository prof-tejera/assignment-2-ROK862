import React from "react";
import styled from "styled-components";
import DocumentationView from "./views/DocumentationView";
import TimersView from "./views/TimersView";
import AppProvider from "./globals/AppProvider"; 
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  display: block;
  overflow: hidden;
`;

function App() {
      // Add context Store to the entire application.
      // Not sure if this is the right way, but should work for my setting.
      // Looking forward to inputs, perhaps some good old constructive criticism :)
  return (
    <AppProvider>
      <Container>
        <Router>
          <nav>
            <ul>
              <li>
<<<<<<< HEAD
                <Link to="/assignment-2-ROK862">Timers</Link>
              </li>
              <li>
                <Link to="/assignment-2-ROK862/doc">Documentation</Link>
=======
                <Link to="/assignment-2-ROK862/">Timers</Link>
              </li>
              <li>
                <Link to="/assignment-2-ROK862/docs">Documentation</Link>
>>>>>>> origin/main
              </li>
            </ul>
          </nav>
          <Switch>
<<<<<<< HEAD
            <Route exact path="/assignment-2-ROK862">
=======
            <Route exact path="/assignment-2-ROK862/">
>>>>>>> origin/main
              <TimersView />
            </Route>
            <Route exact path="/assignment-2-ROK862/docs">
              <DocumentationView />
            </Route>
          </Switch>
        </Router>
      </Container>
    </AppProvider>
  );
}

export default App;
