import play from "../Imges/PayPal.png"
import cion from "../Imges/download.jpeg"
import google from "../Imges/png-transparent-google-logo-google-text-trademark-logo.png"
import apple from "../Imges/download (2).png"
import amzone from "../Imges/amazon-icon-editorial-logo-isolated-260nw-2308438905.webp"
export const Companylogoes=()=>{
    return(
        <div className="Companylogoes">

          <div className="pay">
       <img src={play} alt="" className="play" />
          </div>

          <div className="cion">
       <img src={cion} alt="" className="cionplay" />
          </div>

          <div className="visa">
        <h2>visa</h2>
          </div>

          <div className="google">
       <img src={google} alt="" className="googleimg" />
       <div>
          <h3>Play</h3></div>
          </div>
         
           
          <div className="apple">
       <img src={apple} alt="" className="appleimg" />
       <div>
          <h3>Play</h3></div>
          </div>

          <div className="amazon">
       <img src={amzone} alt="" className="amazonimg" />
          </div>


        </div>
    )
}