import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export const Signup = () => {
    const [credentials, setcredentials] = useState({name:"",email:"",password:"",geolocation:""})
    let navigate = useNavigate()
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const response = await fetch("https://mernbackend-piob.onrender.com/api/creatuser",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
          //save the auth toke to local storage and redirect
          localStorage.setItem('token', json.authToken)
          navigate("/login")
        }
        if(!json.success){
           alert("Enter valid");
        }
        
    }
    const onChange=(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }
  return (
    <div><> 
    <div className="container">
    <form className='w-50 m-auto mt-5 border bg-primary border-success rounded' onSubmit={handleSubmit}>
    <div className="m-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}/>
  </div>
  
  <div className="m-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text text-dark">We'll never share your email with anyone else.</div>
  </div>
  <div className="m-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1"/>
  </div>
  <div className="m-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
    <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange} id="exampleInputAddress"/>
  </div>
  
  
  <button type="submit" className="m-3 btn btn-success">Submit</button>
 <Link to="/login" className='m-3 mx-1 btn btn-danger'>Already a user</Link>
</form>
</div>
    </></div>
  )
}
