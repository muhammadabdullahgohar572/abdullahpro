import Card from '../Imges/cards.png'
import chaeksin from "../Imges/images.png"
export const Banking=()=>{
    return(
        <>
       <div className="bankingall">


       <div className='imgcard'>

        <h1 className="banking">
        Banking<br/>
        starts here.
        </h1>
       <div className='sit'>
    <span className='lo'>
    Lorem ipsum dolor sit amet, consectetur adipiscing <br/>
    elit, sed do eiusmod tempor incididunt ut labore.<br/>
    </span></div> 
         
     <div className="img1">

       <div className='sin'>
       <img src={chaeksin} alt="" style={{width:20,height:20,marginRight:20}} /><span>Instant Transfer</span>
       </div>

      <div className='sin'>
      <img src={chaeksin} alt="" style={{width:20,height:20,marginRight:20}}/>
      <span>Payments worldwide</span>

      </div>

      </div>
      <div className="img1">
       <div className='sin'>
       <img src={chaeksin} alt="" style={{width:20,height:20,marginRight:20}}/>
      <span>Saving accounts</span>
       </div>
      <div className='sin'>
        <img src={chaeksin} alt="" style={{width:20,height:20,marginRight:20}}/>
      <span>100% mobile banking</span>
      </div>
      </div>


        <div className='comp'>

         <button  className='openAccount'>Open Account</button>
         <span className='arrow'>Compare Cards</span>

        </div>
     </div>         
   <div>
    <img src={Card} className='johan' alt=""  />
   </div>



      </div>
        </>
    )
}