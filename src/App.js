import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import About from './components/pages/AboutUs';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import AddUser from './components/users/AddUsers';
import NotFound from './components/pages/NotFound';
import EditUser from './components/users/EditUsers';
import User from './components/users/Users';

function App() {
  return (
    <Router>
    <div className="App">
     

      
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/users/add" component={AddUser}/>
        <Route exact path="/users/edit/:id" component={EditUser}/>
        <Route exact path="/users/:id" component={User}/>

        <Route component={NotFound} />
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
