import FetchItem from "../components/FetchItem"
import Footer from "../components/Footer"
import Header from "../components/Header"

import {Outlet} from "react-router-dom"




function App() {
  
  
  
  
  

  return (
    <>
      <div>
   <Header></Header>
    <FetchItem></FetchItem>  
     <Outlet/>
   
    
    <Footer/>
       </div>
    </>
  )
}

export default App
