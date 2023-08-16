import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from "./pages/dashboard";

function App() {
  return(
    <Router>
      <div>
        <h1>Conectado al back</h1>
      </div>
        {/* <Route exact path ="/" component={Dashboard}/> */}

    </Router>
  )
}
export default App;