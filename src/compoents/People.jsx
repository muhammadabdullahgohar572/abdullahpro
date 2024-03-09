import star from "../Imges/ri_star-fill.png"

export const People=()=>{
    return(
        <div className="people">
           <div>
        <span>Testimonials</span><br/>
        <h1 className="peopleh1">People all over the <br/>world use banko.</h1>
           </div>





           <div>
             
                 <img src={star} alt="" className="star"/>
                <span className="rated">Rated 4.8/5 from over 1000 users</span>
           </div>
        </div>
    )
}