import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Signup = () => {
  const [data, setdata] = useState({
    name:'',email:'',password:'',location:''
   })

   const navigate= useNavigate();
  const handleSubmit = async(e)=>{
       e.preventDefault();
       const response = await fetch("http://localhost:5000/users/signup",{
        method: 'POST',
        headers:{
               'Content-Type':'application/json'
        },
        body:JSON.stringify({name: data.name, email:data.email, password: data.password, location:data.location})
       })

       const json = await response.json();
       console.log(json)

       if(!json.success){
        alert("Enter valid credentials"); 
       }

       navigate('/login');
  }

  function handle(event){
      const {name , value}= event.target;
      setdata((prev)=>{
         return { ...prev, [name]:value } 
      })
  }

  
  return (
  
    <div className='container'>
      <form onSubmit={handleSubmit} >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input name ='name' value ={data.name} onChange= {handle} type="text" className="form-control"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input  name='email' value ={data.email} onChange= {handle} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input name='password' value ={data.password} onChange= {handle} type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
          <input name='location' value ={data.location} onChange= {handle} type="text" className="form-control" id="exampleInputlocation" />
        </div>
        <button type="submit"  className="m-3 btn btn-success">Submit</button>
        <Link to='/login' className='m-3 btn btn-danger'>Already a user</Link>
      </form>

    </div>
  )
}
export default Signup;