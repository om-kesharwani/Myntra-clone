 import { useDispatch,useSelector} from "react-redux";
import { BagActions } from "../store/BagSlice";
import { MdAddShoppingCart,MdRemoveShoppingCart } from "react-icons/md";

const HomeItem =({item})=>{
  const dispatch =useDispatch();
  const Bag = useSelector(store => store.Bag);
  const elementFound =Bag.indexOf(item.id)>=0;

  const Handle =()=>{
       console.log("hmm");
       dispatch(BagActions.addToBag(item.id));
  }
  const HandleRemove =() =>{
        dispatch(BagActions.removeFromBag(item.id));
  }
  return(

    <>
    <div class="item-container">
      <img class="item-image" src={item.image}alt="item image"/>
      <div class="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div class="company-name">{item.company}</div>
      <div class="item-name">{item.item_name}</div>
      <div class="price">
          <span class="current-price">Rs {item.current_price}</span>
          <span class="original-price">Rs {item.original_price}</span>
          <span class="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {/* <button class="btn-add-bag" onClick={Handle}>Add to Bag</button> */}
     { elementFound?<button type="button" class="btn btn-add-bag btn-danger"onClick={HandleRemove}>
        <MdRemoveShoppingCart />
      </button>:
      <button type="button" class="btn btn-add-bag btn-success"   onClick={Handle} ><MdAddShoppingCart /></button>}
      
      
    </div>;
    </>
  )
}
export default HomeItem;