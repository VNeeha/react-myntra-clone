
// CUSTOM COMPONENTS
import HomeItem from "../components/HomeItem";

const Home = () => {
  const items = [
    {
      id: "001",
      image: "images/1.jpg",
      company: "Carlton London",
      item_name: "Rhodium-Plated CZ Floral Studs",
      original_price: 1045,
      current_price: 606,
      discount_percentage: 42,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: {
        stars: 4.5,
        count: 1400,
      },
    },
    // you can add more items here...
  ];

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
