
import "./hero.css"
import React from 'react'

const Hero = () => {
  return (
    <div id="home" className="hero-container" >

      <h2 className={` tracking-in-expand`}>
        EASE OF DOING <span className="uneven-box  " style={{ color: "#fff", padding: "7px", backgroundColor: "blue", borderRadius:"30%"}}>Business</span>  <br className="sm:block hidden" /> STARTS HERE.
      </h2>

      <div style={{display:"flex", width:"500px", justifyContent:"center"}}>

      <img className="hero-image bounce-in-top" style ={{borderRadius: "10%",  padding:"10px"}}src="https://images.unsplash.com/photo-1609601997352-a8f588e2e4e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero" />
      <img className="hero-image bounce-in-top" style ={{borderRadius: "10%",  padding:"10px"}}src="https://images.unsplash.com/photo-1609601997352-a8f588e2e4e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero" />
      <img className="hero-image bounce-in-top" style ={{borderRadius: "10%",  padding:"10px"}}src="https://images.unsplash.com/photo-1609601997352-a8f588e2e4e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero" />
      </div>



      <section id="clients" className={` mt-20  flex-col  `}>
        <div className=" flex justify-center  md:flex-col flex-col relative z-[1]">
          <h3 className={`font-poppins navbarfont  xs:text-[30px] text-[19px] text-white xs:leading-[76.8px] leading-[66.8px] w-full`} >
            IN CONTACT WITH
          </h3>
        </div>
       
      </section>
    </div>
  );
};

export default Hero;
