import React from 'react'

export default function Regular() {
  return (
    <>
      <div className=" d-flex align-items-center justify-content-center bg-black " style={{height: "250px"}}>
        <p className=" fw-bold fs-1 text-white mb-2">REGULAR MENU</p>
      </div>
      {/* this is next div */}
      <div className={`d-flex bg-black align-items-center ${window.innerWidth <= 576 ? "flex-column" : "flex-row" } w-100 justify-content-evenly`} style={{height:window.innerWidth <= 576 ?"600px":'200px'}}>
        <div className="d-flex flex-column justify-content-center align-items-center  " style={{height:'130px',width:'180px'}}>
           <img className=" mt-3" src="bur.png" alt="" style={{height:"100px",width:"100px"}} />
           <p className="text-white fs-6 fw-light" >BÁNH MÌ</p>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center " style={{height:'130px',width:'180px'}}>
             <img className="mt-3" src="bread1.png" alt="" style={{height:"100px",width:"100px"}}  />
            <p className="text-white fs-6 fw-light ">PASTRIES</p>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center " style={{height:'130px',width:'180px'}}>
             <img className="mt-3" src="pastry.png" alt="" style={{height:"100px",width:"100px"}}  />
            <p className="text-white  fs-6 fw-light">VIETNAMESE PASTRIES</p>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center " style={{height:'130px',width:'180px'}}>
             <img className="mt-3" src="coffee.png" alt="" style={{height:"100px",width:"100px"}}  />
            <p className="text-white  fs-6 fw-light">DRINKS</p>
        </div>
      </div>
  {/* -------------------------------------------------------------section no 1 ----------------------------------------------------------------- */}    
      <div className="d-flex flex-row w-100 bg-black" style={{height :window.innerWidth <= 576 ?"2700px":window.innerWidth >576 && window.innerWidth <=992 ?" 1700px":"1100px"}}>
          <div className=" bg-black" style={{height:window.innerWidth <= 576 ?"2700px":window.innerWidth >576 && window.innerWidth <=992 ?" 1700px":"1100px",width:window.innerWidth <= 992 ?"40%":"30%",padding:window.innerWidth <= 576 ?"80px 0px 30px 20px":window.innerWidth >576 && window.innerWidth <= 992 ?"80px 20px 80px 20px":"80px 0px 80px 80px"}}>
             <p className="fw-bold fs-2 text-white" style={{marginLeft:window.innerWidth <= 576 ?"20px":window.innerWidth > 576 && window.innerWidth <=992 ?" 40px":"110px"}}>BÁNH MÌ</p>
          </div>
          <div className={`d-flex ${window.innerWidth <= 576 ? "flex-column":window.innerWidth > 576 && window.innerWidth  <=992 ?" flex-wrap": "flex-wrap"} justify-contant-evenly bg-black `} style={{height:window.innerWidth <= 576 ?"2700px":window.innerWidth >576 && window.innerWidth  <=992 ?" 1700px":"1100px",width:window.innerWidth <= 992 ?"60%":"70%",padding:window.innerWidth <= 992 ?"20px 20px 0px 0px":"80px 80px 80px 0px"}}>

             <div className="d-flex  flex-column" style={{height:"300px",width:window.innerWidth <= 576 ?"95%":window.innerWidth > 576 && window.innerWidth  <=992 ?" 45%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":window.innerWidth >576 && window.innerWidth  <=992 ?"10px 0px 10px 10px":"10px"}}>
              <img className="h-100 w-100" src="sandwitch.jpeg" alt="" style={{height:"220px"}} />
               <div className="d-flex justify-content-center align-items-center flex-column " style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                <p className="text-white mb-0 mt-2">COLD CUT HAM</p>
                <p className="text-warning mt-0 mx-0">Thịt Nguội</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"300px",width:window.innerWidth <= 576 ?"95%":window.innerWidth > 576 && window.innerWidth  <=992 ?" 45%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":window.innerWidth >576 && window.innerWidth  <=992 ?"10px 0px 10px 10px":"10px"}}>
               <img className="h-100 w-100" src="burger2.jpeg" alt="" style={{height:"220px"}} />
                <div className="d-flex justify-content-center align-items-center flex-column " style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white mb-0 mt-2">SHREDDED CHICKEN</p>
                 <p className="text-warning mt-0">Gà Jambon</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"300px",width:window.innerWidth <= 576 ?"95%":window.innerWidth >576 && window.innerWidth  <=992 ?" 45%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":window.innerWidth >576 && window.innerWidth  <=992 ?"10px 0px 10px 10px":"10px"}}>
               <img className="h-100 w-100" src="sandwitch.jpeg" alt="" style={{height:"220px"}} />
                <div className="d-flex justify-content-center align-items-center flex-column " style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}}>
                 <p className="text-white mb-0 mt-2">PAT PORK MEAT LOAF</p>
                 <p className="text-warning mt-0">Pâté Chả Luạ</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"300px",width:window.innerWidth <= 576 ?"95%":window.innerWidth > 576 && window.innerWidth  <=992 ?" 45%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":window.innerWidth >576 && window.innerWidth  <=992 ?"10px 0px 10px 10px":"10px"}}>
               <img className="h-100 w-100" src="burger2.jpeg" alt="" style={{height:"220px"}} />
                <div className="d-flex justify-content-center align-items-center flex-column"style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white mb-0 mt-2">GRILLED PORK</p>8
                 <p className="text-warning mt-0">Thịt Nguội</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"300px",width:window.innerWidth <= 576 ?"95%":window.innerWidth > 576 && window.innerWidth  <=992 ?" 45%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":window.innerWidth >576 && window.innerWidth  <=992 ?"10px 0px 10px 10px":"10px"}}>
               <img className="h-100 w-100" src="sandwitch.jpeg" alt="" style={{height:"220px"}} />
                <div className="d-flex justify-content-center align-items-center flex-column"style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white mb-0 mt-2">GRILLED CHICKEN</p>
                 <p className="text-warning mt-0">Gà Nướng</p>
               </div>
             </div> 

             <div className="d-flex flex-column" style={{height:"300px",width:window.innerWidth <= 576 ?"95%":window.innerWidth > 576 && window.innerWidth  <=992 ?" 45%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":window.innerWidth >576 && window.innerWidth  <=992 ?"10px 0px 10px 10px":"10px"}}>
               <img className="h-100 w-100" src="sandwitch7.jpeg" alt="" style={{height:"220px"}} />
                <div className="d-flex justify-content-center align-items-center flex-column "style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white mb-0 mt-2">SPECIAL COMBINATION</p>
                 <p className="text-warning mt-0">Đặc Biệt</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"300px",width:window.innerWidth <= 576 ?"95%":window.innerWidth > 576 && window.innerWidth  <=992 ?" 45%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":window.innerWidth >576 && window.innerWidth  <=992 ?"10px 0px 10px 10px":"10px"}}>
               <img className="h-100 w-100" src="sandwitch6.jpeg" alt="" style={{height:"220px"}} />
                <div className="d-flex justify-content-center align-items-center flex-column "style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white mb-0 mt-2">FRIED EGG</p>
                 <p className="text-warning mt-0">Trứng Ốp La</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"300px",width:window.innerWidth <= 576 ?"95%":window.innerWidth  > 576 && window.innerWidth  <=992 ?" 45%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":window.innerWidth >576 && window.innerWidth  <=992 ?"10px 0px 10px 10px":"10px"}}>
               <img className="h-100 w-100" src="sandwitch.jpeg" alt="" style={{height:"220px"}} />
                <div className="d-flex justify-content-center align-items-center flex-column" style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white mb-0 mt-2">GRILLED BEEF</p>
                 <p className="text-warning mt-0">Bò Nướng</p>
               </div>
             </div>
          </div>
      </div>
      <div className="bg-black h-1" style={{width:'100%'}}>
        <p className="text-white  d-none d-lg-block" style={{margin:"0px 0px 0px 250px",padding:"0px 250px 0px 0px"}}>_____________________________________________________________________________________________________________________________________________________________________</p>
        <p className={`${window.innerWidth <= 992 ? "text-white w-98":"d-none"}`} style={{margin:"0px 0px 0px 100px",padding:"0px 0px 0px 0px"}}>_____________________________________________________</p>
      </div>
      {/* -----------------------------------------------------section no 2----------------------------------------------------------------------- */}
        <div className="d-flex flex-row  w-100 bg-black" style={{height:window.innerWidth <= 576 ?"1700px":window.innerWidth >576 && window.innerWidth <=992 ?" 1100px":"800px"}}>
          <div className=" bg-black" style={{height:window.innerWidth <= 576 ?"1700px":window.innerWidth >576 && window.innerWidth <=992 ?" 1100px":"800px",width:window.innerWidth <= 992 ?"40%":"30%",padding:window.innerWidth <= 576 ?"80px 0px 30px 20px":window.innerWidth >576 && window.innerWidth <= 992 ?"80px 20px 80px 20px":"80px 0px 80px 80px"}}>
             <p className="fw-bold fs-2 text-white" style={{marginLeft:window.innerWidth <= 700 ?"20px":window.innerWidth > 576 && window.innerWidth <=992 ?" 40px":"110px"}}>PASTRIES</p>
          </div>
          <div className={`d-flex ${window.innerWidth <= 576 ? "flex-column":window.innerWidth > 576 && window.innerWidth  <=992 ?" flex-wrap": "flex-wrap"} justify-contant-evenly bg-black `} style={{height:window.innerWidth <= 576 ?"1700px":window.innerWidth >576 && window.innerWidth <=992 ?" 1100px":"800px",width:window.innerWidth <= 992 ?"60%":"70%",padding:window.innerWidth <= 992 ?"20px 20px 0px 0px":"80px 80px 80px 0px"}}>
             <div className="d-flex  flex-column" style={{height:"300px",width:window.innerWidth <= 576 ?"95%":window.innerWidth > 576 && window.innerWidth  <=992 ?" 45%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":window.innerWidth >576 && window.innerWidth  <=992 ?"10px 0px 10px 10px":"10px"}}>
              <img className="h-100 w-100" src="hotb4.jpeg" alt="" style={{height:"220px"}} />
               <div className="d-flex justify-content-center align-items-center flex-column " style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}}  >
                <p className="text-white mt-2 fw-semibold">HAM & CHEESE HOT BAKE</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"300px",width:window.innerWidth <= 576 ?"95%":window.innerWidth > 576 && window.innerWidth  <=992 ?" 45%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":window.innerWidth >576 && window.innerWidth  <=992 ?"10px 0px 10px 10px":"10px"}}>
               <img className="h-100 w-100" src="hotb2.jpeg" alt="" style={{height:"220px",objectFit:"cover"}} />
                <div className="d-flex justify-content-center align-items-center flex-column "style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white mt-2 fw-semibold">CHICKEN HOT BAKE</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"300px",width:window.innerWidth <= 576 ?"95%":window.innerWidth > 576 && window.innerWidth  <=992 ?" 45%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":window.innerWidth >576 && window.innerWidth  <=992 ?"10px 0px 10px 10px":"10px"}}>
               <img className="h-100 w-100" src="croi1.jpeg" alt="" style={{height:"220px",objectFit:"cover"}} />
                <div className="d-flex justify-content-center align-items-center flex-column"style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white mt-2 fw-semibold">CROISSANT</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"300px",width:window.innerWidth <= 576 ?"95%":window.innerWidth > 576 && window.innerWidth  <=992 ?" 45%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":window.innerWidth >576 && window.innerWidth  <=992 ?"10px 0px 10px 10px":"10px"}}>
               <img className="h-100 w-100" src="hotb1.jpeg" alt="" style={{height:"220px",objectFit:"cover"}} />
                <div className="d-flex justify-content-center align-items-center flex-column"style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white mt-2 fw-semibold">HAM & CHEESE CROISSANT</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"300px",width:window.innerWidth <= 576 ?"95%":window.innerWidth > 576 && window.innerWidth  <=992 ?" 45%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":window.innerWidth >576 && window.innerWidth  <=992 ?"10px 0px 10px 10px":"10px"}}>
               <img className="h-100 w-100" src="hotb3.jpeg" alt="" style={{height:"220px",objectFit:"cover"}} />
                <div className="d-flex justify-content-center align-items-center flex-column "style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white mt-2 fw-semibold">COCONUT CROISSANT</p>
               </div>
             </div> 
          </div>
      </div>
      <div className="bg-black h-1"style={{width:"100%"}}>
         <p className=" text-white  d-none d-lg-block"style={{margin:"0px 0px 0px 250px",padding:"0px 250px 0px 0px"}}>_______________________________________________________________________________________________________________________________________________________________________</p>
          <p className={`${window.innerWidth <= 992 ? "text-white w-98":"d-none"}`} style={{margin:"0px 0px 0px 100px",padding:"0px 0px 0px 0px"}}>___________________________________________________</p>
      </div>
      {/* -----------------------------------------------------------------------------section no 3---------------------------------------------------------------------------------------- */}
       <div className="d-flex flex-row  w-100 bg-black" style={{height:window.innerWidth <= 576 ?"1200px":window.innerWidth >576 && window.innerWidth <=992 ?" 800px":"540px"}}>
          <div className=" bg-black" style={{height:window.innerWidth <= 576 ?"1200px":window.innerWidth >576 && window.innerWidth <=992 ?" 800px":"540px",width:window.innerWidth <= 992 ?"40%":"30%",padding:window.innerWidth <= 576 ?"80px 0px 30px 20px":window.innerWidth >576 && window.innerWidth <= 992 ?"80px 20px 80px 20px":"80px 0px 80px 80px"}}>
             <p className="fw-bold fs-2 text-white" style={{marginLeft:window.innerWidth <= 576 ?"20px":window.innerWidth > 576 && window.innerWidth <=992 ?" 40px":"110px"}}>VIETNAMESE PASTRIESE</p>
          </div>
          <div className={`d-flex  ${window.innerWidth <= 576 ? "flex-column":window.innerWidth > 576 && window.innerWidth  <=992 ?" flex-wrap": "flex-wrap"} justify-contant-evenly bg-black `} style={{height:window.innerWidth <= 576 ?"1200px":window.innerWidth >576 && window.innerWidth <=992 ?" 800px":"540px",width:window.innerWidth <= 992 ?"60%":"70%",padding:window.innerWidth <= 994 ?"20px 20px 0px 0px":"80px 80px 80px 0px"}}>
             <div className="d-flex  flex-column" style={{height:"350px",width:window.innerWidth <= 576 ?"95%":window.innerWidth > 576 && window.innerWidth  <=992 ?" 45%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":window.innerWidth >576 && window.innerWidth  <=992 ?"10px 0px 10px 10px":"10px"}}>
              <img className="h-100 w-100" src="sec3-1.jpeg" alt="" style={{height:"250px",objectFit:"cover"}} />
               <div className="d-flex justify-content-center align-items-center flex-column " style={{height:"100px",backgroundColor:"rgb(40, 51, 65)"}} >
                <p className="text-white mt-3 fw-semibold">VIETNAMESES STEAMED BUN</p>
                <p className="text-warning  mx-3">PORK</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"350px",width:window.innerWidth <= 576 ?"95%":window.innerWidth > 576 && window.innerWidth  <=992 ?" 45%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":window.innerWidth >576 && window.innerWidth  <=992 ?"10px 0px 10px 10px":"10px"}}>
               <img className="h-100 w-100" src="buns2.jpeg" alt="" style={{height:"240px",objectFit:"cover"}} />
                <div className="d-flex justify-content-center align-items-center flex-column " style={{height:"100px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white mt-3 fw-semibold">VIETNAMESES PUFF PASTRY</p>
                 <p className="text-warning ">PORK,CHICKEN</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"350px",width:window.innerWidth <= 576 ?"95%":window.innerWidth > 576 && window.innerWidth  <=992 ?" 45%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":window.innerWidth >576 && window.innerWidth  <=992 ?"10px 0px 10px 10px":"10px"}}>
               <img className="h-100 w-100" src="sec3-3.jpeg" alt="" style={{height:"250px",objectFit:"cover"}} />
                <div className="d-flex justify-content-center align-items-center flex-column " style={{height:window.innerwidth <= 576 ?"130px":"100px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white mx-3 mt-3  mb-0 fw-semibold">SOFT MINI BUNS</p>
                 <p className="text-warning mx-2 fw-light">INCLUDES EGG.COCONUT TARO,MUNG BEAN,DURIAN</p>
               </div>
             </div>
          </div> 
       </div>
        <div className="bg-black h-1" style={{width:"100%"}}>
         <p className="text-white mb-0  d-none d-lg-block" style={{padding:"0px 0px 0px 250px"}}>______________________________________________________________________________________________________________________________________________________________________</p>
         <p className={`${window.innerWidth <= 992 ? "text-white w-98":"d-none"}`} style={{margin:"0px 0px 0px 100px",padding:"0px 0px 0px 0px"}}>___________________________________________________</p>
      </div>
    {/* ------------------------------------------------------------------------------section no 4----------------------------------------------------------------------------------------- */}
      <div className="d-flex flex-row  w-100 bg-black" style={{height:window.innerWidth <= 576 ?"500px":window.innerWidth >576 && window.innerWidth <=992 ?" 500px":"540px"}}>
          <div className=" bg-black" style={{height:window.innerWidth <= 576 ?"500px":window.innerWidth >576 && window.innerWidth <=992 ?" 500px":"540px",width:window.innerWidth <= 992 ?"40%":"30%",padding:window.innerWidth <= 576 ?"80px 0px 30px 20px":window.innerWidth >576 && window.innerWidth <= 992 ?"80px 20px 80px 20px":"80px 0px 80px 80px"}}>
             <p className="fw-bold fs-2 text-white" style={{marginLeft:window.innerWidth <= 576 ?"20px":window.innerWidth > 576 && window.innerWidth <=992 ?" 40px":"110px"}}>DRINKS</p>
          </div>
          <div className={`d-flex justify-contant-evenly bg-black `} style={{height:window.innerWidth <= 576 ?"500px":window.innerWidth >576 && window.innerWidth <=992 ?" 500px":"540px",width:window.innerWidth <= 994 ?"60%":"70%",padding:window.innerWidth <= 994 ?"20px 20px 0px 0px":"80px 80px 80px 0px"}}>
             <div className="d-flex  flex-column" style={{height:"350px",width:window.innerWidth <= 576 ?"95%":window.innerWidth > 576 && window.innerWidth  <=992 ?" 45%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":window.innerWidth >576 && window.innerWidth  <=992 ?"10px 0px 10px 10px":"10px"}}>
              <img className="h-100 w-100" src="coffee1.jpeg" alt="" style={{height:"240px",objectFit:"cover"}} />
               <div className="d-flex justify-content-center align-items-center flex-column "style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                <p className="text-white mt-3 fw-semibold">VIETNAMESES COFFEE</p>
                <p className="text-warning mx-2">CÀ PHÊ SỮA ĐÁ</p>
               </div>
             </div>
           </div>
        </div>
        {/* ---------------------------------------------------------------------------------section no 5------------------------------------------------------------------------------------ */}
       <div className={`d-flex ${window.innerWidth <=576 ? "flex-column":" flex-row"}  bg-dark w-100`} style={{height: window.innerWidth <= 576 ?"620px":window.innerWidth ? "220px":"180px"}}>

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
