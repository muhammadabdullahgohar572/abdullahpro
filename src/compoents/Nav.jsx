// import { Link } from "react-router-dom"

export const Navbar=()=>{
    return(
        <>
       <div className="nav">
       <div>
        <span className="banquee">banquee</span>
       </div>
  
       <div className="op">
       {/* <Link to="/features"> */}
        <span>Features</span>
        {/* </Link> */}
        <select className="compare">
            <option >Compare</option>
        </select>
        <span>Support</span>
      
        <select className="compare">
            <option>Blog</option>
        </select>
       </div>
       <div>     
     <a href="#" className="login">Login</a>
      <button className="openAccount">open Account</button>
       </div>

       </div>

        </>
    )
}