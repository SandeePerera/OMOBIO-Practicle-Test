import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Login from './login';
import Home from './home';


 /**
      *test BrowserRouter working 
      */
      

function App() {
  return (
    <div className="App">
      
      Welcome 
            
      <Router>
        <Route path="/" exact component={Login}/> 
        <Route path="/home" exact component={Home}/> 
      </Router>
    </div>
  );
}

export default App;
