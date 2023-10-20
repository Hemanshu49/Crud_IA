import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';

const Detail = () => {

  const  [getuserdata , setUserdata] =useState([]);
  console.log(getuserdata);

  const {id} = useParams("");

  let history = useNavigate();
  
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
    setUserdata(data)
    console.log(" get data ");
  }
}
  useEffect(() =>{
    getdata();
  } ,[])

  const deleteuser = async (id) =>{

    const res2 = await fetch(`/deleteuser/${id}`, {
      method:"DELETE" ,
      headers:{
        "Content-Type" :"application/json"
      }
    });

    const deletedata = await res2.json();
    console.log(deletedata);

    if (res2.status === 422 || !deletedata){
      console.log("error");
    }else{
      console.log("user deleted");
      history("/");
    }
  }


  return (
    <div className="container mt-2">
        <div className="card">
  <div className="card-body">
 <NavLink to={`/update/${getuserdata._id}`}> <button className="btn btn-primary mx-2">Update</button></NavLink>
  <button className="btn btn-danger" onClick={ ()=>deleteuser(getuserdata._id)} >Delete</button>
                    
  <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">
                           
                            <h3 className="mt-3">Name: <span>{getuserdata.name}</span> </h3>
                            <h3 className="mt-3">Age: <span>{getuserdata.age}</span></h3>
                            <h3><p className="mt-3">Email:<span>{getuserdata.email}</span></p></h3>
                            <h3><p className="mt-3">Work: <span>{getuserdata.work}</span></p></h3>
                        </div>
                        <div className="right_view  col-lg-6 col-md-6 col-12">

                            <p className="mt-5">mobile: <span>{getuserdata.mobile}</span></p>
                            <p className="mt-3">location: <span>{getuserdata.add}</span> </p>
                            <p className="mt-3">Description: <span>{getuserdata.desc}</span></p>
                        </div>
                    </div>
  </div>
</div>
      
    </div>
  )
}

export default Detail
