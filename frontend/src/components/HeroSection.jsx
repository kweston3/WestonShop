import { Link } from "react-router-dom";

const HeroSection = ({ product }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "400px",
        overflow: "hidden",
      }}
    >
      <Link to={`/product/${product._id}`}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Link>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <Link
          to={`/product/${product._id}`}
          style={{ textDecoration: "none", color: "#fff" }}
        >
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", margin: "0" }}>
            {product.name}
          </h1>
          <p>50% off - now thru December 1, 2024</p>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
