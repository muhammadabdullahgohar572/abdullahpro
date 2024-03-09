import { Bangquee } from "../compoents/Bangquee"
import { Banking } from "../compoents/Banking"
import { Button } from "../compoents/Buttons"
import { Cheak } from "../compoents/Cheak"
import { Companylogo } from "../compoents/Companylogo"
import { Companylogoes } from "../compoents/Companylogoes"
import { Fin } from "../compoents/Fin"
import { Footer } from "../compoents/Footer"
import { Hero } from "../compoents/Hero"
import { Herolast } from "../compoents/Herolast"
import { Last } from "../compoents/Last"
import { Navbar } from "../compoents/Nav"
import { Need } from "../compoents/Need"
import { Organ } from "../compoents/Organ"
import { People } from "../compoents/People"
import { Perfect } from "../compoents/Perfect"
import { Rating } from "../compoents/Rating"
import { Senddata } from "../compoents/Senddata"
import { Stay } from "../compoents/Stay"
import { Tools } from "../compoents/Tools"



export const Home=()=>{
    return(
        <>
       <Navbar/>
        <Banking/>
        <Cheak/>
        <Senddata/>
       <Organ/>
       <Hero/>
       <Stay/>
        <Companylogo/>
        <Companylogoes/>
        <Tools/>
        <Perfect/>
        <Bangquee/>
        <Button/>
        <People/>
        <Rating/>
        <Herolast/>
        <Need/>
        <Rating/>
        <Footer/>
        <Last/>
        <Fin/>



        </>
    )
}
