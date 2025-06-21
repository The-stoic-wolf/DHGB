 import React from 'react'

export default function Teac() {
  return (
    <>
      <div className={` d-flex ${window.innerWidth  <= 900 ? "flex-column":"flex-row"} bg-black`} style={{height:window.innerWidth <= 900 ?"1200px":"850px",width:"100%",border:"2px solid red"}}>
         <div className="d-flex " style={{height:window.innerWidth <= 900 ?"500px":"900px",width:window.innerWidth <= 900 ?"90%":"40%",margin:window.innerWidth <= 750 ?"20% 10% 0% 10%":window.innerWidth > 750 && window.innerWidth > 750 ?"10% 15% 0% 15%":"80px 0px 0px 80px",border:"2px solid red"}}>
           <img src="teac.png" alt="T-logo" style={{height:"450px",width:"90%",padding:window.innerWidth <= 750 ?"10% 5% 5% 5%":window.innerWidth > 750 && window.innerWidth > 750 ?"10% 15% 0% 0%":"10% 5% 5% 5%",objectFit:"cover",border:"2px solid red"}}/>
         </div>

         <div className="d-flex flex-column" style={{height:window.innerWidth <= 900 ?"600px":"900px",width:window.innerWidth <= 900 ?"100%":"40%",margin:window.innerWidth <= 900 ?"20px 50px 10px 10px":"80px 80px 0px 100px",border:"2px solid red"}}>
            <div className={`d-flex ${window.innerWidth <= 900 ?"ps-2 mt-2":"mx-3 mt-4"} flex-column text-white`} style={{border:"2px solid red"}}>
              <p className={`${window.innerWidth <= 900 ?"fw-bold fs-4":"fs-3 fw-bold"}`} style={{border:"2px solid red"}}>VIETNAMESE TEA CEREMONY (ĐÁM HỎI)</p>
            </div>
            <p className={` ${window.innerWidth <= 900 ?"ps-1":"mx-3"} text-white`} style={{border:"2px solid red"}}>_________________________________________________________________</p>
            <p className={`${window.innerWidth <= 900 ?"ps-2 fs-6 fst-italic ":"mx-3 fs-5 "}  fw-semibold text-white`} style={{border:"2px solid red"}}>A Vietnamese tea ceremony, commonly known as ‘Đám Hỏi’, is a profound blend of tradition and symbolism, celebrating not only the union of two souls but also the coming together of two families.</p>

             <p className={` ${window.innerWidth <= 900 ?"ps-2 fs-6 fst-italic ":"mx-3 fs-5 "} fw-semibold text-white `} style={{border:"2px solid red"}}>Vietnamese Tea Ceremony Rental Policy: A $200 deposit is required to secure your Vietnamese tea ceremony rentals. This deposit will be returned in full once all rental items are returned within 48 hours of the event. If any item is not returned within that timeframe, the corresponding deposit will be forfeited. By renting our Vietnamese tea ceremony items, you agree to these terms.</p>
             <p className={`${window.innerWidth <= 900 ?"ps-1":"mx-3"} text-white`} style={{border:"2px solid red"}}>__________________________________________________________________</p>
             <div className="" style={{height:window.innerWidth <= 900 ?"80px":"100px",border:"2px solid red"}}>
                <button className={ `${window.innerWidth <= 900 ?"ps-2 pt-1 fw-normal ":"mx-3 mt-3 fw-bold"} btn btn-primary fs-6`} style={{height:"60px",width:window.innerWidth <= 900 ?"320px":"400px",borderRadius:"35px"}}>VIEW VIETNAMESE TEA CERMONY MENU</button>
             </div>
         </div>
      </div>
{/* ----------------------------------------------------------section no 1---------------------------------------------------------------- */}
      <div className={`${window.innerWidth <= 900 ? "pt-3":"pt-5"}`} style={{height:window.innerWidth <= 900 ?"1400px":"1400px",width:"100%",backgroundColor:"rgb(40, 51, 65)",border:"2px solid red"}}> 

        <div className={`d-flex flex-column ${window.innerWidth <= 900 ?"pt-0":"pt-3"} text-white align-items-center `} style={{height:window.innerWidth <= 900 ?"1300px":"1200px", margin:window.innerWidth <= 900 ?"0px 20px 20px 10px":"0px 300px 50px 300px",border:"2px solid red"}}>
            <p className={`${window.innerWidth <= 900 ?" fs-5 ps-2 fw-semibold ":"fs-3 fw-normal "}`} style={{border:"2px solid red"}}>BOOK YOUR VIETNAMESE TEA CEREMONY WITH US!</p>
            <p className={`${window.innerWidth <= 900 ?"fst-italic ps-2":"fs-5 fw-normal"} `} style={{margin:window.innerWidth <= 900 ?"10px 10px 0px 10px":"10px 120px 0px 120px",border:"2px solid red"}}>At Đông Hưng Viên Bakery, we specialize in bringing to life the sweetness of  your engagement (Đám Hỏi) and wedding day with our bespoke cakes and personalized service.</p>

          <div className="d-flex flex-column mt-4"  style={{height:window.innerWidth <= 900 ?"1100px":"1100px",width:"100%",border:"2px solid red"}}>

            <div className={`d-flex ${window.innerWidth <= 900 ?"flex-column ":"flex-row"} mt-2`} style={{height:window.innerWidth <= 900 ?"180px":"80px",border:"2px solid red"}}>
               <div className={`d-flex flex-column  ps-1 ${window.innerWidth <= 900 ?"pb-2 pt-2":"pt-2"} `} style={{width:window.innerWidth <= 900 ?"98%":"48%",height:window.innerWidth <= 900 ?"90px":"0px"}}>
                 <label  htmlFor="fname" className={`${window.innerWidth <= 900 ?" fs-6 fst-italic ":"fs-5 fw-normal"} mx-1 `} style={{height:window.innerWidth <= 900 ?"30px":"25px"}}>First name:</label><br></br>
                 <input style={{height:"40px"}} className="rounded-3 pb-1" type="text" id="fname" name="fname" placeholder='Enter here'/><br></br>
               </div>
               <div className={`d-flex flex-column ${window.innerWidth <= 900 ?"ps-1 pb-2":"ps-4"} pt-2`} style={{width:window.innerWidth <= 900 ?"98%":"48%",height:window.innerWidth <= 900 ?"90px":"0px"}}>
                 <label  htmlFor="fname" className={`${window.innerWidth <= 900 ?" fs-6 fst-italic ":"fs-5 fw-normal"} mx-1 `} style={{height:window.innerWidth <= 900 ?"30px":"25px"}}>Last name:</label><br></br>
                 <input style={{height:"40px"}} className="rounded-3 pb-1" type="text" id="fname" name="fname" placeholder='Enter here'/><br></br>
               </div>
             </div>

             <div className={`${window.innerWidth <= 900 ?"mt-0":"mt-2"} d-flex flex-column  pb-2 mx-1`} style={{width:"98%",height:"90px"}} >
                 <label  htmlFor="fname" className={`${window.innerWidth <= 900 ?" fs-6 fst-italic ":"fs-5 fw-normal"} mx-1 `} style={{height:window.innerWidth <= 900 ?"30px":"25px"}}>Email:</label><br></br>
                 <input style={{height:"40px"}} className="rounded-3 pb-1" type="text" id="fname" name="fname" placeholder='Enter here'/><br></br>
             </div>

             <div className={`${window.innerWidth <= 900 ?"mt-0":"mt-2"} d-flex flex-column  pb-2 mx-1`} style={{width:"98%",height:"90px"}}>
                 <label  htmlFor="fname" className={`${window.innerWidth <= 900 ?" fs-6 fst-italic ":"fs-5 fw-normal"} mx-1 `} style={{height:window.innerWidth <= 900 ?"30px":"25px"}}>Phone:</label><br></br>
                 <input style={{height:"40px"}} className="rounded-3 pb-1" type="text" id="fname" name="fname"/><br></br>
             </div>

             <div className={`${window.innerWidth <= 900 ?"mt-0":"mt-2"} d-flex flex-column  pb-2 mx-1`} style={{width:"98%",height:"90px"}}>
                 <label  htmlFor="fname" className={`${window.innerWidth <= 900 ?" fs-6 fst-italic ":"fs-5 fw-normal"} mx-1 `} style={{height:window.innerWidth <= 900 ?"30px":"25px"}}>Date Of Event:</label><br></br>
                 <input style={{height:"40px"}} className="rounded-3 pb-1" type="text" id="fname" name="fname" placeholder='mm/dd/yyyy'/><br></br>
             </div>

             <div className={`${window.innerWidth <= 900 ?"mt-0":"mt-2"} d-flex flex-column  pb-2 mx-1`} style={{width:"98%",height:"90px"}}>
                 <label  htmlFor="fname" className={`${window.innerWidth <= 900 ?" fs-6 fst-italic ":"fs-5 fw-normal"} mx-1 `} style={{height:window.innerWidth <= 900 ?"30px":"25px"}}>Time Of Event:</label><br></br>
                 <input style={{height:"40px"}} className="rounded-3 pb-1" type="text" id="fname" name="fname" placeholder='--:-- --'/><br></br>
             </div>

             <div className={`${window.innerWidth <= 900 ?"mt-0":"mt-2"} d-flex flex-column  pb-2 mx-1`} style={{width:"98%",height:"90px"}}>
                 <label  htmlFor="fname" className={`${window.innerWidth <= 900 ?" fs-6 fst-italic ":"fs-5 fw-normal"} mx-1 `} style={{height:window.innerWidth <= 900 ?"30px":"25px"}}>Number Of Guests:</label><br></br>
                 <input style={{height:"40px"}} className="rounded-3 pb-1" type="text" id="fname" name="fname" placeholder='Enter here'/><br></br>
             </div>
  {/* --------------------------------------------------------section no 3--------------------------------------------------------- */}
            <div className="ms-2 mt-1" style={{height:window.innerWidth <= 900 ?"50px":"30px"}}>
              <p className={`fs-6 ${window.innerWidth <= 900 ?"fst-italic fw-medium":" fw-semibold"} text-white `}>SELECT WHICH ITEMS YOU’D LIKE TO ORDER FOR YOUR EVENT: *</p>
            </div>
            <div className="d-flex flex-row pt-2" style={{width:"100%",border:"2px solid red"}}>
                <div className="d-flex flex-column "style={{width:"50%",border:"2px solid red"}}>
                  <div className={`${window.innerWidth <= 900 ? "pt-1":"pt-0"} d-flex px-2`}> 
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"  style={{transform: "scale(1.5)",}}/>
                    <label htmlFor="vehicle1"className={`${window.innerWidth <= 900 ?"fs-6 ":"fs-5"} ms-2 fw-semibold`}>BÁNH CỐM</label><br></br>
                   </div>

                    <div className={`${window.innerWidth <= 900 ? "pt-1":"pt-0"} d-flex px-2`}>
                     <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"  style={{transform: "scale(1.5)",}}/>
                     <label htmlFor="vehicle1"className={`${window.innerWidth <= 900 ?"fs-6 ":"fs-5"} ms-2 fw-semibold`}>XÔI GẤC</label><br></br>
                   </div>

                    <div className={`${window.innerWidth <= 900 ? "pt-1":"pt-0"} d-flex px-2`}>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"  style={{transform: "scale(1.5)",}}/>
                    <label htmlFor="vehicle1"className={`${window.innerWidth <= 900 ?"fs-6 ":"fs-5"} ms-2 fw-semibold`}>TRẦU CAU (ARTIFICIAL)</label><br></br>
                   </div>

                    <div className={`${window.innerWidth <= 900 ? "pt-1":"pt-0"} d-flex px-2`}>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{transform: "scale(1.5)",}}/>
                    <label htmlFor="vehicle1"className={`${window.innerWidth <= 900 ?"fs-6 ":"fs-5"} ms-2 fw-semibold`}>TEA (JASMINE OR OOLONG)</label><br></br>
                   </div>
                 </div>  

                 <div className="d-flex flex-column "style={{width:"50%",border:"2px solid red"}}>
                  <div className={`${window.innerWidth <= 900 ? "pt-1":"pt-0"} d-flex px-2`}> 
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"  style={{transform: "scale(1.5)",}}/>
                    <label htmlFor="vehicle1"className={`${window.innerWidth <= 900 ?"fs-6 ":"fs-5"} ms-2 fw-semibold`}>BÁNH XU-XÊ</label><br></br>
                   </div>

                    <div className={`${window.innerWidth <= 900 ? "pt-1":"pt-0"} d-flex px-2`}>
                     <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"  style={{transform: "scale(1.5)",}}/>
                     <label htmlFor="vehicle1"className={`${window.innerWidth <= 900 ?"fs-6 ":"fs-5"} ms-2 fw-semibold`}>XÔI TRÁI TIM</label><br></br>
                   </div>

                    <div className={`${window.innerWidth <= 900 ? "pt-1":"pt-0"} d-flex px-2`}>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"  style={{transform: "scale(1.5)",}}/>
                    <label htmlFor="vehicle1"className={`${window.innerWidth <= 900 ?"fs-6 ":"fs-5"} ms-2 fw-semibold`}>KHAY RƯỢU</label><br></br>
                   </div>

                    <div className={`${window.innerWidth <= 900 ? "pt-1":"pt-0"} d-flex px-2`}>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{transform: "scale(1.5)",}}/>
                    <label htmlFor="vehicle1"className={`${window.innerWidth <= 900 ?"fs-6 ":"fs-5"} ms-2 fw-semibold`}>MÂM QUẢ</label><br></br>
                   </div>
                 </div>     
            </div>
            <div className="d-flex flex-column pt-2 mx-1" style={{width:"98%",height:"200px",border:"3px solid red"}}>
                 <label  htmlFor="fname" className={`${window.innerWidth <= 900 ?"pt-1 pb-2 fst-italic fw-normal":"pt-1 fw-semibold"} ms-1 fs-6 `}>DESCRIBE YOUR EVENT (Are there any additional details you would like us to be aware of?)*</label><br></br>
                 <textarea className="form-control rounded-3" id="exampleFormControlTextarea1" rows="5"></textarea><br></br>
             </div>
             <div className="d-flex flex-column mx-1 pt-2" style={{width:"98%",height:"100px",border:"2px solid red"}}>
                 <label  htmlFor="fname" className='ms-1 fs-6 fw-semibold pb-1'>How Did You Hear About Us? *</label><br></br>
                 <textarea className="form-control rounded-3" id="exampleFormControlTextarea1" rows="1"></textarea><br></br>
             </div>
             <div className={`${window.innerWidth <= 900 ?"pt-1":"pt-3"}`} style={{height:window.innerWidth <= 900 ?"60px":"80px",border:"2px solid red"}}>
              <button className={`${window.innerWidth <= 900 ?"fs-6":"fs-5"} btn btn-primary rounded-5  fw-normal `} style={{height:"50px",width:window.innerWidth <= 900 ?"100px":"120px"}}>SUBMIT</button>
             </div>
            </div>
         </div>
      </div>
           {/* ---------------------------------------------------------------------------------section no 5------------------------------------------------------------------------------------ */}
      <div className={`d-flex ${window.innerWidth <=700 ? "flex-column":" flex-row"}  bg-dark w-100`} style={{height: window.innerWidth <= 700 ?"620px":window.innerWidth ? "220px":"180px"}}>

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

        <div className="d-flex flex-column" style={{height:"160px",width:"200px",padding:"20px 5px 10px 5px"}}>
          <p className="mx-3 fs-6 fw-semibold text-white">FOLLOW</p>
            <div className="d-flex justify-content-evenly mx-0" style={{width:"160px"}}>
              <img className="ms-2 rounded-4" src="tiktok-36.png" alt="icon2" />
              <img className="ms-2 rounded-4" src="insta-36.png" alt="icon3" />
              <img className="ms-2 rounded-4" src="face-36.png" alt="icon4" />
            </div>
        </div>

        <div  style={{height:"160px",width:"200px",padding:"20px 5px 10px 10px"}}>
          <p  className="mx-1 fs-6 fw-semibold text-white">ABOUT US</p>
        </div>
        <div style={{height:"160px",width:"200px",padding:"20px 5px 10px 10px"}}>
           <p  className="mx-1 fs-6 fw-semibold text-white">CONTACT US</p>
        </div>
       </div>
       {/* ------------------------------------------------------------------------section no 6------------------------------------------------------------------------------------------ */}
      <div className="d-flex flex-wrap w-100 bg-black align-items-center"  style={{height:"100px"}}>
         <p className="fs-5 text-white mt-3 mx-5">© 2025 Đông Hưng Viên Bakery – All Rights Reserved.</p>
      </div>
    </>
  )
}
