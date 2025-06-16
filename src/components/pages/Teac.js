import React from 'react'

export default function Teac() {
  return (
    <>
      <div className="bg-black d-flex flex-row" style={{height:"850px",width:"100%"}}>
         <div className="d-flex  " style={{height:"700px",width:"40%",margin:"80px 0px 0px 80px"}}>
           <img src="teac.png" alt="T-logo" style={{height:"500px",width:"100%",margin:"100px 0px 50px 50px",objectFit:"cover"}}/>
         </div>

         <div className="d-flex flex-column" style={{height:"700px",width:"40%",margin:"80px 80px 0px 100px"}}>
            <div className="d-flex flex-column text-white mx-3 mt-4 ">
              <h1 className="fw-bold">VIETNAMESE TEA CEREMONY (ĐÁM HỎI)</h1>
            </div>
            <p className="mx-3 text-white">_________________________________________________________________________</p>
            <p className="mx-3 fs-5 fw-semibold text-white">A Vietnamese tea ceremony, commonly known as ‘Đám Hỏi’, is a profound blend of tradition and symbolism, celebrating not only the union of two souls but also the coming together of two families.</p>

             <p className="mx-3 fs-5 fw-semibold text-white">Vietnamese Tea Ceremony Rental Policy: A $200 deposit is required to secure your Vietnamese tea ceremony rentals. This deposit will be returned in full once all rental items are returned within 48 hours of the event. If any item is not returned within that timeframe, the corresponding deposit will be forfeited. By renting our Vietnamese tea ceremony items, you agree to these terms.</p>
             <p className="mx-3 text-white">_________________________________________________________________________</p>
             <div className="" style={{height:"100px"}}>
                <button className="mx-3 btn btn-primary mt-3 fw-bold fs-6" style={{height:"60px",width:"400px",borderRadius:"35px"}}>VIEW VIETNAMESE TEA CERMONY MENU</button>
             </div>
         </div>
      </div>
      {/* ----------------------------------------------------------section no 1---------------------------------------------------------------- */}
      <div className="pt-5" style={{height:"1400px",width:"100%",backgroundColor:"rgb(40, 51, 65)"}}> 

        <div className="d-flex flex-column text-white align-items-center pt-3" style={{height:"900px", margin:" 0px 300px 50px 300px"}}>
            <h2 className="fs-3 fw-normal ">BOOK YOUR VIETNAMESE TEA CEREMONY WITH US!</h2>
            <p className=" fs-5 fw-normal " style={{margin:"10px 190px 0px 190px"}}>At Đông Hưng Viên Bakery, we specialize in bringing to life the sweetness of  your engagement (Đám Hỏi) and wedding day with our bespoke cakes and personalized service.</p>
{/* -----------------------------------------------------section no 2----------------------------------------------------------------------------- */}
          <div className="d-flex flex-column mt-4"  style={{height:"1200px",width:"100%",border:"3px solid red"}}>
            <div className="d-flex flex-row mt-2" style={{height:"80px",border:"3px solid red"}}>
               <div className="d-flex flex-column ps-1 pt-2" style={{width:"48%",border:"3px solid red"}}>
                 <label  htmlFor="fname" className='mx-1 fs-5 fw-normal 'style={{height:"10px"}}>First name</label><br></br>
                 <input style={{height:"40px"}} className="rounded-3 pb-1" type="text" id="fname" name="fname" placeholder='Enter here'/><br></br>
               </div>
               <div className="d-flex flex-column ms-1 ps-3 pt-2" style={{width:"48%",border:"3px solid red"}}>
                 <label  htmlFor="fname" className=' mx-1 fs-5 fw-normal ' style={{height:"10px"}}>Last name</label><br></br>
                 <input style={{height:"40px"}} className="rounded-3 pb-1" type="text" id="fname" name="fname" placeholder='Enter here'/><br></br>
               </div>
             </div>

             <div className="d-flex flex-column mt-2 pb-2 mx-1" style={{width:"98%",height:"80px",border:"3px solid red"}} >
                 <label  htmlFor="fname" className='ms-1 fs-5 fw-normal ' style={{height:"10px"}}>Email</label><br></br>
                 <input style={{height:"40px"}} className="rounded-3 pb-1" type="text" id="fname" name="fname" placeholder='Enter here'/><br></br>
             </div>

             <div className="d-flex flex-column mt-2 pb-2 mx-1" style={{width:"98%",height:"80px",border:"3px solid red"}}>
                 <label  htmlFor="fname" className='ms-1 fs-5 fw-normal pb-1' style={{height:"10px"}}>Phone</label><br></br>
                 <input style={{height:"40px"}} className="rounded-3 pb-1" type="text" id="fname" name="fname"/><br></br>
             </div>

             <div className="d-flex flex-column mt-2 pb-2 mx-1" style={{width:"98%",height:"80px"}}>
                 <label  htmlFor="fname" className='ms-1 fs-5 fw-normal pb-1' style={{height:"10px"}}>Date Of Event</label><br></br>
                 <input style={{height:"40px"}} className="rounded-3 pb-1" type="text" id="fname" name="fname" placeholder='mm/dd/yyyy'/><br></br>
             </div>

             <div className="d-flex flex-column mt-2 pb-2 mx-1" style={{width:"98%",height:"80px",border:"3px solid red"}}>
                 <label  htmlFor="fname" className='ms-1 fs-5 fw-normal pb-1' style={{height:"10px"}}>Time Of Event</label><br></br>
                 <input style={{height:"40px"}} className="rounded-3 pb-1" type="text" id="fname" name="fname" placeholder='--:-- --'/><br></br>
             </div>

             <div className="d-flex flex-column mt-2 pb-2 mx-1" style={{width:"98%",height:"80px",border:"3px solid red"}}>
                 <label  htmlFor="fname" className='ms-1 fs-5 fw-normal pb-1' style={{height:"10px"}}>Number Of Guests</label><br></br>
                 <input style={{height:"40px"}} className="rounded-3 pb-1" type="text" id="fname" name="fname" placeholder='Enter here'/><br></br>
             </div>
  {/* --------------------------------------------------------section no 3--------------------------------------------------------- */}
            <div className="ms-2 mt-1" style={{height:"30px",border:"3px solid red"}}>
              <p className="fs-6 fw-semibold text-white  ">SELECT WHICH ITEMS YOU’D LIKE TO ORDER FOR YOUR EVENT: *</p>
            </div>
            <div className="d-flex flex-row" style={{width:"100%",border:"3px solid red"}}>
                <div className="d-flex flex-column "style={{width:"50%",border:"3px solid red"}}>
                  <div className="d-flex px-2"> 
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"  style={{transform: "scale(1.5)",}}/>
                    <label htmlFor="vehicle1"className="fs-5 fw-semibold ms-2">BÁNH CỐM</label><br></br>
                   </div>

                    <div className="d-flex px-2">
                     <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"  style={{transform: "scale(1.5)",}}/>
                     <label htmlFor="vehicle1"className="fs-5 fw-semibold ms-2">XÔI GẤC</label><br></br>
                   </div>

                    <div className="d-flex px-2">
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"  style={{transform: "scale(1.5)",}}/>
                    <label htmlFor="vehicle1"className="fs-5 fw-semibold ms-2">TRẦU CAU (ARTIFICIAL)</label><br></br>
                   </div>

                    <div className="d-flex px-2">
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{transform: "scale(1.5)",}}/>
                    <label htmlFor="vehicle1"className="fs-5 fw-semibold ms-2">TEA (JASMINE OR OOLONG)</label><br></br>
                   </div>
                 </div>  

                 <div className="d-flex flex-column "style={{width:"50%",border:"3px solid red"}}>
                  <div className="d-flex px-2"> 
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"  style={{transform: "scale(1.5)",}}/>
                    <label htmlFor="vehicle1"className="fs-5 fw-semibold ms-2">BÁNH XU-XÊ</label><br></br>
                   </div>

                    <div className="d-flex px-2">
                     <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"  style={{transform: "scale(1.5)",}}/>
                     <label htmlFor="vehicle1"className="fs-5 fw-semibold ms-2">XÔI TRÁI TIM</label><br></br>
                   </div>

                    <div className="d-flex px-2">
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"  style={{transform: "scale(1.5)",}}/>
                    <label htmlFor="vehicle1"className="fs-5 fw-semibold ms-2">KHAY RƯỢU</label><br></br>
                   </div>

                    <div className="d-flex px-2">
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{transform: "scale(1.5)",}}/>
                    <label htmlFor="vehicle1"className="fs-5 fw-semibold ms-2">MÂM QUẢ</label><br></br>
                   </div>
                 </div>     
            </div>
            <div className="d-flex flex-column pt-2 mx-1" style={{width:"98%",height:"200px",border:"3px solid red"}}>
                 <label  htmlFor="fname" className='ms-1 fs-6 fw-semibold'>DESCRIBE YOUR EVENT (Are there any additional details you would like us to be aware of?)*</label><br></br>
                 <textarea className="form-control rounded-3 " id="exampleFormControlTextarea1" rows="5"></textarea><br></br>
             </div>
             <div className="d-flex flex-column mx-1 " style={{width:"98%",height:"100px",border:"3px solid red"}}>
                 <label  htmlFor="fname" className='ms-1 fs-6 fw-semibold'>How Did You Hear About Us? *</label><br></br>
                 <textarea className="form-control rounded-3 pt-1" id="exampleFormControlTextarea1" rows="1"></textarea><br></br>
             </div>
             <div className="pt-3" style={{height:"100px",border:"3px solid red"}}>
              <button className="btn btn-primary rounded-5 fs-5 fw-normal " style={{height:"50px",width:"120px"}}>SUBMIT</button>
             </div>
            </div>
         </div>
      </div>
           {/* ---------------------------------------------------------------------------------section no 5------------------------------------------------------------------------------------ */}
       <div className="d-flex flex-row  bg-dark w-100" style={{height: "180px"}}>

        <div className="d-flex flex-column " style={{height:"160px",width:"200px",margin:"20px 10px 10px 10px"}}>
           <p className="mx-3 fs-5 fw-semibold text-white "> Address</p>
           <p className="mx-3 fw-semibold text-white ">  
               8536 Westminster Blvd,
               Westminster CA 92683</p>    
        </div>
        <div className="d-flex flex-column " style={{height:"160px",width:"220px",margin:"20px 5px 10px 5px"}}>
          <p className="mx-2 fs-6 fw-semibold text-white">HOURS OF OPERATION</p>
          <p  className="mx-2 fs-6 fw-normal text-white">Daily: 6AM - 8PM</p>
        </div>

        <div className="d-flex flex-column" style={{height:"160px",width:"200px",margin:"20px 5px 10px 5px"}}>
          <p className="mx-2 fs-6 fw-semibold text-white">PHONE NUMBER</p>
          <p  className="mx-2 fs-6 fw-normal text-primary">(714) 891-4404</p>
        </div>

        <div className="d-flex flex-column" style={{height:"160px",width:"200px",margin:"20px 5px 10px 0px"}}>
          <p className="mx-3 fs-6 fw-semibold text-white">FOLLOW</p>
            <div className="d-flex justify-content-evenly mx-0" style={{width:"160px"}}>
              <img className="ms-2 rounded-4" src="tiktok-36.png" alt="icon2" />
              <img className="ms-2 rounded-4" src="insta-36.png" alt="icon3" />
              <img className="ms-2 rounded-4" src="face-36.png" alt="icon4" />
            </div>
        </div>

        <div  style={{height:"160px",width:"200px",margin:"20px 5px 10px 0px"}}>
          <p  className="mx-1 fs-6 fw-semibold text-white">ABOUT US</p>
        </div>
        <div style={{height:"160px",width:"200px",margin:"20px 5px 10px 0px"}}>
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
