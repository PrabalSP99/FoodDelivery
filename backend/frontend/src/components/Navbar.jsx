import React,{useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import Badge from "react-bootstrap/Badge"
import Modal from '../Modal';
import Cart from '../screen/FoodCart';
import {useCart} from './ContextReducer'


const Nav = function Navbar() {
  let data = useCart();
  
  const [cartView,setCartView]= useState(true);
  const Navigate= useNavigate();
  function handle(){
    localStorage.removeItem('authtoken');
     Navigate('/');
  }


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger bs-danger-border-subtle" id='nav'>
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fw-bolder fst-italic" to="/">Prabs</Link>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav me-auto ">
              <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>

              {(localStorage.getItem('authtoken')) ? <div className='navbar-nav'>
                <Link className="nav-link active fs-5" aria-current="page" to="/myorder"> Orders</Link>
              </div> : ''}
            </div>
           
            {(!localStorage.getItem('authtoken')) ? <div className='navbar-nav'>
            <div className='d-flex '>
              <Link className="btn bg-white text-success mx-1" to='/login'>Login</Link>
              <Link className="btn bg-white text-success mx-1" to='/signup'>SignUp</Link>
            </div>
              </div> : <div>

              <button className="btn bg-white text-success mx-1" onClick={()=>{ setCartView(false) }}>
                  Cart <Badge pill bg='danger'>{data.length===0?'':data.length}</Badge> 
              </button>
              {cartView ? null : <Modal onclose={()=>{setCartView(true)}}><Cart/></Modal>} 
              <button className="btn bg-white text-success mx-1" onClick={handle}>LogOut</button>
              </div> 
              
              }
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Nav;