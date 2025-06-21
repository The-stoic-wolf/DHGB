import React,{useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'


export default function Navbar() {
  const [style, setStyle] = useState(false);
  const [hoverIndex,setHoverIndex] = useState(null);

  useEffect( ()=>{
    const handlebackGround =()=>{
      console.log("ScrollY:", window.scrollY);
     setStyle(window.scrollY  > 400);
    };

  window.addEventListener("scroll",handlebackGround);
  return()=>{
      window.removeEventListener("scroll",handlebackGround);
   }  
  },[]);

  const  menus = [
    {label:'Home' ,path:'/home'},
    {label:'Regular Menu' ,path:'/Regular'},
    {label:'Vegan Menu' ,path:'/Vegan'},
    {label:'Vegan Protein To-Go' ,path:'/protein'},
    {label:'Vitamenese Tea Cermony' ,path:'/tea'}
  ]

   
  return (
    <div>
          <nav className={`navbar navbar-expand-lg ${style ? "bg-dark bg-opacity-75" : "bg-transparent", window.innerWidth <= 992 ? "bg-dark" :"bg-transparent"} fixed-top `}>
  <div className="container-fluid"> 
    <div className="logo1 ">
      <a href="/">
       <img className="ms-2" src="cooking-logo.png" alt="logo" />
       </a>
    </div>
    <button className="navbar-toggler bg-light d-lg-none ms-auto d-icons-none"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon "></span>
     </button>
    <div className={`collapse navbar-collapse fw-bold`}style={{padding:"0px 0px 0px 180px"}} id="navbarNav" >
      <ul className="navbar-nav" >
        {menus.map((menus,index)=>(
           <li className="nav-item" key={index} >
             <NavLink className={`nav-link fs-5`} style={({isActive}) =>({color : isActive ? "blue" : hoverIndex === index ? "gray" : "white"})}
              to={menus.path}  onMouseEnter={()=>{setHoverIndex(index)}} onMouseLeave={()=>{setHoverIndex(false)}}
              >
                {menus.label}
              </NavLink>
           </li>
        )
        )
      }
      </ul>
    </div>
    <div className="icons">
      <div className="d-flex justify-content-evenly d-none d-md-flex me-5  d-md-none" style={{width:"200px"}}>
        <img className="ms-2 rounded-4" src="tiktok-36.png" alt="icon2" />
        <img className="ms-2 rounded-4" src="insta-36.png" alt="icon3" />
        <img className="ms-2 rounded-4" src="face-36.png" alt="icon4" />
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
