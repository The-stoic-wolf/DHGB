import React from 'react'

export default function protein() {
  return (
    <>
    <h1>HELLO MUHAMMAD ABDULLAH</h1>
    <div className={`d-flex ${window.innerWidth <= 900 ?"flex-column":"flex-row flex-wrap"} bg-warning w-100 bg-black h-100`} style={{height:window.innerWidth <= 900 ? "1600px":"1100px",objectFit:"cover"}}>
        <div  style={{height:window.innerWidth <= 700 ?"450px":window.innerWidth > 700 && window.innerWidth <= 900 ?"500px":"800px",width:window.innerWidth <= 700 ?"100%":window.innerWidth > 700 && window.innerWidth <= 900 ?"80%":"40%", margin :window.innerWidth <= 700 ?"100px 0px 0px 0px":window.innerWidth > 700 && window.innerWidth  <=900 ?"100px 0px 0px 50px":"150px 0px 150px 0px",padding:window.innerWidth <= 700 ?"15% 15% 10% 15%":window.innerWidth > 700 && window.innerWidth <= 900 ?"20% 5% 10% 5%":"0px 0px 0px 100px"}}>
          <div className="d-flex " style={{margin:window.innerWidth <= 900 ?"0px":"40px 0px 0px 0px",padding:window.innerWidth <= 900 ?"0px":"0px 0px 0px 40px",height:window.innerWidth <= 900 ?"300px":"500px"}}>
               <img className="h-100 w-100 img-fluid" style={{objectFit:"cover",width:"100%"}} src="pro-to-go.png" alt="" />
          </div>
        </div>

        <div className="d-flex flex-column"  style={{height:window.innerWidth <= 700 ?"900px":window.innerWidth > 700 && window.innerWidth <= 900 ?"750px":"800px",width:window.innerWidth <= 900 ?"100%":"60%",margin:window.innerWidth <= 900 ?"10px 5px 10px 5px":"150px 0px 150px 0px",padding:window.innerWidth <= 900 ?"0px":'0px 0px 0px 80px'}}>
            <div className="d-flex flex-column text-white" style={{height:window.innerWidth <= 576 ?"300px":window.innerWidth > 576 && window.innerWidth  <=900 ?"230px":"400px"}}>
                <p className={` text-white ${window.innerWidth <= 900 ?"ps-3 fw-bold fs-5 ":"fw-bold fs-3"} `} >VEGAN PROTEIN TO-GO</p>
                <p className={` ${window.innerWidth <= 900 ?"fw-semibold fs-6 ps-3 ":"fw-semibold fs-5 ps-2 mt-1"}  text-white`}>Customize your meals at home with our vegan ingredients.</p>
                <p className="d-none d-lg-block">___________________________________________________________________________________________</p>
                 <p className={`${window.innerWidth <= 900 ?"px-3":"d-none"}`}>_______________________________________________</p>
                <p className={`${window.innerWidth <= 900 ?"pt-1 fs-6 px-3 fst-italic ":"mt-2 fs-5 "} fw-normal  text-white`}>Your favorite vegan proteins are now available in convenient To-Go boxes for purchase, allowing you to create any meal you desire in the comfort of your home. Fully   prepared & ready to be added to your favorite recipes. Options include:</p>
            </div>
            <div className={`${window.innerWidth <= 900 ?"pt-1 ps-3":"pt-3 ms-2"} d-flex flex-column`} style={{height:window.innerWidth <= 400 ?"100px":window.innerWidth > 400 && window.innerWidth  <= 900 ?"100px":"130px"}}>
              <h4 className=" text-white fw-semibold">Vegan Grilled Pork or Chicken:</h4>
               <ul   className={`${window.innerWidth <= 900 ?"mt-1":"mt-3"} text-white fs-6 fw-normal`}>
                <li>8oz – $12</li>
                <li>1lb – $24</li>
               </ul>
            </div>

             <div className={`${window.innerWidth <= 900 ?"pt-1 ps-3":"pt-3 ms-2"} d-flex flex-column`} style={{height:window.innerWidth <= 900 ?"100px":"130px"}}>
              <h4 className=" text-white fw-semibold">Vegan Fried Chicken:</h4>
               <ul  className={`${window.innerWidth <= 900 ?"mt-1":"mt-3"} text-white fs-6 fw-normal`}>
                <li>8oz – $12</li>
                <li>1lb – $24</li>
               </ul>
            </div>

             <div className={`${window.innerWidth <= 900 ?"pt-1 ps-3":"pt-3 ms-2"} d-flex flex-column`} style={{height:window.innerWidth <= 900 ?"100px":"130px"}}>
              <h4 className=" text-white fw-semibold">Vegan Lemongrass Beef:</h4>
               <ul  className={`${window.innerWidth <= 900 ?"mt-1":"mt-3"} text-white fs-6 fw-normal`}>
                <li>8oz – $15</li>
                <li>1lb – $30</li>
               </ul>
            </div> 

            <div className={`${window.innerWidth <= 900 ?"pt-1 ps-3":"pt-3 ms-2"} d-flex flex-column`} style={{height:window.innerWidth <= 900 ?"100px":"130px"}}>
              <h4 className=" text-white fw-semibold">Vegan Meatloaf (Roll):</h4>
               <ul  className={`${window.innerWidth <= 900 ?"mt-1":"mt-3"} text-white fs-6 fw-normal`}>
                <li>1lb – $12</li>
                <li>1lb – $23</li>
               </ul>
            </div>
            <div className={`${window.innerWidth <= 900 ?"fw-medium px-3 fst-italic ":" fw-bold ps-2"} w-100 text-white `} style={{height:window.innerWidth <= 900 ?"20px":"30px"}}>
              <p >Perfect for sandwiches, salads, bowls or other creative dishes.</p>
            </div>
            <p className="text-white mt-2 d-none d-lg-block">___________________________________________________________________________________________</p>
             <p className={`${window.innerWidth <= 900 ?"px-3":"d-none"}`}>_______________________________________________</p>
             <button type="button" className={`${window.innerWidth <= 700 ?"px-3 mt-2 fw-semibold fs-6 btn btn-primary ":window.innerWidth > 700 && window.innerWidth <= 900 ?"px-1 mt-0 fw-semibold fs-6 btn btn-primary ":"mt-3 fw-bold fs-5 btn btn-primary "} `}  style={{height:window.innerWidth <= 900 ?"50px":"70px" , width:window.innerWidth <= 900 ?"250px":"300px",borderRadius:"70px"}}>View All Vegan Bánh Mì</button>
        </div>
    </div>
    {/* ---------------------------------------------------------------------------------------------------------section no 2-------------------------------------------------------------------------------------------- */}
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
