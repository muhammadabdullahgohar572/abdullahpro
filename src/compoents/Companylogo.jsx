
import shoplogo from "../Imges/download.png"
import bit from "../Imges/bitcoin-btc-logo.png"
export const Companylogo=()=>{
    return(
        <div className="Companylogos">
          
          <div className="webflow">
           <h3>webflow</h3>
          </div>
           
          <div className="Shopify">
             
           <img src={shoplogo} alt="" className="shoplogo"/>
           <span>Shopify</span>
             
          </div>
           
          <div className="Zapier">
           <h3>Zapier</h3>
          </div>


          <div className="Shopify">
             
             <img src={bit} alt="" className="shoplogo"/>
             <span>bitcoin</span>
               
            </div>
            

        </div>
    )
}