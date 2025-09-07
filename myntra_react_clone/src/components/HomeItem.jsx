// STYLES
import styles from "../css/App.module.css";
// EXTERNAL FUNCTIONALITIES
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

// ACTIONS FROM SLICES
import { bagActions } from "../store/bagSlice";

const HomeItem = ({ item }) => {
  const bagIds = useSelector((store) => store.bag);
  const addedToBag = bagIds.includes(item.id);

  const dispatch = useDispatch();
  // ADD TO BAG
  const addToBagHandler = () => {
    dispatch(bagActions.addToBag(item.id));
  };
  // REMOVE FROM BAG
  const removeFromBagHandler = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <div className={`card h-100 ${styles.homeItemCard}`}>
      {/* Image */}
      <img
        src={item.image}
        alt={item.item_name}
        className="card-img-top"
        style={{ objectFit: "contain", height: "250px", background: "#fff" }}
      />

      {/* Body */}
      <div className="card-body d-flex flex-column">
        {/* Rating */}
        <p className="small text-muted mb-1">
          {item.rating.stars} ⭐ | {item.rating.count}
        </p>

        {/* Company & Item */}
        <h6 className="card-title mb-1">{item.company}</h6>
        <p className="card-text small mb-2">{item.item_name}</p>

        {/* Prices */}
        <p className="mb-2">
          <span className="fw-bold me-2">₹{item.current_price}</span>
          <span className="text-muted text-decoration-line-through me-2">
            ₹{item.original_price}
          </span>
          <span className="text-success">
            ({item.discount_percentage}% OFF)
          </span>
        </p>

        {addedToBag ? (
          <button
            className="btn btn-sm btn-success mt-auto"
            onClick={removeFromBagHandler}
          >
            Remove from Bag
          </button>
        ) : (
          <button
            className="btn btn-sm btn-success mt-auto"
            onClick={addToBagHandler}
          >
            Add to Bag
          </button>
        )}
      </div>
    </div>
  );
};
export default HomeItem;
