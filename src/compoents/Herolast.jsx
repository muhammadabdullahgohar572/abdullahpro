import chaeksin from "../Imges/images.png"
import stor from "../Imges/Google Store.svg"
import appl from "../Imges/Apple Store.svg"
import appp from "../Imges/app.svg"
export const Herolast=()=>{
    return(
        <div className="Herolast">
          <div className="Herolastwork">
           <h1>One app.<br/>
           One banking.</h1>
           <div className="lo">
           <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br/>
            do eiusmod tempor incididunt ut labore et dolore magna.</span></div>



            <div className="img1">

<div className="sin">
<img src={chaeksin} alt=""  className="problem"/>
<span>Instant Transfer</span>
</div>

<div className="sin">
<img src={chaeksin} alt=""  className="problem"/>
<span>Payments worldwide</span>

</div>

</div>
<div className="img1">
<div  className="sin">
<img src={chaeksin} alt=""  className="problem"/>
<span>Saving accounts</span>
</div>
<div className="sin">
 <img src={chaeksin} alt="" className="problem" />
<span>100% mobile banking</span>
</div>
</div>
      <div className="svg">
      <div>
   <img src={stor} alt="" className="stor" />
      </div>
      <div>
        <img src={appl} alt="" className="appl" />
      </div>
      </div>


          </div>








        <div>
        <img src={appp} alt=""  className="appp"  />
        </div>

        </div>
    )
}