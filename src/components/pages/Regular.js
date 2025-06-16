import React from 'react'

export default function Regular() {
  return (
    <>
      <div className=" d-flex align-items-center justify-content-center bg-black " style={{height: "250px"}}>
        <p className=" fw-bold fs-1 text-white mb-2">REGULAR MENU</p>
      </div>
      {/* this is next div */}
      <div className="d-flex bg-black align-items-center flex-row w-100 justify-content-evenly" style={{height:'200px'}}>
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
      <div className="d-flex flex-row  w-100 bg-black" style={{height:'1100px'}}>
          <div className=" bg-black" style={{height:"1100px",width:"30%",padding:"80px 0px 80px 80px"}}>
             <p className="fw-bold fs-2 text-white" style={{marginLeft:"110px"}}>BÁNH MÌ</p>
          </div>
          <div className="d-flex flex-wrap justify-contant-evenly bg-black w-60" style={{height:"800px",width:"70%",padding:"80px 80px 80px 0px"}}>
             <div className="d-flex  flex-column" style={{height:"300px",width:"27%",margin:"10px"}}>
              <img className="" src="sandwitch.jpeg" alt="" style={{height:"220px"}} />
               <div className="d-flex justify-content-center align-items-center flex-column " style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                <p className="text-white mb-0 mt-2">COLD CUT HAM</p>
                <p className="text-warning mt-0 mx-0">Thịt Nguội</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"300px",width:"27%",margin:"10px"}}>
               <img className="" src="burger2.jpeg" alt="" style={{height:"220px"}} />
                <div className="d-flex justify-content-center align-items-center flex-column " style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white mb-0 mt-2">SHREDDED CHICKEN</p>
                 <p className="text-warning mt-0">Gà Jambon</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"300px",width:"27%",margin:"10px"}}>
               <img className="" src="sandwitch.jpeg" alt="" style={{height:"220px"}} />
                <div className="d-flex justify-content-center align-items-center flex-column " style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}}>
                 <p className="text-white mb-0 mt-2">PAT PORK MEAT LOAF</p>
                 <p className="text-warning mt-0">Pâté Chả Luạ</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"300px",width:"27%",margin:"10px"}}>
               <img className="" src="burger2.jpeg" alt="" style={{height:"220px"}} />
                <div className="d-flex justify-content-center align-items-center flex-column"style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white mb-0 mt-2">GRILLED PORK</p>
                 <p className="text-warning mt-0">Thịt Nguội</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"300px",width:"27%",margin:"10px"}}>
               <img className="" src="sandwitch.jpeg" alt="" style={{height:"220px"}} />
                <div className="d-flex justify-content-center align-items-center flex-column"style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white mb-0 mt-2">GRILLED CHICKEN</p>
                 <p className="text-warning mt-0">Gà Nướng</p>
               </div>
             </div> 

             <div className="d-flex flex-column" style={{height:"300px",width:"27%",margin:"10px"}}>
               <img className="" src="sandwitch.jpeg" alt="" style={{height:"220px"}} />
                <div className="d-flex justify-content-center align-items-center flex-column "style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white mb-0 mt-2">SPECIAL COMBINATION</p>
                 <p className="text-warning mt-0">Đặc Biệt</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"300px",width:"27%",margin:"10px"}}>
               <img className="" src="sandwitch.jpeg" alt="" style={{height:"220px"}} />
                <div className="d-flex justify-content-center align-items-center flex-column "style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white mb-0 mt-2">FRIED EGG</p>
                 <p className="text-warning mt-0">Trứng Ốp La</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"300px",width:"27%",margin:"10px"}}>
               <img className="" src="sandwitch.jpeg" alt="" style={{height:"220px"}} />
                <div className="d-flex justify-content-center align-items-center flex-column" style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white mb-0 mt-2">GRILLED BEEF</p>
                 <p className="text-warning mt-0">Bò Nướng</p>
               </div>
             </div>
          </div>
      </div>
      <div className="bg-black h-1" style={{width:'100%'}}>
         <p className="text-white " style={{margin:"0px 0px 0px 250px",padding:"0px 250px 0px 0px"}}>_______________________________________________________________________________________________________________________________________________________________________</p>
      </div>
      {/* -----------------------------------------------------section no 2----------------------------------------------------------------------- */}
        <div className="d-flex flex-row  w-100 bg-black" style={{height:'800px'}}>
          <div className=" bg-black" style={{height:"800px",width:"30%",padding:"80px 0px 80px 80px"}}>
             <p className="fw-bold fs-2 text-white" style={{marginLeft:"110px"}}>PASTRIES</p>
          </div>
          <div className="d-flex flex-wrap justify-contant-evenly bg-black w-60" style={{height:"800px",width:"70%",padding:"80px 80px 80px 0px"}}>
             <div className="d-flex  flex-column" style={{height:"300px",width:"27%",margin:"10px"}}>
              <img className="" src="hotb4.jpeg" alt="" style={{height:"220px",objectFit:"cover"}} />
               <div className="d-flex justify-content-center align-items-center flex-column " style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}}  >
                <p className="text-white mt-2 fw-semibold">HAM & CHEESE HOT BAKE</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"300px",width:"27%",margin:"10px"}}>
               <img className="" src="hotb2.jpeg" alt="" style={{height:"220px",objectFit:"cover"}} />
                <div className="d-flex justify-content-center align-items-center flex-column "style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white mt-2 fw-semibold">CHICKEN HOT BAKE</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"300px",width:"27%",margin:"10px"}}>
               <img className="" src="croi1.jpeg" alt="" style={{height:"220px",objectFit:"cover"}} />
                <div className="d-flex justify-content-center align-items-center flex-column"style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white mt-2 fw-semibold">CROISSANT</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"300px",width:"27%",margin:"10px"}}>
               <img className="" src="hotb1.jpeg" alt="" style={{height:"220px",objectFit:"cover"}} />
                <div className="d-flex justify-content-center align-items-center flex-column"style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white mt-2 fw-semibold">HAM & CHEESE CROISSANT</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"300px",width:"27%",margin:"10px"}}>
               <img className="" src="hotb3.jpeg" alt="" style={{height:"220px",objectFit:"cover"}} />
                <div className="d-flex justify-content-center align-items-center flex-column "style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white mt-2 fw-semibold">COCONUT CROISSANT</p>
               </div>
             </div> 
          </div>
      </div>
      <div className="bg-black h-1"style={{width:"100%"}}>
         <p className=" text-white "style={{margin:"0px 0px 0px 250px",padding:"0px 250px 0px 0px"}}>_______________________________________________________________________________________________________________________________________________________________________</p>
      </div>
      {/* -----------------------------------------------------------------------------section no 3---------------------------------------------------------------------------------------- */}
       <div className="d-flex flex-row  w-100 bg-black" style={{height:'540px'}}>
          <div className=" bg-black" style={{height:"540px",width:"30%",padding:"80px 0px 80px 80px"}}>
             <p className="fw-bold fs-2 text-white" style={{marginLeft:"110px"}}>VIETNAMEES PASTRIESE</p>
          </div>
          <div className="d-flex flex-wrap justify-contant-evenly bg-black w-60" style={{height:"540px",width:"70%",padding:"80px 80px 80px 0px"}}>
             <div className="d-flex  flex-column" style={{height:"350px",width:"27%",margin:"10px"}}>
              <img className="" src="sec3-1.jpeg" alt="" style={{height:"250px",objectFit:"cover"}} />
               <div className="d-flex justify-content-center align-items-center flex-column " style={{height:"100px",backgroundColor:"rgb(40, 51, 65)"}} >
                <p className="text-white mt-4 fw-semibold">VIETNAMESES STEAMED BUN</p>
                <p className="text-warning  mx-3">PORK</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"350px",width:"27%",margin:"10px"}}>
               <img className="" src="sec3-3.jpeg" alt="" style={{height:"250px",objectFit:"cover"}} />
                <div className="d-flex justify-content-center align-items-center flex-column " style={{height:"100px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white mt-4 fw-semibold">VIETNAMESES PUFF PASTRY</p>
                 <p className="text-warning ">PORK,CHICKEN</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"350px",width:"27%",margin:"10px"}}>
               <img className="" src="sec3-3.jpeg" alt="" style={{height:"250px",objectFit:"cover"}} />
                <div className="d-flex justify-content-center align-items-center flex-column " style={{height:"100px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white mx-3 mt-4 fw-semibold">SOFT MINI BUNS</p>
                 <p className="text-warning  mx-3 ">INCLUDES EGG.COCONUT TARO,MUNG BEAN,DURIAN</p>
               </div>
             </div>
          </div>
       </div>
        <div className="bg-black h-1" style={{width:"100%"}}>
         <p className="text-white mb-0" style={{padding:"0px 0px 0px 250px"}}>_______________________________________________________________________________________________________________________________________________________________________</p>
      </div>
    {/* ------------------------------------------------------------------------------section no 4----------------------------------------------------------------------------------------- */}
      <div className="d-flex flex-row  w-100 bg-black" style={{height:'540px'}}>
          <div className=" bg-black" style={{height:"540px",width:"30%",padding:"80px 0px 80px 80px"}}>
             <p className="fw-bold fs-2 text-white" style={{marginLeft:"110px"}}>DRINKS</p>
          </div>
          <div className="d-flex flex-wrap justify-contant-evenly bg-black w-60" style={{height:"540px",width:"70%",padding:"80px 80px 80px 0px"}}>
             <div className="d-flex  flex-column" style={{height:"347px",width:"27%",margin:"10px"}}>
              <img className="" src="coffee3.jpeg" alt="" style={{height:"260px",objectFit:"cover"}} />
               <div className="d-flex justify-content-center align-items-center flex-column "style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                <p className="text-white mt-3 fw-semibold">VIETNAMESES COFFEE</p>
                <p className="text-warning mx-2">CÀ PHÊ SỮA ĐÁ</p>
               </div>
             </div>
           </div>
        </div>
        {/* ---------------------------------------------------------------------------------section no 5------------------------------------------------------------------------------------ */}
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
