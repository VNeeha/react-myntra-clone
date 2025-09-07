// STYLES
import styles from "../css/App.module.css";
// REACT-ICONS
import { AiOutlineClose } from "react-icons/ai";
// ACTIONS FROM SLICES
import { bagActions } from "../store/bagSlice";
// EXTERNAL FUNCTIONALITIES
import { useDispatch } from "react-redux";

const BagItem = ({ item }) => {
  const dispatch = useDispatch();
  // REMOVE FROM BAG
  const removeFromBagHandler = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };
  return (
    <div className={`card mb-3 position-relative ${styles.bagItemCard}`}>
      {/* Remove Icon */}
      <button
        className="btn btn-sm btn-light position-absolute top-0 end-0 m-2"
        title="Remove"
        onClick={removeFromBagHandler}
      >
        <AiOutlineClose size={18} />
      </button>

      <div className="row g-0 align-items-center">
        {/* Image */}
        <div className="col-4 col-md-3">
          <img
            src={item.image}
            alt={item.item_name}
            className="img-fluid rounded-start"
          />
        </div>

        {/* Item Details */}
        <div className="col-8 col-md-9">
          <div className="card-body p-2 p-md-3">
            <h6 className="card-title mb-1">{item.company}</h6>
            <p className="card-text mb-2 text-muted">{item.item_name}</p>

            {/* Prices */}
            <p className="mb-1">
              <span className="fw-bold me-2">₹{item.current_price}</span>
              <span className="text-muted text-decoration-line-through me-2">
                ₹{item.original_price}
              </span>
              <span className="text-success">
                ({item.discount_percentage}% OFF)
              </span>
            </p>

            {/* Return + Delivery */}
            <p className="small mb-1">
              <span className="fw-bold">{item.return_period} days</span> return
              available
            </p>
            <p className="small text-muted mb-0">
              Delivery by <span className="fw-bold">{item.delivery_date}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BagItem;
