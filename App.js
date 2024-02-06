import logo from './logo.svg';

import './App.css';import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import NavBare from './components/NavBare';
import { Forms } from './components/Forms';


function App() {

  return (

    <div className="App">
      <h1>  This is my first form  </h1>
<NavBare/>
<Forms/>
      
      

    <footer> 

       <h3>  This is footer for our first app  </h3> 

        </footer>

   
    </div>

  );
}

export default App;
