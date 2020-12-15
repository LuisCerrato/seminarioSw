
import './App.css';
import './utlts/transitions.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import {StateProvider} from './utlts/Context';
import mainReducer from './utlts/store/store';
import PrivateRoute from './utlts/PrivateRoute';


import { AnimatedSwitch } from 'react-router-transition';
import { pageTransitions as transition, mapGlideStyles as mapStyles } from './utlts/transitions';


import Home from './components/public/Home';
import Login from './components/public/Login';
import ListServices from './components/private/ListServices';
import NewService from './components/private/NewService';
import NewDate from './components/private/NewDate';
import ListCitas from './components/private/ListCitas';
import Splash from './components/public/Splash';
import NotFound from './components/public/NotFound';
import Signin from './components/public/Signin';



function App() {
  let appState = mainReducer();
  return (
    <StateProvider initialState={appState} reducer={mainReducer}>
    <div className="App">
      <Router>
        <Splash>
        
        <AnimatedSwitch
        {...transition}
        mapStyles={mapStyles}
        className ="switch-wrapper"
        >
        <Route path="/" exact component={Home}/>
        <Route path="/Login" exact component={Login}/>
        <Route path="/signin" exact component={Signin}/>
        <PrivateRoute path="/servicios" exact component={ListServices}/>
        <PrivateRoute path="/servicios/new" exact component={NewService} />
        <PrivateRoute path="/citas/new" exact component={NewDate} />
        <PrivateRoute path="/citas" exact component={ListCitas} />
        <Route path="*" component={NotFound} />
        </AnimatedSwitch>
        </Splash>

      </Router>
    </div>
    </StateProvider>

    
  );
}

export default App;
