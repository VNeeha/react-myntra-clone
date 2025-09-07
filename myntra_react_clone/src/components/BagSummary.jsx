// STYLES
import styles from "../css/BagSummary.module.css";

const BagSummary = ({ bagItems }) => {
  const totalItem = bagItems.length;
  const CONVINIENCE_FEE = 99;
  let totalMRP = 0;
  let totalDiscount = 0;
  for (let item of bagItems) {
    totalMRP += item.original_price;
    totalDiscount += item.original_price - item.current_price;
  }

  const finalPayment = totalMRP + CONVINIENCE_FEE - totalDiscount;

  return (
    <div className={`card ${styles.bagSummaryCard}`}>
      <div className="card-body">
        {/* Header */}
        <h6 className="card-title fw-bold mb-3">
          PRICE DETAILS ({totalItem} Items)
        </h6>

        {/* Price details */}
        <div className="d-flex justify-content-between mb-2">
          <span>Total MRP</span>
          <span>₹{totalMRP}</span>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <span>Discount on MRP</span>
          <span className="text-success">-₹{totalDiscount}</span>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <span>Convenience Fee</span>
          <span>₹{CONVINIENCE_FEE}</span>
        </div>

        <hr />

        <div className="d-flex justify-content-between fw-bold mb-3">
          <span>Total Amount</span>
          <span>₹{finalPayment}</span>
        </div>

        {/* Place Order button */}
        <button className="btn btn-dark w-100">PLACE ORDER</button>
      </div>
    </div>
  );
};
export default BagSummary;
