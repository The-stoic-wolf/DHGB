import React from 'react'

export default function Vegan() {
  return (
    <>
      <div className=" d-flex align-items-center justify-content-center bg-black " style={{height: "250px"}}>
        <p className={` ${window.innerWidth <= 576 ?"pt-4":"pt-1"} fw-bold fs-1 text-white mb-2`}>VEGAN MENU</p>
      </div>
      {/* this is a text */}
       <div className={`d-flex bg-dark align-items-center ${window.innerWidth <= 576? "flex-column": " flex-row"} w-100 justify-content-evenly`} style={{height:window.innerWidth <= 576 ?"650px":'200px'}}>

        <div className="d-flex flex-column justify-content-center align-items-center  " style={{height:'130px',width:window.innerWidth <= 576 ?"100%":'180px'}}>
           <img className=" mt-3" src="bur.png" alt="logo1" style={{height:"100px",width:window.innerWidth <= 576 ?"150px":"100px"}} />
           <p className="text-white fs-6 fw-light ">VEGAN BÁNH MÌ</p>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center " style={{height:'130px',width:window.innerWidth <= 576 ?"100%":'180px'}}>
             <img className=" mt-3" src="bread1.png" alt="" style={{height:"100px",width:window.innerWidth <= 576 ?"150px":"100px"}}  />
            <p className="text-white fs-6 fw-light ">VEGAN Pastries</p>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center " style={{height:'130px',width:window.innerWidth <= 576 ?"100%":'180px'}}>
            <img className="mt-3" src="pastry.png" alt="" style={{height:"100px",width:window.innerWidth <= 576 ?"150px":"100px"}}  />
            <p className="text-white fs-6 fw-light">VEGAN Vietnamese Pastries</p>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center " style={{height:'130px',width:window.innerWidth <= 576 ?"100%":'180px'}}>
             <img className="mt-3" src="coffee.png" alt="" style={{height:"100px",width:window.innerWidth <= 576 ?"150px":"100px"}}  />
            <p className="text-white  fs-6 fw-light">VEGAN Drinks</p>
        </div>
      </div>
      {/* -------------------------------------------------------------------------------section no 1------------------------------------------------------------------------------------- */}
         <div className="d-flex flex-row  w-100 bg-black" style={{height:window.innerWidth <= 576 ?"3250px":'1100px'}}>
          <div className=" bg-black" style={{height:window.innerWidth <= 576 ?"3200px":"1000px",width:window.innerWidth <= 576 ?"40%":"30%",margin:window.innerWidth <= 576 ?"10px 0px 0px 10px":"40px 0px 80px 80px"}}>
             <p className="fw-bold fs-2 text-white" style={{margin:window.innerWidth <= 576 ?"40px 0px 0px 0px":"110px"}}>VEGAN BÁNH MÌ</p>
          </div>
          <div className={` ${window.innerWidth <= 576 ?"flex-column ":"flex-wrap"} d-flex justify-contant-evenly bg-black `} style={{height:window.innerWidth <= 576 ?"3200px":"1000px",width:window.innerWidth <= 576 ?"60%":"70%",margin:window.innerWidth <= 576 ?"10px 5px 0px 10px":"40px 80px 80px 10px",padding:window.innerWidth <= 992 ?"20px 20px 0px 0px":"20px 40px 40px 0px"}}>
             
             <div className="d-flex  flex-column" style={{height:window.innerWidth <= 576 ?"330px":"300px",width:window.innerWidth <= 576 ?"95%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":"10px"}}>
              <img className="" src="sandwitch2.jpeg" alt="" style={{height:window.innerWidth <= 576 ?"240px":"220px"}} />
               <div className="d-flex justify-content-center align-items-left flex-column pt-4 pb-1"  style={{height:window.innerWidth <= 576 ?"90px":"80px",backgroundColor:"rgb(40, 51, 65)"}}  >
                <p className={`${window.innerWidth <= 576 ?"fs-6 fw-light ps-2 mb-0" :"mb-0 mt-2"} text-white `}>VEGAN LEMONGRASS STEAK</p>
                <p className={`${window.innerWidth <= 576 ?"fs-6 ps-2 pb-1 pt-0":"mt-0 mx-0"} text-warning `}>bánh mì BÍT TẾT SẢ CHAY</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:window.innerWidth <= 576 ?"330px":"300px",width:window.innerWidth <= 576 ?"95%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":"10px"}}>
               <img className="" src="sandwitch3.jpeg" alt="" style={{height:window.innerWidth <= 576 ?"240px":"220px"}} />
                <div className="d-flex justify-content-center align-items-left flex-column " style={{height:window.innerWidth <= 576 ?"90px":"80px",backgroundColor:"rgb(40, 51, 65)"}}  >
                 <p className={`${window.innerWidth <= 576 ?"fs-6 fw-normal ps-2 mb-0" :"mb-0 mt-2"} text-white `}>VEGAN PORT MEATBALLS</p>
                 <p className={`${window.innerWidth <= 576 ?"fs-6 ps-2 pb-1 pt-0":"mt-0 mx-0"} text-warning `}>bánh mì Xiú Mại Chay</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:window.innerWidth <= 576 ?"330px":"300px",width:window.innerWidth <= 576 ?"95%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":"10px"}}>
               <img className="" src="sandwitch4.jpeg" alt="" style={{height:window.innerWidth <= 576 ?"240px":"220px"}} />
                <div className="d-flex justify-content-center align-items-left flex-column" style={{height:window.innerWidth <= 576 ?"90px":"80px",backgroundColor:"rgb(40, 51, 65)"}}  >
                 <p className={`${window.innerWidth <= 576 ?"fs-6 fw-normal ps-2 pt-4 mb-0" :"mb-0 mt-2"} text-white `}>VEGAN GRILLED PORK</p>
                 <p className={`${window.innerWidth <= 576 ?"fs-6 ps-2 pb-1 pt-0":"mt-0 mx-0"} text-warning `}>bánh mì THỊT NƯỚNG CHAY</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:window.innerWidth <= 576 ?"330px":"300px",width:window.innerWidth <= 576 ?"95%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":"10px"}}>
               <img className="" src="sandwitch5.jpeg" alt="" style={{height:window.innerWidth <= 576 ?"240px":"220px"}} />
                <div className="d-flex justify-content-center align-items-left flex-column" style={{height:window.innerWidth <= 576 ?"90px":"80px",backgroundColor:"rgb(40, 51, 65)"}}  >
                 <p className={`${window.innerWidth <= 576 ?"fs-6 fw-normal ps-2 mb-0" :"mb-0 mt-2"} text-white `}>VIETNAMES BAGUETTE</p>
                 <p className={`${window.innerWidth <= 576 ?"fs-6 ps-2 pb-1 pt-0":"mt-0 mx-0"} text-warning `}>Bánh Mì Baguette</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:window.innerWidth <= 576 ?"330px":"300px",width:window.innerWidth <= 576 ?"95%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":"10px"}}>
               <img className="" src="sandwitch6.jpeg" alt="" style={{height:window.innerWidth <= 576 ?"240px":"220px"}} />
                <div className="d-flex justify-content-center align-items-left flex-column" style={{height:window.innerWidth <= 576 ?"90px":"80px",backgroundColor:"rgb(40, 51, 65)"}}  >
                 <p className={`${window.innerWidth <= 576 ?"fs-6 fw-normal ps-2 mb-0 pt-3" :"mb-0 mt-2"} text-white `}>VEGAN GRILLED CHICKEN</p>
                 <p className={`${window.innerWidth <= 576 ?"fs-6 ps-2 pb-1 pt-0":"mt-0 mx-0"} text-warning `}>bánh mì Gà NƯỚNG CHAY</p>
               </div>
             </div> 

             <div className="d-flex flex-column" style={{height:window.innerWidth <= 576 ?"330px":"300px",width:window.innerWidth <= 576 ?"95%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":"10px"}}>
               <img className="" src="sandwitch7.jpeg" alt="" style={{height:window.innerWidth <= 576 ?"240px":"220px"}} />
                <div className="d-flex justify-content-center align-items-left flex-column " style={{height:window.innerWidth <= 576 ?"90px":"80px",backgroundColor:"rgb(40, 51, 65)"}}  >
                 <p className={`${window.innerWidth <= 576 ?"fs-6 fw-normal ps-2 mb-0" :"mb-0 mt-2"} text-white `}>VEGAN  SPECIAL COMBINATION</p>
                 <p className={`${window.innerWidth <= 576 ?"fs-6 ps-2 pb-1 pt-0":"mt-0 mx-0"} text-warning `}>bánh mì ĐẶC BIỆT CHAY</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:window.innerWidth <= 576 ?"330px":"300px",width:window.innerWidth <= 576 ?"95%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":"10px"}}>
               <img className="" src="sandwitch4.jpeg" alt="" style={{height:window.innerWidth <= 576 ?"240px":"220px"}} />
                <div className="d-flex justify-content-center align-items-left flex-column" style={{height:window.innerWidth <= 576 ?"90px":"80px",backgroundColor:"rgb(40, 51, 65)"}}  >
                 <p className={`${window.innerWidth <= 576 ?"fs-6 fw-normal ps-2 mb-0 pt-3" :"mb-0 mt-2"} text-white `}>VEGAN Pâté MEAT LOAF</p>
                 <p className={`${window.innerWidth <= 576 ?"fs-6 ps-2 pb-1 pt-0":"mt-0 mx-0"} text-warning `}>bánh mì PÂTÉ CHẢ LUẠ CHAY</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:window.innerWidth <= 576 ?"330px":"300px",width:window.innerWidth <= 576 ?"95%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":"10px"}}>
               <img className="" src="sandwitch2.jpeg" alt="" style={{height:window.innerWidth <= 576 ?"240px":"220px"}} />
                <div className="d-flex justify-content-center align-items-left flex-column" style={{height:window.innerWidth <= 576 ?"90px":"80px",backgroundColor:"rgb(40, 51, 65)"}}  >
                 <p className={`${window.innerWidth <= 576 ?"fs-6 fw-normal ps-2 mb-0" :"mb-0 mt-2"} text-white `}>VEGAN FRIED CHICKEN</p>
                 <p className={`${window.innerWidth <= 576 ?"fs-6 ps-2 pb-1 pt-0":"mt-0 mx-0"} text-warning `}>bánh mì GÀ CHIÊN CHAY</p>
               </div>
             </div>

              <div className="d-flex flex-column" style={{height:window.innerWidth <= 576 ?"330px":"300px",width:window.innerWidth <= 576 ?"95%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":"10px"}}>
               <img className="" src="burger2.jpeg" alt="" style={{height:window.innerWidth <= 576 ?"240px":"220px"}} />
                <div className="d-flex justify-content-center align-items-left flex-column" style={{height:window.innerWidth <= 576 ?"90px":"80px",backgroundColor:"rgb(40, 51, 65)"}}  >
                 <p className={`${window.innerWidth <= 576 ?"fs-6 fw-normal pt-1 ps-2 mb-0" :"mb-0 mt-2"} text-white `}>VEGAN SHREDDED PORK SKIN</p>
                 <p className={`${window.innerWidth <= 576 ?"fs-6 ps-2 pb-1 pt-0":"mt-0 mx-0"} text-warning `}>bánh mì GÀ CHIÊN CHAY</p>
               </div>
             </div>
          </div>
      </div>
      <div className=" bg-black h-1" style={{width:"100%"}}>
         <p className="text-white mb-0  d-none d-lg-block" style={{margin:"0px 250px 0px 250px"}}>________________________________________________________________________________________________________________________________________________________________________</p>
        <p className={`${window.innerWidth <= 992 ? "text-white w-98":"d-none"}`} style={{margin:"0px 0px 0px 60px"}}>_______________________________________</p>
      </div>
      {/* -------------------------------------------------------------------------------section no 2------------------------------------------------------------------------------------- */}
      <div className="d-flex flex-row  w-100 bg-black" style={{height:window.innerWidth <= 576 ? "2980px":'1150px'}}>
          <div className=" bg-black" style={{height:window.innerWidth <= 576 ?"2930px":"1050px",width:window.innerWidth <= 576 ?"40%":"30%",margin:window.innerWidth <= 576 ?"10px 0px 0px 10px":"40px 0px 80px 80px"}}>
             <p className="fw-bold fs-2 text-white" style={{margin:window.innerWidth <= 576 ?"40px 0px 0px 0px":"110px"}}>VEGAN PASTRIES</p>
          </div>
          <div className={`d-flex ${window.innerWidth <= 576 ?"flex-column":"flex-wrap"} justify-contant-evenly bg-black `} style={{height:window.innerWidth <= 576 ?"2930px":"1050px",width:window.innerWidth <= 576 ?"60%":"70%",margin:window.innerWidth <= 576 ?"10px 5px 0px 10px":"40px 80px 80px 10px",padding:window.innerWidth <= 992 ?"20px 20px 0px 0px":"40px 20px 40px 0px"}}>

             <div className="d-flex  flex-column" style={{height:window.innerWidth <= 576 ?"300px":"320px",width:window.innerWidth <= 576 ?"95%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":"10px"}}>
              <img className="" src="hotb4.jpeg" alt="" style={{height:"230px",objectFit:"cover"}} />
               <div className="d-flex justify-content-center align-items-left flex-column"style={{height:window.innerWidth <= 576 ?"90px":"80px",backgroundColor:"rgb(40, 51, 65)"}}>
                <p className={` ${window.innerWidth <= 576 ?"pt-3 ps-3":"mt-3 ms-4"} text-white fw-normal`}>VEGAN HAM & CHEESE HOT BAKE</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:window.innerWidth <= 576 ?"300px":"320px",width:window.innerWidth <= 576 ?"95%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":"10px"}}>
               <img className="" src="hotb2.jpeg" alt="" style={{height:"230px",objectFit:"cover"}} />
                <div className="d-flex justify-content-center align-items-left flex-column " style={{height:window.innerWidth <= 576 ?"90px":"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className={` ${window.innerWidth <= 576 ?"pt-3 ps-3":"mt-3 ms-4"} text-white fw-normal`}>VEGAN CHICKEN HOT BAKE</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:window.innerWidth <= 576 ?"300px":"320px",width:window.innerWidth <= 576 ?"95%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":"10px"}}>
               <img className="" src="croi1.jpeg" alt="" style={{height:"230px",objectFit:"cover"}} />
                <div className="d-flex justify-content-center align-items-center flex-column " style={{height:window.innerWidth <= 576 ?"90px":"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white fw-normal mt-3 ms-4 ">VEGAN CROISSANT</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:window.innerWidth <= 576 ?"300px":"320px",width:window.innerWidth <= 576 ?"95%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":"10px"}}>
               <img className="" src="hotb1.jpeg" alt="" style={{height:"230px",objectFit:"cover"}} />
                <div className="d-flex justify-content-center align-items-center flex-column "style={{height:window.innerWidth <= 576 ?"90px":"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className={` ${window.innerWidth <= 576 ?"pt-3 ps-3":"mt-3 ms-4"} text-white fw-normal`}>VEGAN HAM & CHEESE CROISSANT</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:window.innerWidth <= 576 ?"300px":"320px",width:window.innerWidth <= 576 ?"95%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":"10px"}}>
               <img className="" src="pastry8.jpeg" alt="" style={{height:"230px",objectFit:"cover"}} />
                <div className="d-flex justify-content-center align-items-left flex-column "style={{height:window.innerWidth <= 576 ?"90px":"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className={` ${window.innerWidth <= 576 ?"pt-3 ps-3":"mt-3 ms-4"} text-white fw-normal`}>VEGAN COCONUT CROISSANT</p>
               </div>
             </div> 

              <div className="d-flex flex-column" style={{height:window.innerWidth <= 576 ?"300px":"320px",width:window.innerWidth <= 576 ?"95%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":"10px"}}>
               <img className="" src="pastry9.jpeg" alt="" style={{height:"230px",objectFit:"cover"}} />
                <div className="d-flex justify-content-center align-items-left flex-column "style={{height:window.innerWidth <= 576 ?"90px":"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className={` ${window.innerWidth <= 576 ?"pt-3 ps-3":"mt-3 ms-4"} text-white fw-normal`}>VEGAN GUAVA TURNOVER</p>
               </div>
             </div>

              <div className="d-flex flex-column" style={{height:window.innerWidth <= 576 ?"300px":"320px",width:window.innerWidth <= 576 ?"95%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":"10px"}}>
               <img className="" src="pastry10.jpeg" alt="" style={{height:"230px",objectFit:"cover"}} />
                <div className="d-flex justify-content-center align-items-left flex-column"style={{height:window.innerWidth <= 576 ?"90px":"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className={` ${window.innerWidth <= 576 ?"pt-3 ps-3":"mt-3 ms-4"} text-white fw-normal`}>VEGAN HAM & CHEESE JALAPEñO CROISSANT</p>
               </div>
             </div>

              <div className="d-flex flex-column" style={{height:window.innerWidth <= 576 ?"300px":"320px",width:window.innerWidth <= 576 ?"95%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":"10px"}}>
               <img className="" src="pastry11.jpeg" alt="" style={{height:"230px",objectFit:"cover"}} />
                <div className="d-flex align-items-left justify-content-center flex-column" style={{height:window.innerWidth <= 576 ?"90px":"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className={` ${window.innerWidth <= 576 ?"pt-3 ps-3":"mt-3 ms-4"} text-white fw-normal`}>VEGAN PINEAPPLE TURNOVER</p>
               </div>
             </div>

              <div className="d-flex flex-column" style={{height:window.innerWidth <= 576 ?"300px":"320px",width:window.innerWidth <= 576 ?"95%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":"10px"}}>
               <img className="" src="pastry12.jpeg" alt="" style={{height:window.innerWidth <= 576 ?"240px":"220px",objectFit:"cover"}} />
                <div className="d-flex justify-content-center align-items-left flex-column"style={{height:window.innerWidth <= 576 ?"90px":"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className={` ${window.innerWidth <= 576 ?"pt-3 ps-3":"mt-3 ms-4"} text-white fw-normal`}>VEGAN APPLE TURNOVER</p>
               </div>
             </div>
          </div>
      </div>
      <div className=" bg-black h-1" style={{width:"100%"}}>
         <p className="text-white mb-0 d-none d-lg-block" style={{margin:"0px 250px 0px 250px"}}>________________________________________________________________________________________________________________________________________________________________________</p>
         <p className={`${window.innerWidth <= 992 ? "text-white w-98":"d-none"}`} style={{margin:"0px 0px 0px 60px"}}>_______________________________________</p>
      </div>
      {/* -------------------------------------------------------------------------------section no 3------------------------------------------------------------------------------------- */}
               <div className="d-flex flex-row  w-100 bg-black" style={{height:window.innerWidth <= 576 ?"2550px":'1100px'}}>
          <div className=" bg-black" style={{height:window.innerWidth <= 576 ?"2500px":"1000px",width:window.innerWidth <= 576 ?"40%":"30%",margin:window.innerWidth <= 576 ?"10px 0px 0px 10px":"40px 0px 80px 80px"}}>
             <p className={` ${window.innerWidth <= 576 ?" fw-normal fs-5":" fw-bold fs-2"} text-white `} style={{margin:window.innerWidth <= 576 ?"40px 0px 0px 0px":"80px"}}>VEGAN VIETNAMESE PASTRY</p>
          </div>
          <div className={`${window.innerWidth <= 576 ?"flex-column":"flex-wrap"}  d-flex justify-contant-evenly bg-black `} style={{height:window.innerWidth <= 576 ?"2500px":"1000px",width:window.innerWidth <= 576 ?"60%":"70%",margin:window.innerWidth <= 576 ?"10px 5px 0px 10px":"40px 80px 80px 0px",padding:window.innerWidth <= 992 ?"20px 20px 0px 0px":"40px 20px 40px 10px"}}>

             <div className="d-flex  flex-column" style={{height:window.innerWidth <= 576 ?"330px":"300px",width:window.innerWidth <= 576 ?"95%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":"10px"}}>
              <img className="" src="pastry5.jpeg" alt="" style={{height:window.innerWidth <= 576 ?"240px":"220px"}} />
               <div className={`${window.innerWidth <= 576 ?"align-items-left":"align-items-center"} d-flex justify-content-center align-items-left flex-column `} style={{height:window.innerWidth <= 576 ?"90px":"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                <p className={`${window.innerWidth <= 576 ?"fs-6 fw-normal ps-2 pt-2 mb-0" :"mb-0 mt-2"} text-white `}>VEGAN VIETNAMESES BONUT</p>
                <p className={`${window.innerWidth <= 576 ?"fs-6 ps-2 pb-1 pt-0":"mt-0 mx-0"} text-warning `}>Bánh Bao Chay</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:window.innerWidth <= 576 ?"330px":"300px",width:window.innerWidth <= 576 ?"95%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":"10px"}}>
               <img className="" src="pastry2.jpeg" alt="" style={{height:window.innerWidth <= 576 ?"240px":"220px"}} />
                <div className={`${window.innerWidth <= 576 ?"align-items-left":"align-items-center"} d-flex justify-content-center align-items-left flex-column `} style={{height:window.innerWidth <= 576 ?"90px":"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className={`${window.innerWidth <= 576 ?"fs-6 fw-normal ps-2 mb-0" :"mb-0 mt-2"} text-white `}>VEGAN STEAMED BUN</p>
                 <p className={`${window.innerWidth <= 576 ?"fs-6 ps-4 pb-1 pt-0":"mt-0 mx-0"} text-warning `}>Bánh Bao Chay</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:window.innerWidth <= 576 ?"330px":"300px",width:window.innerWidth <= 576 ?"95%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":"10px"}}>
               <img className="" src="buns1.jpeg" alt="" style={{height:window.innerWidth <= 576 ?"240px":"220px"}} />
                <div className={`${window.innerWidth <= 576 ?"align-items-left":"align-items-center"} d-flex justify-content-center align-items-left flex-column `} style={{height:window.innerWidth <= 576 ?"90px":"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className={`${window.innerWidth <= 576 ?"fs-6 fw-normal ps-4 mb-0" :"mb-0 mt-2"} text-white `}>VEGAN PUFF PASTRY</p>
                 <p className={`${window.innerWidth <= 576 ?"fs-6 ps-3 pb-1 pt-0":"mt-0 mx-0"} text-warning `}>Bánh Pâté Chaud Chay</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:window.innerWidth <= 576 ?"330px":"300px",width:window.innerWidth <= 576 ?"95%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":"10px"}}>
               <img className="" src="buns2.jpeg" alt="" style={{height:window.innerWidth <= 576 ?"240px":"220px"}} />
                <div className={`${window.innerWidth <= 576 ?"align-items-left":"align-items-center"} d-flex justify-content-center align-items-left flex-column `} style={{height:window.innerWidth <= 576 ?"90px":"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className={`${window.innerWidth <= 576 ?"fs-6 fw-normal pt-2 ps-4 mb-0" :"mb-0 mt-2"} text-white `}>VEGAN BEEF PUFF PASTRY</p>
                 <p className={`${window.innerWidth <= 576 ?"fs-6 ps-4 pt-1":"mt-0 mx-0"} text-warning `}>Bánh Quai Vạc Chay</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:window.innerWidth <= 576 ?"330px":"300px",width:window.innerWidth <= 576 ?"95%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":"10px"}}>
               <img className="" src="pastry1.jpeg" alt="" style={{height:window.innerWidth <= 576 ?"240px":"220px"}} />
                <div className={`${window.innerWidth <= 576 ?"align-items-left":"align-items-center"} d-flex justify-content-center align-items-left flex-column `} style={{height:window.innerWidth <= 576 ?"90px":"80px",backgroundColor:"rgb(40, 51, 65)"}}>
                 <p className={`${window.innerWidth <= 576 ?"fs-6 fw-normal pt-3 ps-3 mb-0" :"mb-0 mt-2"} text-white `}>VEGAN SAVORY EMPANADA</p>
                 <p className={`${window.innerWidth <= 576 ?"fs-6 ps-3 pb-1 pt-0":"mt-0 mx-0"} text-warning `}>Bánh Quai Vạc Chay</p>
               </div>
             </div> 

             <div className="d-flex flex-column" style={{height:window.innerWidth <= 576 ?"330px":"300px",width:window.innerWidth <= 576 ?"95%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":"10px"}}>
               <img className="" src="pastry3.jpeg" alt="" style={{height:window.innerWidth <= 576 ?"240px":"220px"}} />
                <div className={`${window.innerWidth <= 576 ?"align-items-left":"align-items-center"} d-flex justify-content-center align-items-left flex-column `} style={{height:window.innerWidth <= 576 ?"90px":"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className={`${window.innerWidth <= 576 ?"fs-6 fw-normal ps-1 pt-1 mb-0" :"mb-0 mt-2"} text-white `}>VEGAN SWEET EMPANADA</p>
                 <p className={`${window.innerWidth <= 576 ?"fs-6 ps-1 pb-1 pt-0":"mt-0 mx-0"} text-warning `}>Durian, Taro, Mung Bean, Coconut</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:window.innerWidth <= 576 ?"330px":"300px",width:window.innerWidth <= 576 ?"95%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":"10px"}}>
               <img className="" src="pastry4.jpeg" alt="" style={{height:window.innerWidth <= 576 ?"240px":"220px"}} />
                <div className={`${window.innerWidth <= 576 ?"align-items-left":"align-items-center"} d-flex justify-content-center align-items-left flex-column `} style={{height:window.innerWidth <= 576 ?"90px":"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className={`${window.innerWidth <= 576 ?"fs-6 fw-normal ps-1 pt-3 mb-0" :"mb-0 mt-2"} text-white `}>VEGAN SOFT MINI BUNS</p>
                 <p className={`${window.innerWidth <= 576 ?"fs-6 ps-1 pb-1 pt-0":"mt-0 mx-0"} text-warning `}>Coconut, Taro, Mung Bean, Durian</p>
               </div>
             </div>
          </div>
      </div>
      <div className=" bg-black h-1" style={{width:"100%"}}>
         <p className=" text-white d-none d-lg-block" style={{margin:"0px 250px 0px 250px"}}>_______________________________________________________________________________________________________________________________________________________________________</p>
          <p className={`${window.innerWidth <= 992 ? "text-white w-98":"d-none"}`} style={{margin:"0px 0px 0px 60px"}}>_______________________________________</p>
       </div>
      {/* -------------------------------------------------------------------------------section no 4------------------------------------------------------------------------------------- */}
        <div className="d-flex flex-row  w-100 bg-black" style={{height:window.innerWidth <= 576 ?"1150px":'540px'}}>
          <div className=" bg-black" style={{height:window.innerWidth <= 576 ?"1100px":"400px",width:window.innerWidth <= 576 ?"40%":"30%",margin:window.innerWidth <= 576 ?"10px 0px 0px 10px":"40px 0px 80px 80px"}}>
             <p className="fw-bold fs-2 text-white" style={{margin:window.innerWidth <= 576 ?"40px 0px 0px 0px":"110px"}}>VEGAN DRINKS</p>
          </div>
          <div className={` ${window.innerWidth <= 576 ?"flex-column":"flex-wrap"} d-flex justify-contant-evenly bg-black`} style={{height:window.innerWidth <= 576 ?"1100px":"400px",width:window.innerWidth <= 576 ?"60%":"70%",margin:window.innerWidth <= 576 ?"10px 5px 0px 10px":"40px 80px 80px 0px",padding:window.innerWidth <= 992 ?"20px 20px 0px 0px":"40px 20px 0px 10px"}}>
             <div className="d-flex  flex-column " style={{height:"335px",width:window.innerWidth <= 576 ?"95%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":"10px"}}>
              <img className="" src="coffee1.jpeg" alt="" style={{height:"240px",objectFit:"cover"}} />
               <div className={`${window.innerWidth <= 576 ? "align-items-left":"align-items-center"} d-flex  flex-column `} style={{height:"90px",backgroundColor:"rgb(40, 51, 65)"}} >
                <p className={` ${window.innerWidth <= 576 ?"pt-1 ps-2 mb-0":"mt-2"} text-white fw-normal`}>VEGAN VIETNAMESES COFFEE</p>
                <p className={`${window.innerWidth <= 576 ?"fs-6 ps-2 pb-1 pt-1":"mt-0 mx-0"} text-warning `}>CÀ PHÊ SỮA 'OAT' ĐÁ</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"335px",width:window.innerWidth <= 576 ?"95%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":"10px"}}>
               <img className="" src="coffee2.jpeg" alt="" style={{height:"240px",objectFit:"cover"}} />
                <div className={`${window.innerWidth <= 576 ? "align-items-left":"align-items-center"} d-flex flex-column `} style={{height:"90px",backgroundColor:"rgb(40, 51, 65)"}}>
                 <p className={` ${window.innerWidth <= 576 ?"pt-2 ps-3 mb-0":"mt-2"} text-white fw-semibold`}>VIETNAMESES BEAUTY ELIXIR</p>
                 <p className={`${window.innerWidth <= 576 ?"fs-6 ps-3 pb-1 pt-0":"mt-0 mx-0"} text-warning `}>Chè Dưỡng Nhan</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"335px",width:window.innerWidth <= 576 ?"95%":"27%",margin:window.innerWidth <= 576 ?"10px 0px 10px 10px":"10px"}}>
               <img className="" src="coffee3.jpeg" alt="" style={{height:"240px",objectFit:"cover"}} />
                <div className={`${window.innerWidth <= 576 ? "align-items-left":"align-items-center"} d-flex flex-column `} style={{height:"90px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className={` ${window.innerWidth <= 576 ?"pt-2 ps-3 mb-0":"mt-2"} text-white fw-semibold`}>VIETNAMESES HERBAL DESSERT</p>
                 <p className={`${window.innerWidth <= 576 ?"fs-6 ps-3 pb-1 pt-0":"mt-0 mx-0"} text-warning `}>Chè Dưỡng Nhan</p>
               </div>
             </div>
          </div>
       </div>
        {/* ---------------------------------------------------------------------------------section no 5------------------------------------------------------------------------------------ */}
      <div className={`d-flex ${window.innerWidth <=576 ? "flex-column":" flex-row"}  bg-dark w-100`} style={{height: window.innerWidth <= 576 ?"620px":window.innerWidth ? "220px":"180px"}}>

        <div className="d-flex flex-column " style={{height:"160px",width:"200px",padding:window.innerWidth <= 576 ?"20px 10px 10px 0px":"20px 10px 10px 10px"}}>
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

        <div className="d-flex flex-column" style={{height:"160px",width:"200px",padding:window.innerWidth <= 576 ?"20px 10px 10px 10px":"20px 5px 10px 5px"}}>
          <p className="mx-3 fs-6 fw-semibold text-white">FOLLOW</p>
            <div className="d-flex justify-content-evenly mx-0" style={{width:"160px"}}>
              <img className="ms-2 rounded-4" src="tiktok-36.png" alt="icon2" />
              <img className="ms-2 rounded-4" src="insta-36.png" alt="icon3" />
              <img className="ms-2 rounded-4" src="face-36.png" alt="icon4" />
            </div>
        </div>

        <div  style={{height:"160px",width:"200px",padding:window.innerWidth <= 576 ?"20px 10px 10px 10px":"20px 5px 10px 10px"}}>
          <p  className="mx-3 fs-6 fw-semibold text-white">ABOUT US</p>
        </div>
        <div style={{height:"160px",width:"200px",padding:window.innerWidth <= 576 ?"20px 10px 10px 10px":"20px 5px 10px 10px"}}>
           <p  className="mx-3 fs-6 fw-semibold text-white">CONTACT US</p>
        </div>
       </div>
       {/* ------------------------------------------------------------------------section no 6------------------------------------------------------------------------------------------ */}
      <div className="d-flex flex-wrap w-100 bg-black align-items-center"  style={{height:"110px"}}>
         <p className="fs-5 text-white mt-3 mx-5">© 2025 Đông Hưng Viên Bakery – All Rights Reserved.</p>
      </div>
    </>
  )
}
