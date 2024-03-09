import no1 from "../Imges/image (1).png";
import no2 from "../Imges/image (2).png";
import no3 from "../Imges/image.png";


export const Footer=()=>{
    return(
        <div className="Footer">
          

          <div className="div">
              <img src={no3} alt=""  className="no1"/>
              <h4>How To Start Using Banko For<br/> Your Startup</h4><br/>
              <span>Lorem ipsum dolor sit amet, consectetur<br/>
             
             ut labore et dolore magna
                 
             <br/> aliqua. Dui accumsan <br/>
             sit amet nulla facilisi morbi.</span><br/>
                <div className="btnsbo1">
                <div id="btn1">
                    <button className="Product">Product</button>
                </div>
                <div id="btn2">
                <button className="Product">Technology</button>

                </div>
                </div>
          </div>


          <div className="div">
              <img src={no1} alt="" className="no1" />
              <h4>10 Things Nobody Told You<br/> About Banko</h4><br/>
              <span>Lorem ipsum dolor sit amet, consectetur<br/>
             
                ut labore et dolore magna

                <br/> aliqua. Dui accumsan <br/>
                sit amet nulla facilisi morbi.</span><br/>
                <div className="btnsbo1">
                <div id="btn1">
                    <button className="Product">Product</button>
                </div>
                <div id="btn2">
                <button className="Product">Technology</button>

                </div>
                </div>
          </div>


          <div className="div">
              <img src={no2} alt="" className="no1" />
              <h4>7 Ways To Improve You Saving<br/> Habits</h4><br/>
              <span>Lorem ipsum dolor sit amet, consectetur<br/>
             
                ut labore et dolore magna
                    
                <br/> aliqua. Dui accumsan <br/>
                sit amet nulla facilisi morbi.</span><br/>
                <div className="btnsbo1">
                <div id="btn1">
                    <button className="Product">Product</button>
                </div>
                <div id="btn2">
                <button className="Product">Technology</button>

                </div>
                </div>
          </div>



        </div>
    )
}