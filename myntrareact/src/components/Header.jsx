import { FaPerson } from "react-icons/fa6";
import { FaListOl } from "react-icons/fa6";
import { IoBagAddSharp } from "react-icons/io5";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
const Header=()=>{

  const  Bag = useSelector(store => store.Bag);
  return(
    <>
     <header>
        <div class="logo_container">
            <Link  to="/"><img class="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home"/></Link>
        </div>
        <nav class="nav_bar">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Studio <sup>New</sup></a>
        </nav>
        <div class="search_bar">
            <span class="material-symbols-outlined search_icon">search</span>
            <input class="search_input" placeholder="Search for products, brands and more"/>
        </div>
        <div class="action_bar">
            <div class="action_container">
                
                <FaPerson />
                <span class="action_name">Profile</span>
            </div>

            <div class="action_container">
               
                <FaListOl />
                <span class="action_name">Wishlist</span>
            </div>

            <Link class="action_container" to="/bag">
               
                <IoBagAddSharp />

                <span class="action_name">Bag</span>
                <span class="bag-item-count">{Bag.length}</span>
            </Link>
        </div>
    </header>
    </>
  )
}
export default Header;