import app from "../Imges/app.jpg"
import badge from "../Imges/badge.png"
import badgw from "../Imges/badge (1).png"
import badm from "../Imges/badge (3).png"
import badr from "../Imges/badge (2).png"
import badc from "../Imges/badge (4).png"
import badw from "../Imges/badge (5).png"

export const Cheak=()=>{
    return(
        <>
         <div className="cheak">
         <div>
         <h1 className="one1">One app.<br/>
       One banking.</h1>
         
    
      <div className="cards30">

<div className="cards25">

 <img src={badge} alt=""  /><br/>
<h4>Mobile<br/>
 banking<br/></h4><br/>
 <span>
   Odio euismod lacinia at quis. <br/>
   Amet purus gravida quis <br/>
   blandit turpis.</span>
</div>
<div className="cards25">

 <img src={badgw} alt=""  /><br/>
 <h4>Saving<br/>
 accounts<br/></h4><br/>
 <span>
   Odio euismod lacinia at quis. <br/>
   Amet purus gravida quis <br/>
   blandit turpis.</span>
</div>
</div>
      
      <div className="cards30">

       <div className="cards25">
       
        <img src={badm} alt=""  /><br/>
       <h4>Mobile<br/>
        banking<br/></h4><br/>
        <span>
          Odio euismod lacinia at quis. <br/>
          Amet purus gravida quis <br/>
          blandit turpis.</span>
       </div>
       <div className="cards25">
       
        <img src={badr} alt=""  /><br/>
        <h4>Advanced<br/>
        statistics<br/></h4><br/>
        <span>
          Odio euismod lacinia at quis. <br/>
          Amet purus gravida quis <br/>
          blandit turpis.</span>
       </div>
      </div>
 <div className="cards30">

<div className="cards25">

 <img src={badc} alt=""  /><br/>
<h4>Mobile<br/>
 banking<br/></h4><br/>
 <span>
   Odio euismod lacinia at quis. <br/>
   Amet purus gravida quis <br/>
   blandit turpis.</span>
</div>
<div className="cards25">

 <img src={badw} alt=""  /><br/>
 <h4>Virtual 
cards<br/>
 </h4><br/>
 <span>
   Odio euismod lacinia at quis. <br/>
   Amet purus gravida quis <br/>
   blandit turpis.</span>
</div>
</div>
      
   
















         </div>












          <div>
          <img src={app} alt="" className="app" />
          </div>
         </div>    
            </>
        )
}