import React ,{useState ,useEffect}from 'react'
import { NavLink  , useParams ,useNavigate} from 'react-router-dom';

const Edit = () => {
  
  let history = useNavigate();
  
//  const  [getuserdata , setUserdata] =useState([]);
//  console.log(getuserdata);

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


const {id} = useParams("");


const getdata = async() => {
const res = await fetch (`/getuser/${id}` , {
  method:"GET",
  headers:{
    "Content-Type":"application/json"
  },
 
});
const data = await res.json ();
console.log(data);

if (res.status === 422 || !data){
  
  console.log("error");
}else{
  setUser(data)
  console.log(" get data ");
}
}
useEffect(() =>{
  getdata();
},[])

const updateuser = async(e) =>{
  e.preventDefault();
  const {name,email,work, mobile,add,desc,age} =user;

  const res2 = await fetch (`/updateuser/${id}`,{
    method:"PATCH",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      name,email,work, mobile,add,desc,age
    })
  });
  const data2 = await res2.json();
  console.log(data2);
  if (res2.status === 422 || !data2){
    alert("fill the data")
  }else{
    alert("data updated")
    history("/")
  }
}
  return (
    <div>
      <div className="container">
        <NavLink to="/">Home </NavLink>
        <form className='mt-4'>
            <div className='row'>
  <div className="mb-3 col-lg-6 col-md-6 col-12 col-lg-6 col-md-6 col-12">
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  name='name' value={user.name} onChange={handle}/>
    
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" className="form-label">email</label>
    <input type="text" className="form-control" id="exampleInputPassword1" name='email' value={user.email} onChange={handle} />
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" className="form-label">age</label>
    <input type="text" className="form-control" id="exampleInputPassword1" name='age' value={user.age} onChange={handle} />
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" className="form-label">mobile</label>
    <input type="text" className="form-control" id="exampleInputPassword1" name='mobile' value={user.mobile} onChange={handle} />
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" className="form-label">work</label>
    <input type="text" className="form-control" id="exampleInputPassword1"  name='work' value={user.work} onChange={handle}/>
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" className="form-label">Addres</label>
    <input type="text" className="form-control" id="exampleInputPassword1" name='add' value={user.add} onChange={handle} />
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" className="form-label">Desc</label>
    <textarea name="desc" className="form-control" id="" cols="30" rows="5"  value={user.desc} onChange={handle}></textarea>
  </div>
  
  <button type="submit" className="btn btn-primary" onClick={updateuser}>Submit</button>
</div>
</form>
      
    </div>
    </div>
  )
}

export default Edit
