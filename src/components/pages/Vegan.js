import React from 'react'

export default function Vegan() {
  return (
    <>
      <div className=" d-flex align-items-center justify-content-center bg-black " style={{height: "250px"}}>
        <p className=" fw-bold fs-1 text-white mb-2">VEGAN MENU</p>
      </div>
      {/* this is a text */}
       <div className="d-flex bg-dark align-items-center flex-row w-100 justify-content-evenly" style={{height:'200px'}}>

        <div className="d-flex flex-column justify-content-center align-items-center  " style={{height:'130px',width:'180px'}}>
           <img className=" mt-3" src="bur.png" alt="logo1" style={{height:"100px",width:"100px"}} />
           <p className="text-white fs-6 fw-light ">VEGAN BÁNH MÌ</p>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center " style={{height:'130px',width:'180px'}}>
             <img className=" mt-3" src="bread1.png" alt="" style={{height:"100px",width:"100px"}}  />
            <p className="text-white fs-6 fw-light ">VEGAN Pastries</p>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center " style={{height:'130px',width:'200px'}}>
            <img className="mt-3" src="pastry.png" alt="" style={{height:"100px",width:"100px"}}  />
            <p className="text-white fs-6 fw-light">VEGAN Vietnamese Pastries</p>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center " style={{height:'130px',width:'180px'}}>
             <img className="mt-3" src="coffee.png" alt="" style={{height:"100px",width:"100px"}}  />
            <p className="text-white  fs-6 fw-light">VEGAN Drinks</p>
        </div>
      </div>
      {/* -------------------------------------------------------------------------------section no 1------------------------------------------------------------------------------------- */}
         <div className="d-flex flex-row  w-100 bg-black" style={{height:'1100px'}}>
          <div className=" bg-black" style={{height:"900px",width:"30%",margin:"80px 0px 80px 80px"}}>
             <p className="fw-bold fs-2 text-white" style={{marginLeft:"110px"}}>VEGAN BÁNH MÌ</p>
          </div>
          <div className="d-flex flex-wrap justify-contant-evenly bg-black w-60" style={{height:"800px",width:"70%",margin:"80px 80px 80px 0px"}}>
             
             <div className="d-flex  flex-column" style={{height:"300px",width:"27%",margin:"10px"}}>
              <img className="" src="sandwitch2.jpeg" alt="" style={{height:"220px"}} />
               <div className="d-flex justify-content-center align-items-center flex-column"  style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}}  >
                <p className="text-white mb-0 mt-2">VEGAN LEMONGRASS STEAK</p>
                <p className="text-warning mt-0 mx-0">bánh mì BÍT TẾT SẢ CHAY</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"300px",width:"27%",margin:"10px"}}>
               <img className="" src="sandwitch3.jpeg" alt="" style={{height:"220px"}} />
                <div className="d-flex justify-content-center align-items-center flex-column " style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}}  >
                 <p className="text-white mb-0 mt-2">VEGAN PORT MEATBALLS</p>
                 <p className="text-warning mt-0">bánh mì Xiú Mại Chay</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"300px",width:"27%",margin:"10px"}}>
               <img className="" src="sandwitch4.jpeg" alt="" style={{height:"220px"}} />
                <div className="d-flex justify-content-center align-items-center flex-column" style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}}  >
                 <p className="text-white mb-0 mt-2">VEGAN GRILLED PORK</p>
                 <p className="text-warning mt-0">bánh mì THỊT NƯỚNG CHAY</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"300px",width:"27%",margin:"10px"}}>
               <img className="" src="sandwitch5.jpeg" alt="" style={{height:"220px"}} />
                <div className="d-flex justify-content-center align-items-center flex-column" style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}}  >
                 <p className="text-white mb-0 mt-2">VIETNAMES BAGUETTE</p>
                 <p className="text-warning mt-0">Bánh Mì Baguette</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"300px",width:"27%",margin:"10px"}}>
               <img className="" src="sandwitch6.jpeg" alt="" style={{height:"220px"}} />
                <div className="d-flex justify-content-center align-items-center flex-column" style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}}  >
                 <p className="text-white mb-0 mt-2">VEGAN GRILLED CHICKEN</p>
                 <p className="text-warning mt-0">bánh mì Gà NƯỚNG CHAY</p>
               </div>
             </div> 

             <div className="d-flex flex-column" style={{height:"300px",width:"27%",margin:"10px"}}>
               <img className="" src="sandwitch7.jpeg" alt="" style={{height:"220px"}} />
                <div className="d-flex justify-content-center align-items-center flex-column " style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}}  >
                 <p className="text-white mb-0 mt-2">VEGAN SPECIAL COMBINATION</p>
                 <p className="text-warning mt-0">bánh mì ĐẶC BIỆT CHAY</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"300px",width:"27%",margin:"10px"}}>
               <img className="" src="sandwitch4.jpeg" alt="" style={{height:"220px"}} />
                <div className="d-flex justify-content-center align-items-center flex-column" style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}}  >
                 <p className="text-white mb-0 mt-2">VEGAN Pâté MEAT LOAF</p>
                 <p className="text-warning mt-0">bánh mì PÂTÉ CHẢ LUẠ CHAY</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"300px",width:"27%",margin:"10px"}}>
               <img className="" src="sandwitch2.jpeg" alt="" style={{height:"220px"}} />
                <div className="d-flex justify-content-center align-items-center flex-column" style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}}  >
                 <p className="text-white mb-0 mt-2">VEGAN FRIED CHICKEN</p>
                 <p className="text-warning mt-0">bánh mì GÀ CHIÊN CHAY</p>
               </div>
             </div>

              <div className="d-flex flex-column" style={{height:"300px",width:"27%",margin:"10px"}}>
               <img className="" src="burger2.jpeg" alt="" style={{height:"220px"}} />
                <div className="d-flex justify-content-center align-items-center flex-column" style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}}  >
                 <p className="text-white mb-0 mt-2">VEGAN SHREDDED PORK SKIN</p>
                 <p className="text-warning mt-0">bánh mì GÀ CHIÊN CHAY</p>
               </div>
             </div>
          </div>
      </div>
      <div className="w-100 bg-black h-1">
         <p className="w-100 text-white " style={{margin:"0px 250px 0px 250px"}}>________________________________________________________________________________________________________________________________________________________________________</p>
      </div>
      {/* -------------------------------------------------------------------------------section no 2------------------------------------------------------------------------------------- */}
      <div className="d-flex flex-row  w-100 bg-black" style={{height:'1100px'}}>
          <div className=" bg-black" style={{height:"900px",width:"30%",margin:"80px 0px 80px 80px"}}>
             <p className="fw-bold fs-2 text-white" style={{marginLeft:"110px"}}>VEGAN PASTRIES</p>
          </div>
          <div className="d-flex flex-wrap justify-contant-evenly bg-black w-60" style={{height:"800px",width:"70%",margin:"80px 80px 80px 0px"}}>
             <div className="d-flex  flex-column" style={{height:"320px",width:"27%",margin:"10px"}}>
              <img className="" src="hotb4.jpeg" alt="" style={{height:"230px",objectFit:"cover"}} />
               <div className="d-flex justify-content-center align-items-left flex-column"style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}}>
                <p className="text-white fw-normal mt-3 ms-4">VEGAN HAM & CHEESE HOT BAKE</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"320px",width:"27%",margin:"10px"}}>
               <img className="" src="hotb2.jpeg" alt="" style={{height:"230px",objectFit:"cover"}} />
                <div className="d-flex justify-content-center align-items-left flex-column " style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white fw-normal mt-3 ms-4">VEGAN CHICKEN HOT BAKE</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"320px",width:"27%",margin:"10px"}}>
               <img className="" src="croi1.jpeg" alt="" style={{height:"230px",objectFit:"cover"}} />
                <div className="d-flex justify-content-center align-items-center flex-column " style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white fw-normal mt-3 ms-4 ">VEGAN CROISSANT</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"320px",width:"27%",margin:"10px"}}>
               <img className="" src="hotb1.jpeg" alt="" style={{height:"230px",objectFit:"cover"}} />
                <div className="d-flex justify-content-center align-items-center flex-column "style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white fw-normal mt-3 ms-4">VEGAN HAM & CHEESE CROISSANT</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"320px",width:"27%",margin:"10px"}}>
               <img className="" src="pastry8.jpeg" alt="" style={{height:"230px",objectFit:"cover"}} />
                <div className="d-flex justify-content-center align-items-left flex-column "style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white fw-normal mt-2 ms-4">VEGAN COCONUT CROISSANT</p>
               </div>
             </div> 

              <div className="d-flex flex-column" style={{height:"320px",width:"27%",margin:"10px"}}>
               <img className="" src="pastry9.jpeg" alt="" style={{height:"230px",objectFit:"cover"}} />
                <div className="d-flex justify-content-center align-items-left flex-column "style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white fw-normal mt-1 ms-4">VEGAN GUAVA TURNOVER</p>
               </div>
             </div>

              <div className="d-flex flex-column" style={{height:"320px",width:"27%",margin:"10px"}}>
               <img className="" src="pastry10.jpeg" alt="" style={{height:"230px",objectFit:"cover"}} />
                <div className="d-flex justify-content-center align-items-left flex-column"style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white fw-normal mt-3 ms-2">VEGAN HAM & CHEESE JALAPEñO CROISSANT</p>
               </div>
             </div>

              <div className="d-flex flex-column" style={{height:"320px",width:"27%",margin:"10px"}}>
               <img className="" src="pastry11.jpeg" alt="" style={{height:"230px",objectFit:"cover"}} />
                <div className="d-flex align-items-left justify-content-center flex-column" style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white fw-normal mt-3 ms-4">VEGAN PINEAPPLE TURNOVER</p>
               </div>
             </div>

              <div className="d-flex flex-column" style={{height:"320px",width:"27%",margin:"10px"}}>
               <img className="" src="pastry12.jpeg" alt="" style={{height:"220px",objectFit:"cover"}} />
                <div className="d-flex justify-content-center align-items-left flex-column"style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white fw-normal mt-3 ms-4">VEGAN APPLE TURNOVER</p>
               </div>
             </div>
          </div>
      </div>
      <div className="w-100 bg-black h-1">
         <p className="w-100 text-white " style={{margin:"0px 250px 0px 250px"}}>________________________________________________________________________________________________________________________________________________________________________</p>
      </div>
      {/* -------------------------------------------------------------------------------section no 3------------------------------------------------------------------------------------- */}
               <div className="d-flex flex-row  w-100 bg-black" style={{height:'1100px'}}>
          <div className=" bg-black" style={{height:"900px",width:"30%",margin:"80px 0px 80px 80px"}}>
             <p className="fw-bold fs-2 text-white" style={{marginLeft:"110px"}}>VEGAN VIETNAMESE PASTRY</p>
          </div>
          <div className="d-flex flex-wrap justify-contant-evenly bg-black w-60" style={{height:"800px",width:"70%",margin:"80px 80px 80px 0px"}}>
             <div className="d-flex  flex-column" style={{height:"320px",width:"27%",margin:"10px"}}>
              <img className="" src="pastry5.jpeg" alt="" style={{height:"220px"}} />
               <div className="d-flex justify-content-center align-items-center flex-column "style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                <p className="text-white mb-0 mt-2">VEGAN VIETNAMESES BONUT</p>
                <p className="text-warning mt-0 mx-0">Bánh Bao Chay</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"320px",width:"27%",margin:"10px"}}>
               <img className="" src="pastry2.jpeg" alt="" style={{height:"220px"}} />
                <div className="d-flex justify-content-center align-items-center flex-column " style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white mb-0 mt-2">VEGAN STEAMED BUN</p>
                 <p className="text-warning mt-0">Bánh Bao Chay</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"320px",width:"27%",margin:"10px"}}>
               <img className="" src="buns1.jpeg" alt="" style={{height:"220px"}} />
                <div className="d-flex justify-content-center align-items-center flex-column "style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white mb-0 mt-2">VEGAN PUFF PASTRY</p>
                 <p className="text-warning mt-0">Bánh Pâté Chaud Chay</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"320px",width:"27%",margin:"10px"}}>
               <img className="" src="buns2.jpeg" alt="" style={{height:"220px"}} />
                <div className="d-flex justify-content-center align-items-center flex-column "style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white mb-0 mt-2">VEGAN BEEF PUFF PASTRY</p>
                 <p className="text-warning mt-0">Bánh Quai Vạc Chay</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"320px",width:"27%",margin:"10px"}}>
               <img className="" src="pastry1.jpeg" alt="" style={{height:"220px"}} />
                <div className="d-flex justify-content-center align-items-center flex-column " style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}}>
                 <p className="text-white mb-0 mt-2">VEGAN SAVORY EMPANADA</p>
                 <p className="text-warning mt-0">Bánh Quai Vạc Chay</p>
               </div>
             </div> 

             <div className="d-flex flex-column" style={{height:"320px",width:"27%",margin:"10px"}}>
               <img className="" src="pastry3.jpeg" alt="" style={{height:"220px"}} />
                <div className="d-flex justify-content-center align-items-center flex-column " style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white mb-0 mt-2">VEGAN SWEET EMPANADA</p>
                 <p className="text-warning mt-0">Durian, Taro, Mung Bean, Coconut</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"320px",width:"27%",margin:"10px"}}>
               <img className="" src="pastry4.jpeg" alt="" style={{height:"220px"}} />
                <div className="d-flex justify-content-center align-items-center flex-column"style={{height:"80px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white mb-0 mt-2">VEGAN SOFT MINI BUNS</p>
                 <p className="text-warning mt-0">Coconut, Taro, Mung Bean, Durian</p>
               </div>
             </div>
          </div>
      </div>
      <div className="w-100 bg-black h-1">
         <p className="w-100 text-white " style={{margin:"0px 250px 0px 250px"}}>_______________________________________________________________________________________________________________________________________________________________________</p>
       </div>
      {/* -------------------------------------------------------------------------------section no 4------------------------------------------------------------------------------------- */}
        <div className="d-flex flex-row  w-100 bg-black" style={{height:'540px'}}>
          <div className=" bg-black" style={{height:"380px",width:"30%",margin:"80px 0px 80px 80px"}}>
             <p className="fw-bold fs-2 text-white" style={{marginLeft:"110px"}}>VEGAN DRINKS</p>
          </div>
          <div className="d-flex flex-wrap justify-contant-evenly bg-black w-60" style={{height:"380px",width:"70%",margin:"80px 80px 80px 0px"}}>
             <div className="d-flex  flex-column" style={{height:"350px",width:"27%",margin:"10px"}}>
              <img className="" src="coffee1.jpeg" alt="" style={{height:"240px",objectFit:"cover"}} />
               <div className="d-flex align-items-center flex-column " style={{height:"90px",backgroundColor:"rgb(40, 51, 65)"}} >
                <p className="text-white mt-2 fw-semibold">VEGAN VIETNAMESES COFFEE</p>
                <p className="text-warning mt-0">CÀ PHÊ SỮA 'OAT' ĐÁ</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"340px",width:"27%",margin:"10px"}}>
               <img className="" src="coffee2.jpeg" alt="" style={{height:"240px",objectFit:"cover"}} />
                <div className="d-flex align-items-center flex-column " style={{height:"90px",backgroundColor:"rgb(40, 51, 65)"}}>
                 <p className="text-white mt-2 fw-semibold">VIETNAMESES BEAUTY ELIXIR</p>
                 <p className="text-warning mt-0">Chè Dưỡng Nhan</p>
               </div>
             </div>

             <div className="d-flex flex-column" style={{height:"350px",width:"27%",margin:"10px"}}>
               <img className="" src="coffee3.jpeg" alt="" style={{height:"240px",objectFit:"cover"}} />
                <div className="d-flex align-items-center justify-content-center flex-column " style={{height:"90px",backgroundColor:"rgb(40, 51, 65)"}} >
                 <p className="text-white mt-2 fw-semibold">VIETNAMESES HERBAL DESSERT</p>
                 <p className="text-warning mt-0 ">Chè Dưỡng Nhan</p>
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
