// STYLES
import "bootstrap/dist/css/bootstrap.min.css"; // already there
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // <-- add this

// CUSTOM COMPONENTS
import Header from "../components/Header";
import Footer from "../components/Footer";
import useFetchItems from "../hooks/useFetchItems";
import LoadingSpinner from "../components/LoadingSpinner";

// EXTERNAL COMPONENTS
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const { fetchInProgress } = useSelector((store) => store.fetchStatus);
  useFetchItems();
  return (
    <>
      <Header />
      {fetchInProgress ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
