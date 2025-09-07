// STYLES
import styles from "../css/App.module.css";

const HomeItem = ({ item }) => {
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

        {/* Add Button (disabled for now) */}
        <button className="btn btn-sm btn-dark mt-auto" disabled>
          Add to Bag
        </button>
      </div>
    </div>
  );
};
export default HomeItem;
