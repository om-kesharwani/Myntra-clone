import BagItem from "./BagItem";
import Bagsummary from "./Bagsummary";
import {useSelector} from "react-redux"

const Bag = ()=>{
    const Bag =useSelector(state => state.Bag);
    const items =useSelector(state => state.items);
    const finalItems =items.filter(item =>{
      const itemIndex =Bag.indexOf(item.id);
      return itemIndex >= 0;
    })
  return(
    <>
    
    
    <main>
      <div class="bag-page">
        <div class="bag-items-container">
          {finalItems.map(item =>  <BagItem item={item}></BagItem>)}
        </div>
        <div class="bag-summary">
          <Bagsummary></Bagsummary>
        </div>

      </div>
    </main>
    
    </>
  )
}
export default Bag;