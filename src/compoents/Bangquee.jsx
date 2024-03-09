import vector from "../Imges/Vector.png"
import card from "../Imges/card mastercard.png"
export const Bangquee=()=>{
    return(
        <div className="perf">
         <div>
         <div className="one">
          <div className="onew"><span>banquee.</span></div>
          <div className="onew"><img src={vector} alt="" className="vectorimg" /></div>
         </div>

         <div className="two">
          <div className="onew"><span>banquee.</span></div>
          <div className="onew"><img src={vector} alt="" className="vectorimg" /></div>
         </div>


         <div className="threeword">
         <div className="three">
          <div className="onew"><span>banquee.</span></div>
          <div className="onew"><img src={vector} alt="" className="vectorimg" /></div>
         </div>

           <div className="pass">
          <span>1234</span>
          <span>5420</span>
          <span> 9687</span>
          <span>1320</span>
          
           </div>

             <div className="cus">
              <div className="cusw">
              <div>
                <span>Card Holder</span>
                <h4>John Doe</h4>
                </div>
                <div className="date">
                <span>Expiry Date</span>
                <h4>09/28</h4> 
                </div>
              </div>

                  <div>
                    <img src={card} alt="" className="cards" />
                  </div>
             </div>
             </div>

         </div>

        </div>
    )
}