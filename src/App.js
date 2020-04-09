import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import {BrowserRouter , Switch , Route} from 'react-router-dom'
import Employee from './components/Employee';
import Departments from './components/Departments';
import Navigation from './components/Navigation'



function App() {

  

  return (
      <BrowserRouter>
          <div>

            <Navigation/>
            
            <Switch>
              <Route path="/" exact> <Home/> </Route>
              <Route path="/em"> <Employee/> </Route>
              <Route path="/de"> <Departments/> </Route>
            </Switch>
            
          </div>
      </BrowserRouter>
  );
}

export default App;
