import React from 'react'
import{ BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Home from './pages/Home'
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      
       <div className="app">
          <Switch>
            <Route path="/checkout">
              <Header/>
              <Checkout />  
            </Route>
            <Route path="/login">
              <Header />
                 <h1>Login Page</h1>
            </Route>
            <Route path="/">
              <Header/>
                 <Home />
            </Route>
          </Switch>
       </div>
    </Router>
  );
}

export default App;
