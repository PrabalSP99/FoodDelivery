import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



function Login() {

  const [data, setdata] = useState({
    email: '', password: ''
  })

  const navigate = useNavigate();

  // render the data to the bckend  //
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/users/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: data.email, password: data.password })
    })

    const json = await response.json();
    console.log(json)

    if (!json.success) {
      alert("Enter valid credentials");
    }
    else{
      localStorage.setItem('userEmail',data.email);
      localStorage.setItem('authtoken',json.token);
      navigate('/');
    }
    
  }

  function handle(event) {
    const { name, value } = event.target;
    setdata((prev) => {
      return { ...prev, [name]: value }
    })
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} >
       
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input name='email' value={data.email} onChange={handle} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input name='password' value={data.password} onChange={handle} type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="m-3 btn btn-success">Login</button>
        <Link to='/signup' className='m-3 btn btn-danger'> Not a user?</Link>
      </form>
    </div>
  )
}

export default Login;
