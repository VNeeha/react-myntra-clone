// EXTERNAL FUNCTIONALITIES
import { useSelector } from "react-redux";

// CUSTOM COMPONENTS
import BagItems from "../components/BagItems";
import BagSummary from "../components/BagSummary";

const Bag = () => {
  const items = useSelector((store) => store.items);
  const bagIds = useSelector((store) => store.bag);
  const bagItems = items.filter((item) => bagIds.includes(item.id));

  return (
    <main className="container my-4">
      <div className="row">
        {/* Bag Items (Left side, larger) */}
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <BagItems bagItems={bagItems} />
        </div>

        {/* Bag Summary (Right side) */}
        <div className="col-12 col-md-6">
          <BagSummary bagItems={bagItems} />
        </div>
      </div>
    </main>
  );
};
export default Bag;
