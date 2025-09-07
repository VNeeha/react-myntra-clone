// EXTERNAL FUNCTIONALITIES
import { useSelector } from "react-redux";

// CUSTOM COMPONENTS
import HomeItem from "../components/HomeItem";

const Home = () => {
  const items = useSelector((store) => store.items);

  return (
    <main className="container my-4">
      <div className="row g-4">
        {items.map((item) => (
          <div key={item.id} className="col-6 col-md-4 col-lg-3">
            <HomeItem item={item} />
          </div>
        ))}
      </div>
    </main>
  );
};
export default Home;
