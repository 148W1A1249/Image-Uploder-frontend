import React  from 'react';
import Header from './components/Header/Header';
import Galary from './components/Galary/galary';
import Upload from './components/Upload/upload';

import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';

function App() {
  return <>
    
    <Router>
        <Header/>
      <Switch>
        <Route path="/galary" component={Galary} />
        <Route path="/upload" component={Upload} />
      </Switch>
    </Router>
  </>
}

export default App;
