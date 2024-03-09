import call from "../Imges/badge (6).png"
import mess from "../Imges/badge (7).png"
import vec from "../Imges/Vector (1).png"
import worong from "../Imges/Vector (2).png"
export const  Need =()=>{
return(
    <>
    <div className="Need">
    <div>
   <h1 className="Needhelp">Need help?</h1>
    <div className="call">
     <div>
        <img src={call}alt="" className="ok" />
     </div>
     <div>
        <span>+49 176 123 456</span><br/>
        <span>Support Hotline</span><br/>
     </div>
    </div>
    
    <div className="call1">
     <div>
        <img src={mess}alt="" className="ok" />
     </div>
     <div>
        <span>help@bank.com</span><br/>
        <span>Support Email</span><br/>
     </div>
    </div>

   <div className="Support">
    <span >Support</span>
   </div>
    </div>
    





<dir>

<div className="option">
<div>
    <span>How do I open an Banko account?</span>
</div>
<div className="vec">
    <img src={vec} alt=""  />
</div>
</div>
<hr/>

<div className="option1">
<div>
    <span>How do I order a new card?</span>
</div>
<div className="vec">
    <img src={vec} alt=""  />
</div>
</div>
<hr/>


<div className="option2">
<div>
    <span>How to change my account limits?</span>
</div>
<div className="vec">
    <img src={vec} alt=""  />
</div>
</div>
<hr/>

<div className="option2">
<div>
    <span>How does Banko premium works?</span>
</div>
<div className="vec">
    <img src={worong} alt=""  /><br/>
</div>
</div>
<div className="lo">
<span>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
 Similique minus at, reprehenderit labore voluptatibus nihil <br/>
 velit, nesciunt fugit aliquid corporis iste inventore provident<br/>
  exercitationem, magni eum. Odit pariatur accusantium nihil!</span>
</div>
<hr/>

<div className="option2">
<div>
    <span>Can I have two Banko accounts?</span>
</div>
<div className="vec">
    <img src={vec} alt=""  />
</div>
</div>
</dir>


</div>
<hr/>
    </>
)
}