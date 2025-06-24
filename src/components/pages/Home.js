import React, { useEffect, useState } from 'react'

export default function Navbar() {
   const images =[
        "food1-logo.png",
        "fried-chik.jpeg",
        "hotb3.jpeg",
        "pastry7.jpeg"
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

    const visibleboxes = window.innerWidth <= 576 ? 
    boxes.slice(starindex, starindex + 1):window.innerWidth > 576  && window.innerWidth <= 992 ?
    boxes.slice(starindex, starindex + 2):boxes.slice(starindex, starindex + 3)

    const boxedView = window.innerWidth <= 576 ? 1 : 3;

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

    const [largescreen,setLargescreen] = useState(window.innerWidth >= 992);
    useEffect(()=>{
      const handlResize =() => {
        setLargescreen(window.innerWidth >= 992);
      };
      window.addEventListener("resize",handlResize)
      return ()=>{ window.removeEventListener("resize",handlResize)}
    },[])
  return (
    <>
    <header>
 <div className="images">
  <div className="d-flex position-relative w-100 bg-dark" style={{ height:window.innerWidth <= 576 ?"500px":"700px",marginTop: window.innerWidth <= 550 ?"100px":"0px",overflow:"hidden"}}>
   <img src={images[index]} alt="logo2" className="img-fluid" style={{objectFit:"cover",width:"100%",height:"100%"}} />
    <button onClick={handlePrev} className="text-white fs-3 fw-bold bg-dark bg-opacity-75  position-absolute" style={{height:"50px",border:"none",cursor:"pointer",width:"50px",top:"50%",left:'2px',transform:"translateY(-50%)",zIndex:2}}> ‹ </button>
    <button onClick={handleNext} className="text-white fs-3 fw-bold bg-dark bg-opacity-75 position-absolute" style={{height:"50px",border:"none",cursor:"pointer",width:"50px",top:"50%",right:"2px",transform:"translateY(-50%)",zIndex:2}}> › </button>
    <div className={` ${window.innerWidth <= 576 ?"justify-content-left":"ms-5"} d-flex flex-column position-absolute bg-dark bg-opacity-75 rounded-5`} style={{maxHeight:"200px",height:"80%",margin:window.innerWidth <= 576 ?"0px 10% 0px 10%":"",width:"80%",maxWidth:"647px",top:'50%',left : largescreen?"30%" :"1%",transform : largescreen  ? "none":"translateY(-50%)",zIndex:2}}>
       <p className={`  text-white fs-2 fw-bold fst-italic ps-4 mt-1`}>IT'S BETTER VEGAN</p>
       <h5 className="ps-4 text-white" style={{ fontWeight: window.innerWidth <= 550 ?"normal":"semibold"}}>Experience our one-of-a-kind signature vegan coconut croissant.</h5>
       <button className=" btn btn-primary rounded-5 " style={{height:'40px',width:"200px",margin: window.innerWidth <= 550 ?"6px 0px 0px 6px":"20px 0px 0px 10px"}}>Learn More</button>
     </div>
  </div>
</div>
</header>
<div className="d-flex justify-content-center align-items-center type1 w-100 bg-black" style={{height:window.innerWidth <= 576 ?"200px":"150px"}}>
  <div className="text1">
    <p className={` ${window.innerWidth <= 576 ?"px-4 fst-italic":"px-3"} text-bold text-white fs-3 `}>Vegan-friendly Vietnamese bakery serving both traditional & vegan bánh mì, pastries, desserts & coffee.</p>
  </div>
</div>
<div style={{height:"180px",backgroundColor:"rgb(40, 51, 65)"}}>
  <div className="d-flex flex-column justify-content-center align-items-center">
   <p className="fs-2 fw-italic text-white pt-2">COME VISIT US</p>
   <button type="button" className="btn btn-primary rounded-4 mt-5 fw-bold fs-5"  style={{height:"45px",width:"300px"}}>Contact Us</button>
   </div>
</div>
{/* ---------------------------------------------------------------------section no 1 ------------------------------------------------------------------------------------------- */}
<div className={` ${window.innerWidth <= 576 ?"flex-column":"flex-row"} bg-black d-flex flex-row`} style={{height:window.innerWidth <= 576 ?"600px":"500px"}}>
   <div className={` ${window.innerWidth <= 576 ?"align-items-center justify-conmtent-center":"justify-content-left"} d-flex flex-column text-white`} style={{width:window.innerWidth <= 576 ?"100%":"20%",height:window.innerWidth <= 576 ?"150px":"500px",padding:window.innerWidth <= 576?"20px 0px 10px 10px":"150px 0px 50px 60px"}}>
    <h5 className={`${window.innerWidth <= 576 ?"ps-2":"ps-5"} fw-bold fs-4 `}>4.5</h5>
    <p className="fs-5 fw-semibold ">Based on 265 reviews</p>
    <p className={` ${window.innerWidth <= 576 ?"ps-1":"ps-3"} mt-0 `}>powered by google</p>
   </div>

   <div className="d-flex flex-row position-relative" style={{height:window.innerWidth <= 576 ?"400px":"500px",width:window.innerWidth <= 576 ?"100%":"80%"}}>
    <button onClick={prevbox} className="text-white fs-3 fw-bold  bg-dark bg-opacity-75 position-absolute" style={{height:"50px",border:"none",cursor:"pointer",width:"50px",top:"50%",left:'10px'}}> ‹ </button>
     {visibleboxes.map((boxes,i)=>(
      <div className="d-flex flex-column rounded-4" key={i} style={{height:"380px",width:window.innerWidth <= 576 ?"70%":"320px",margin:window.innerWidth <= 576 ?"2% 15% 5% 15%":"50px 0px 50px 60px",backgroundColor:"lightblue"}}>
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
       <button onClick={nextBox} className="text-white fs-3 fw-bold  bg-dark bg-opacity-75 position-absolute" style={{height:"50px",border:"none",cursor:"pointer",width:"50px",top:"50%",right:"10px"}}> › </button>
   </div>
</div>
{/* -----------------------------------------------------------------------------section no 2------------------------------------------------------------- */}
     <div className={`d-flex ${window.innerWidth <= 547?"flex-column":"flex-row"}  bg-dark w-100`} style={{height : window.innerWidth <= 550 ? "620px": "180px"}}>

        <div className="d-flex flex-column " style={{height:"160px",width:"200px",padding:"20px 10px 10px 10px"}}>
           <p className="mx-3 fs-5 fw-semibold text-white "> Address</p>
           <p className="mx-3 fw-semibold text-white ">  
               8536 Westminster Blvd,
               Westminster CA 92683</p>    
        </div>
        <div className="d-flex flex-column " style={{height:"160px",width:"220px",padding:window.innerWidth <= 576 ?"20px 10px 10px 10px":"20px 5px 10px 5px"}}>
          <p className="mx-2 fs-6 fw-semibold text-white">HOURS OF OPERATION</p>
          <p  className="mx-2 fs-6 fw-normal text-white">Daily: 6AM - 8PM</p>
        </div>

        <div className="d-flex flex-column" style={{height:"160px",width:"200px",padding:window.innerWidth <= 576 ?"20px 10px 10px 10px":"20px 5px 10px 5px"}}>
          <p className="mx-2 fs-6 fw-semibold text-white">PHONE NUMBER</p>
          <p  className="mx-2 fs-6 fw-normal text-primary">(714) 891-4404</p>
        </div>

        <div className="d-flex flex-column" style={{height:"160px",width:"200px",padding:window.innerWidth <= 576 ?"20px 10px 10px 10px":"20px 5px 10px 0px"}}>
          <p className="mx-3 fs-6 fw-semibold text-white">FOLLOW</p>
            <div className="d-flex justify-content-evenly mx-0" style={{width:"160px"}}>
             <img className="ms-2 rounded-4" src="tiktok-36.png" alt="icon2" />
             <img className="ms-2 rounded-4" src="insta-36.png" alt="icon3" />
             <img className="ms-2 rounded-4" src="face-36.png" alt="icon4" />
            </div>
        </div>

        <div  style={{height:"160px",width:"200px",padding:window.innerWidth <= 576 ?"20px 10px 10px 10px":"20px 5px 10px 0px"}}>
          <p  className="mx-1 fs-6 fw-semibold text-white">ABOUT US</p>
        </div>
        <div style={{height:"160px",width:"200px",padding:window.innerWidth <= 576 ?"20px 10px 10px 10px":"20px 5px 10px 0px"}}>
           <p  className="mx-1 fs-6 fw-semibold text-white">CONTACT US</p>
        </div>
       </div>
       {/* ------------------------------------------------------------------------section no 6------------------------------------------------------------------------------------------ */}
      <div className="d-flex flex-wrap w-100 bg-black align-items-center"  style={{height:"110px"}}>
         <p className=" fs-5 text-white mt-3 mx-5">© 2025 Đông Hưng Viên Bakery – All Rights Reserved.</p>
      </div>
</>
  )
}
