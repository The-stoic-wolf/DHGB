import React from 'react'

export default function Navbar() {
  return (
    <>
    <header>
 <div className="image1">
  <div className="d-flex w-100 " style={{height:"750px"}} >
  <img src="food1-logo.png" alt="logo2" style={{objectFit:"cover",width:"100%"}}  />
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
   <p className="fs-2 fw-medium text-white mt-3">COME VISIT US</p>
   <button type="button" className="btn btn-primary rounded-4 mt-5 fw-bold fs-5"  style={{height:"45px",width:"300px"}}>Contact Us</button>
   </div>
</div>
<div className="bg-black " style={{height:"400px"}}></div>
{/* -----------------------------------------------------------------------------section no 2------------------------------------------------------------- */}
     <div className="d-flex flex-row  bg-dark w-100" style={{height: "180px"}}>

        <div className="d-flex flex-column " style={{height:"160px",width:"200px",padding:"20px 10px 10px 10px"}}>
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
        </div>
       </div>
       {/* ------------------------------------------------------------------------section no 6------------------------------------------------------------------------------------------ */}
      <div className="d-flex flex-wrap w-100 bg-black align-items-center"  style={{height:"80px"}}>
         <p className=" fs-5 text-white mt-3 mx-5">© 2025 Đông Hưng Viên Bakery – All Rights Reserved.</p>
      </div>
</>
  )
}
