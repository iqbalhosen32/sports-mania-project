import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TeamDetail from './components/TeamDetail/TeamDetail';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/team-detail/:idTeam">
            <TeamDetail></TeamDetail>
          </Route>
        </Switch>
      </Router>
       
    </div>
  );
}

export default App;
