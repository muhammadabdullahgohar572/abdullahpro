import lap from "../Imges/twemoji_laptop.png"
import cycle from "../Imges/twemoji_bicycle.png"
import arop from "../Imges/twemoji_airplane.png"
import camra from "../Imges/twemoji_camera-with-flash.png"
import plus from "../Imges/Frame 8.png"
export const Hero=()=>{
    return(
    <div className="Herop">
       <div>
     <div className="lapt">
        <img src={lap} alt="" className="lapim"/>
     </div>
      <div style={{marginTop:20}}>
        <h3>New Laptop</h3><br/>
        <span>400$</span>
      </div>
     </div>



     <div>
      <div className="cycle">
        <img src={cycle} alt="" className="cycleimg" />
      </div>
      <div style={{marginTop:20}}>
        <h3>Dream bike</h3><br/>
        <span>200$</span>
      </div>
    </div>

     <div>
     
      <div className="aropalne">
    <img src={arop} alt="" className="aropimg" />
      </div>
     <div style={{marginTop:20}}>
        <h3>Holiday</h3><br/>
        <span>14000$</span>
     </div>


     </div>

        
        <div >
      <div className="camra">
        <img src={camra} alt=""  className="camraimg" />
      </div>

      <div style={{marginTop:20}}>
        <h3>Camera</h3><br/>
        <span>100$</span>
      </div>


        </div>

      <div className="plus">
        <img src={plus} alt="" className="plusimg" />
      </div>



    </div>
    )
}