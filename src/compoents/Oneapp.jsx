
import badge from "../Imges/badge.png"
import badgw from "../Imges/badge (1).png"
import badm from "../Imges/badge (3).png"
import badr from "../Imges/badge (2).png"
import badc from "../Imges/badge (4).png"
import badw from "../Imges/badge (5).png"
import bada from "../Imges/app.jpg"
export const Oneapp=()=>{
    return(
        <>
        <div className="p1">
        <div className="problem">
        <div className="moblie">
       
       <div>
     <div>
        <h2 className="oneapph1">One app.<br/>
       One banking.</h2>
     </div>
     
     <div className="one1">
        <div>
       <div className="Instant">
         <img src={badge} alt="" className="bad"/><br/>
         <h4>Instant  <br/>
         transactions</h4>
         <span className="odio">Odio euismod lacinia at quis.<br/>
          Amet purus gravida quis<br/>
           blandit turpis.</span>
       </div>
           </div>

           <div>
       <div className="Instant">
         <img src={badgw} alt="" className="bad"/><br/>
         <h4>Saving 
        accounts</h4>
         <span className="odio">
          Odio euismod lacinia at quis. <br/>
          Amet purus gravida quis <br/>
          blandit turpis.</span>
       </div>
     </div>
      </div>

     <div className="one1">
       
       <div className="Instant">

         <img src={badm} alt="" className="bad"/><br/>

         <h4>Mobile <br/> 
             banking</h4>

         <span className="odio">
          Odio euismod lacinia at quis. <br/>
          Amet purus gravida quis<br/>
           blandit turpis.</span>
       </div>


       <div className="Instant">
         <img src={badr} alt="" className="bad"/><br/>
         <h4>  Advance <br/>
          statistics</h4>
         <span className="odio">
          Odio euismod lacinia at quis.<br/>
           Amet purus gravida quis<br/>
            blandit turpis.</span>
       </div>
     </div>


     <div className="one1">
       
       <div className="Instant">

         <img src={badc} alt="" className="bad"/><br/>

         <h4> Virtual <br/> 
         cards</h4>

         <span className="odio">
          Odio euismod lacinia at quis.<br/>
           Amet purus gravida quis<br/>
            blandit turpis.</span>
       </div>


       <div className="Instant">
         <img src={badw} alt="" className="bad"/><br/>
         <h4> Contactless<br/>
          payments</h4>

         <span className="odio">
          Odio euismod lacinia at quis.<br/>
           Amet purus gravida quis<br/>
            blandit turpis.</span>
       </div>
     </div>
       </div>
        </div>

        <div className="">
    <img src={bada} alt="" className="badaa" />
   </div>
   
   
   
   </div>
   </div>
        </>
    )
}