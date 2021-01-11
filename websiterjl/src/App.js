// import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import LoadingPage from './components/LoadingPage/LoadingPage';
import { React, BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import ModelingPage from './components/ModelingPage/ModelingPage';
import SoftwareEngineerPage from './components/SoftwareEnigineer.Page/SoftwareEngineerPage'
import BlogPage from './components/BlogPage/BlogPage';




function App() {
  return (
    <div className="App">
      <div className='Container'>
        <Router>
        <Switch>
          <Route path='/LoadingPage'><LoadingPage /></Route>
          <Route path='/LandingPage'><LandingPage /> </Route>
          <Route path='/SoftwareEngineerPage'> <SoftwareEngineerPage/> </Route>
          <Route path='/ModelingPage'><ModelingPage/></Route>    
          <Route path='/BlogPage'> <BlogPage/>  </Route>     
        </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
