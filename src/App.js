import Login from './code/login/login';
import {Route} from "wouter";
import Home from './code/home/home';
import WebR2 from './code/home/components/R2/r2';
import WebR3 from './code/home/components/R3/r3';
import WebR4 from './code/home/components/R4/r4';

function App() {

  return (
      <>
        <Route path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/home/webr2" component={WebR2} />
        <Route path="/home/webr3" component={WebR3} />
        <Route path="/home/webr4" component={WebR4} />
      </>
  );
}

export default App;
