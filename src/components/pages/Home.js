import React, { useState } from 'react'

export default function Navbar() {
   const images =[
        "hotb2.jpeg",
        "food1-logo.png",
        "pastry8.jpeg",
        "fried-chik.jpeg"
      ]
      const [index,setIndex] =useState(0);

      const handlePrev =()=>{
        setIndex((currentindex)=>(currentindex === 0 ? images.length - 1 : currentindex - 1));
      }
      const handleNext=()=>{
        setIndex((currentindex)=>(currentindex === images.length - 1 ? 0 : currentindex + 1));
      }
      useState(()=>{
       const interval = setInterval(()=>{
           setIndex((currentindex)=>(currentindex === images.length - 1 ? 0 : currentindex + 1));
       },3000);

        return ()=> clearInterval(interval);
      },[])

const [starindex,setStarIndex] = useState(0)
const boxes =[
  {
    name:"Neil Ta",
    date:"5/17/2025",
    text:"Dude!!! Probably 50% of this Bakery is Vegan. They have the Best Vegan pastries in town. Rest assure, they label."
  },
   {
    name:"Steven",
    date:"4/29/2025",
    text:"Amazing vegan options! Good prices too! Baguette was fresh, crisp, yet soft. 10/10 We had both the vegan lemongrass steak."
  },
   {
    name:"My le",
    date:"2/24/2025",
    text:"This Viet French bakery is 90% vegan. (They have a meat menu for bánh mì and pastries too). I wanted."
  },
   {
    name:"Elaine Chevez",
    date:"2/2/2025",
    text:"This place is now one of our favorite bakeries in SoCal! They have a ton of vegan options, prices are."
  },
   {
    name:"SANTIKUL SILAVONG",
    date:"12/2/2024",
    text:"Came in to shop after dinner. No one in shop so great timing. We ordered vietnamese sandwiches, girl at counter."
  },
];

    const visibleboxes = boxes.slice(starindex, starindex + 3);

    const nextBox = ()=>{
      if(starindex + 3 < boxes.length){
        setStarIndex(starindex + 1);
      }
    };

    const prevbox = ()=>{
      if(starindex >  0){
        setStarIndex(starindex - 1);
      }
    };

  return (
    <>
    <header>
 <div className="image1 ">
  <div className="d-flex position-relative w-100 " style={{height:"750px"}}>
   <img src={images[index]} alt="logo2" className="img-fluid col-12" style={{objectFit:"cover",width:"100%"}} />
    <button onClick={handlePrev} className="text-white fs-3 fw-bold bg-dark bg-opacity-75  position-absolute" style={{height:"50px",border:"none",cursor:"pointer",width:"50px",top:"50%",left:'2px'}}> ‹ </button>
    <button onClick={handleNext} className="text-white fs-3 fw-bold bg-dark bg-opacity-75  position-absolute" style={{height:"50px",border:"none",cursor:"pointer",width:"50px",top:"50%",right:"2px"}}> › </button>
    {/* <div className="d-flex flex-column position-absolute bg-dark bg-opacity-75 rounded-5 col-12" style={{height:"200px",width:"650px",top:'36%',left:"30%"}}>
      <p className="text-white fs-2 fw-bold fst-italic ps-4 pt-2">IT'S BETTER VEGAN</p>
      <h5 className="ps-4 text-white ">Experience our one-of-a-kind signature vegan coconut croissant.</h5>
      <button className=" btn btn-primary rounded-5 " style={{height:'45px',width:"200px",margin:"20px 0px 0px 10px"}}>Learn More</button>
     </div> */}
  </div>
</div>
</header>
<div className="d-flex justify-content-center align-items-center type1 w-100 bg-black" style={{height:"130px"}}>
  <div className="text1">
    <p className="text-bold text-white fs-3">Vegan-friendly Vietnamese bakery serving both traditional & vegan bánh mì, pastries, desserts & coffee.</p>
  </div>
</div>
<div style={{height:"190px",backgroundColor:"rgb(40, 51, 65)"}}>
  <div className="d-flex flex-column justify-content-center align-items-center">
   <p className="fs-2 fw-medium text-white pt-3">COME VISIT US</p>
   <button type="button" className="btn btn-primary rounded-4 mt-5 fw-bold fs-5"  style={{height:"45px",width:"300px"}}>Contact Us</button>
   </div>
</div>
{/* ---------------------------------------------------------------------section no 1 ------------------------------------------------------------------------------------------- */}
<div className="bg-black d-flex flex-row" style={{height:"500px"}}>
   <div className="d-flex flex-column text-white " style={{width:"25%",height:"500px",padding:"150px 0px 50px 120px"}}>
    <h5 className="fw-bold fs-4 ps-5">4.5</h5>
    <p className="fs-5 fw-semibold ">Based on 265 reviews</p>
    <p className="mt-0 ps-3">powered by google</p>
   </div>

   <div className="d-flex flex-row position-relative" style={{height:"500px",width:"75%"}}>
    {/* <button onClick={prevbox} className="text-white fs-3 fw-bold  bg-dark bg-opacity-75 position-absolute" style={{height:"50px",border:"none",cursor:"pointer",width:"50px",top:"50%",left:'10px'}}> ‹ </button>
     {visibleboxes.map((boxes,i)=>(
      <div className="d-flex flex-column rounded-4" key={i} style={{height:"380px",width:"320px",margin:"50px 0px 50px 40px",backgroundColor:"lightblue", border:"2px solid blue"}}>
        <div className="d-flex flex-row pt-3 ps-4" style={{height:"80px"}}>
          <img src="cooking-48.png" alt="logo"/>
            <div className="d-flex flex-column" style={{height:"120px",width:"150px"}}>
               <h5 className="pt-2 ps-3 fw-semibold mb-1">{boxes.name}</h5>
               <p className=" ps-3">{boxes.date}</p>
            </div>
        </div>
        <p style={{margin:"20px 10px 0px 20px",height:"200px"}}>{boxes.text}</p>
      </div>
        )
       )
      }
       <button onClick={nextBox} className="text-white fs-3 fw-bold  bg-dark bg-opacity-75 position-absolute" style={{height:"50px",border:"none",cursor:"pointer",width:"50px",top:"50%",right:"10px"}}> › </button> */}
   </div>
</div>
{/* -----------------------------------------------------------------------------section no 2------------------------------------------------------------- */}
     <div className="d-flex flex-row  bg-dark w-100" style={{height: "180px"}}>

        {/* <div className="d-flex flex-column " style={{height:"160px",width:"200px",padding:"20px 10px 10px 10px"}}>
           <p className="mx-3 fs-5 fw-semibold text-white "> Address</p>
           <p className="mx-3 fw-semibold text-white ">  
               8536 Westminster Blvd,
               Westminster CA 92683</p>    
        </div>
        <div className="d-flex flex-column " style={{height:"160px",width:"220px",padding:"20px 5px 10px 5px"}}>
          <p className="mx-2 fs-6 fw-semibold text-white">HOURS OF OPERATION</p>
          <p  className="mx-2 fs-6 fw-normal text-white">Daily: 6AM - 8PM</p>
        </div>

        <div className="d-flex flex-column" style={{height:"160px",width:"200px",padding:"20px 5px 10px 5px"}}>
          <p className="mx-2 fs-6 fw-semibold text-white">PHONE NUMBER</p>
          <p  className="mx-2 fs-6 fw-normal text-primary">(714) 891-4404</p>
        </div>

        <div className="d-flex flex-column" style={{height:"160px",width:"200px",padding:"20px 5px 10px 0px"}}>
          <p className="mx-3 fs-6 fw-semibold text-white">FOLLOW</p>
            <div className="d-flex justify-content-evenly mx-0" style={{width:"160px"}}>
             <img className="ms-2 rounded-4" src="tiktok-36.png" alt="icon2" />
             <img className="ms-2 rounded-4" src="insta-36.png" alt="icon3" />
             <img className="ms-2 rounded-4" src="face-36.png" alt="icon4" />
            </div>
        </div>

        <div  style={{height:"160px",width:"200px",padding:"20px 5px 10px 0px"}}>
          <p  className="mx-1 fs-6 fw-semibold text-white">ABOUT US</p>
        </div>
        <div style={{height:"160px",width:"200px",padding:"20px 5px 10px 0px"}}>
           <p  className="mx-1 fs-6 fw-semibold text-white">CONTACT US</p>
        </div> */}
       </div>
       {/* ------------------------------------------------------------------------section no 6------------------------------------------------------------------------------------------ */}
      <div className="d-flex flex-wrap w-100 bg-black align-items-center"  style={{height:"80px"}}>
         <p className=" fs-5 text-white mt-3 mx-5">© 2025 Đông Hưng Viên Bakery – All Rights Reserved.</p>
      </div>
</>
  )
}
