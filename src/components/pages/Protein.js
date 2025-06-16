import React from 'react'

export default function protein() {
  return (
    <>
    <div className="d-flex flex-row flex-wrap w-100 bg-black" style={{height:"1100px"}}>
        <div  style={{height:"800px",width:"40%",margin:"150px 0px 150px 0px",padding:"0px 0px 0px 100px"}}>
          <div className="d-flex" style={{margin:"40px 0px 0px 0px",padding:"0px 0px 0px 40px",height:"500px"}}>
               <img style={{objectFit:"cover",width:"100%"}} src="pro-to-go.png" alt="" />
          </div>
        </div>

        <div className="d-flex flex-column"  style={{height:"800px",width:"60%",margin:"150px 0px 150px 0px",padding:'0px 0px 0px 80px'}}>
            <div className="d-flex flex-column text-white" style={{height:"280px"}}>
                <h1 className=" text-white fw-bold" >VEGAN PROTEIN TO-GO</h1>
                <p className="fw-semibold fs-5 mt-1 ps-4 text-white">Customize your meals at home with our vegan ingredients.</p>
                <p>___________________________________________________________________________________________</p>
 
                <p className="mt-2 fs-5 fw-normal text-white">Your favorite vegan proteins are now available in convenient To-Go boxes for purchase, allowing you to create any meal you desire in the comfort of your home. Fully   prepared & ready to be added to your favorite recipes. Options include:</p>
            </div>
            <div className="d-flex flex-column pt-3 ms-2" style={{height:"130px"}}>
              <h4 className=" text-white fw-semibold">Vegan Grilled Pork or Chicken:</h4>
               <ul   className="text-white fs-6 mt-3 fw-normal">
                <li>8oz – $12</li>
                <li>1lb – $24</li>
               </ul>
            </div>

             <div className="d-flex flex-column ms-2" style={{height:"130px"}}>
              <h4 className=" text-white fw-semibold">Vegan Fried Chicken:</h4>
               <ul  className="text-white fs-6 mt-3 fw-normal">
                <li>8oz – $12</li>
                <li>1lb – $24</li>
               </ul>
            </div>

             <div className="d-flex flex-column ms-2" style={{height:"130px"}}>
              <h4 className=" text-white fw-semibold">Vegan Lemongrass Beef:</h4>
               <ul  className="text-white fs-6 mt-3 fw-normal">
                <li>8oz – $15</li>
                <li>1lb – $30</li>
               </ul>
            </div> 

            <div className="d-flex flex-column ms-2" style={{height:"130px"}}>
              <h4 className=" text-white fw-semibold">Vegan Meatloaf (Roll):</h4>
               <ul  className="text-white fs-6 mt-3 fw-normal">
                <li>1lb – $12</li>
                <li>1lb – $23</li>
               </ul>
            </div>
            <div className="w-100 text-white ps-2 fw-bold" style={{height:"30px"}}>
              <p >Perfect for sandwiches, salads, bowls or other creative dishes.</p>
            </div>
            <p className="text-white mt-2">___________________________________________________________________________________________</p>
             <button type="button" className="btn btn-primary  mt-3 fw-bold fs-5"  style={{height:"70px",width:"300px",borderRadius:"70px"}}>View All Vegan Bánh Mì</button>
        </div>
    </div>
    {/* ---------------------------------------------------------------------------------------------------------section no 2-------------------------------------------------------------------------------------------- */}
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
