import {
  Route,
} from "react-router-dom";
import './App.css';
import CreateEvent from "./Pages/CreateEvent";
import Events from "./Pages/Events";

import Landing from './Pages/Landing';

function App() {
  return (
    <div className="App">

      <Route exact path='/' component={Landing} />
      <Route exact path='/create' component={CreateEvent} />
      <Route exact path='/event' component={Events} />


    </div>
  );
}


export default App;
