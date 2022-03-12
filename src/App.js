import './App.css';
import Home from './home/Home';
import { Route, Link } from 'react-router-dom';
import About from './about/About';
import Service from './service/Service';
import Product from './product/Product';
import Contact from './contact/Contact';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/service' component={Service} />
          <Route exact path='/product' component={Product} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </BrowserRouter>
    </div >
  );
}

export default App;
