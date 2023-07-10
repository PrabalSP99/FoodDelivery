// import './App.css';
import Home from './screen/Home';
import Login from './screen/Login';
import Signup from './screen/Signup';
import Order  from './screen/userOrder'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

import { CartProvider } from './components/ContextReducer';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  return (
    <CartProvider>
       <Router>
        <div>
          <Routes>
           
           <Route exact path='/' element={<Home />}></Route> 
            <Route exact path='/login' element={<Login />}></Route>
            <Route exact path='/signUp' element={<Signup />}></Route>
            <Route exact path='/myorder' element={<Order />}></Route>

          </Routes>
        </div>
      </Router>
</CartProvider>
      
  );
}

export default App;
