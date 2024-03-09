import Tool from "../Imges/images.png"

export const Tools=()=>{
    return(
        <div className="Tools">
        

        <div>
          <h4>500</h4>
          <h1 className="Seemless">Seemless<br/>
          integration</h1>
          <div className="tools">
          <span>Amet minim mollit non deserunt ullamco est <br/>sit aliqua dolor do
           amet sint. Velit officia consequat<br/> duis enim velit mollit.</span></div>
        </div>

         <div className="tooo">
         
           <div className="sin1">
             <img src={Tool} alt=""  className="Toolsimg"/>
             <span>Secure and encrypted integration</span>
           </div>
            
           <div className="sin1">
             <img src={Tool} alt=""  className="Toolsimg"/>
             <span>Fully API interface</span>
           </div>

           <div className="sin1">
             <img src={Tool} alt=""  className="Toolsimg"/>
             <span>Payments worldwide</span>
           </div>


         </div>


        </div>
    )
}