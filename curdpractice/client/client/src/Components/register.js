import React ,{useState} from 'react';
import { NavLink , useNavigate } from 'react-router-dom'

const Register = () => {
  let history = useNavigate();
  const [user, setUser] = useState({
    name: "", email: "", age: "", mobile: "" , work:"" , add :"" , desc:""
});
let name, value;
const handle = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
}

  const adddata = async(e) =>{
    e.preventDefault();
    const {name, email , age ,mobile ,work , add, desc } = user;
    const res = await fetch ('/register' , {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name, email , age ,mobile ,work , add, desc
      })
    });
    const data = await res.json ();
    
    if (res.status === 422 || !data){
      alert("error");
      console.log("error");
    }else{
      alert("data added");
      history("/");
      console.log("data added");
    }
  }

  return (
    <div className="container">
        {/* <NavLink to="/">Home </NavLink>*/}
        <form className='mt-4'> 
            <div className='row'>
  <div className="mb-3 col-lg-6 col-md-6 col-12 col-lg-6 col-md-6 col-12">
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='name' value={user.name} onChange={handle} />
    
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" className="form-label">email</label>
    <input type="text" className="form-control" id="exampleInputtext1" name='email' value={user.email} onChange={handle}/>
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" className="form-label">age</label>
    <input type="text" className="form-control" id="exampleInputPassword1" name='age' value={user.age} onChange={handle}/>
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" className="form-label">mobile</label>
    <input type="text" className="form-control" id="exampleInputPassword1" name='mobile' value={user.mobile} onChange={handle}/>
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" className="form-label">work</label>
    <input type="text" className="form-control" id="exampleInputPassword1" name='work' value={user.work} onChange={handle}/>
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" className="form-label">Addres</label>
    <input type="text" className="form-control" id="exampleInputPassword1" name='add' value={user.add} onChange={handle}/>
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" className="form-label">Desc</label>
    <textarea  className="form-control" id="" cols="30" rows="5" name='desc' value={user.desc} onChange={handle}></textarea>
  </div>
  
  <button type="submit" className="btn btn-primary" onClick={adddata}>Submit</button>
</div>
</form>
      
    </div>
  )
}

export default Register
