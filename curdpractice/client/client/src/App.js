import Navbar from './Components/navbar';
import Home from './Components/home';
import Register from './Components/register';
import Edit from './Components/edit';
import Detail from './Components/detail';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import {Routes, Route } from "react-router-dom";
import GeneratorRandomPassword from './Components/password';


function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      
      <Route  exact path="/" Component={Home}/>
      <Route   path="/register" Component={Register} />
      <Route   path="/update/:id" Component={Edit} />
      <Route   path="/view/:id" Component={Detail} />
      <Route  path="/generator" Component={GeneratorRandomPassword} />
    </Routes>
    
    </div>
  );
}

export default App;
