const LoadingSpinner = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "50vh" }} // centers vertically
    >
      <div
        className="spinner-border text-black"
        role="status"
        style={{ width: "4rem", height: "4rem" }} // bigger spinner
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
