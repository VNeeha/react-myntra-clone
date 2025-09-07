// STYLES
import styles from '../css/BagSummary.module.css'

const BagSummary = () => {
  const summary = {
    totalItem: 5,
    totalMRP: 5000,
    totalDiscount: 2000,
    finalPayment: 3000,
  };

  return (
    <div className={`card ${styles.bagSummaryCard }`}>
      <div className="card-body">
        {/* Header */}
        <h6 className="card-title fw-bold mb-3">
          PRICE DETAILS ({summary.totalItem} Items)
        </h6>

        {/* Price details */}
        <div className="d-flex justify-content-between mb-2">
          <span>Total MRP</span>
          <span>₹{summary.totalMRP}</span>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <span>Discount on MRP</span>
          <span className="text-success">-₹{summary.totalDiscount}</span>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <span>Convenience Fee</span>
          <span>₹99</span>
        </div>

        <hr />

        <div className="d-flex justify-content-between fw-bold mb-3">
          <span>Total Amount</span>
          <span>₹{summary.finalPayment}</span>
        </div>

        {/* Place Order button */}
        <button className="btn btn-dark w-100">
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};
export default BagSummary;
