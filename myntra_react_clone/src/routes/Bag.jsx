

// CUSTOM COMPONENTS
import BagItems from "../components/BagItems";
import BagSummary from "../components/BagSummary";

const Bag = () => {
  return (
    <main className="container my-4">
      <div className="row">
        {/* Bag Items (Left side, larger) */}
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <BagItems />
        </div>

        {/* Bag Summary (Right side) */}
        <div className="col-12 col-md-6">
          <BagSummary />
        </div>
      </div>
    </main>
  );
};
export default Bag;
