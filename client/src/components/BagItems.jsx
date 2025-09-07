// CUSTOM COMPONENTS
import BagItem from "./BagItem";

const BagItems = ({ bagItems }) => {
  return (
    <div className="bag-items-container">
      {bagItems.map((item) => (
        <BagItem key={item.id} item={item} />
      ))}
    </div>
  );
};
export default BagItems;
