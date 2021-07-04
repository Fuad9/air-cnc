import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";
//styles
import "./Hotels.scss";
//images
import hotel1 from "../../images/photos/asset-1.png";
import hotel2 from "../../images/photos/the-atlantic-apartments-1br-classical-kitchen-solis.png";
import hotel3 from "../../images/photos/photo-1.png";
//components
import NavBar from "../../components/NavBar";
import Maps from "../../components/Maps";

const Hotels = () => {
  const styles = {
    textStyle: {
      textDecoration: "none",
      color: "#fff",
    },
  };

  return (
    <>
      <NavBar />
      <section className="container hotels">
        <div className="split">
          <div>
            <h6>252 stays Apr 13-17 3 guests</h6>
            <h3>Stay in Dhaka Division</h3>
            <div className="features">
              <h6>Cancellation flexibility</h6>
              <h6>Type of place</h6>
              <h6>Price</h6>
              <h6>Instant Book</h6>
              <h6>More Filters</h6>
            </div>

            <Link to="/placeDetails" style={styles.textStyle}>
              <div className="hotel-list">
                <div>
                  <img src={hotel1} alt="" />
                </div>
                <div>
                  <h4>Light bright airy stylish apt & safe peaceful stay</h4>
                  <h6>4 guests 2 bedrooms 2 beds 2 baths</h6>
                  <h6>Wifi Air conditioning Kitchen</h6>
                  <h6 className="my-4">Cancellation flexibility availiable</h6>
                  <div className="d-flex justify-content-between">
                    <span className="d-flex">
                      <StarRatingComponent
                        name="rate1"
                        starCount={1}
                        starColor={"#40e37c"}
                        value={1}
                      />
                      <p>
                        <span className="font-bold">4.9</span> (20)
                      </p>
                    </span>
                    <span>
                      <h4>$34/ night</h4>
                      <p>$167 total</p>
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/placeDetails" style={styles.textStyle}>
              <div className="hotel-list">
                <div>
                  <img src={hotel2} alt="" />
                </div>
                <div>
                  <h4>Apartment in Lost Panorama</h4>
                  <h6>4 guests 2 bedrooms 2 beds 2 baths</h6>
                  <h6>Wifi Air conditioning Kitchen</h6>
                  <h6 className="my-4">Cancellation flexibility availiable</h6>
                  <div className="d-flex justify-content-between">
                    <span className="d-flex">
                      <StarRatingComponent
                        name="rate1"
                        starCount={1}
                        starColor={"#40e37c"}
                        value={1}
                      />
                      <p>
                        <span className="font-bold">4.8</span> (10)
                      </p>
                    </span>
                    <span>
                      <h4>$52/ night</h4>
                      <p>$167 total</p>
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/placeDetails" style={styles.textStyle}>
              <div className="hotel-list">
                <div>
                  <img src={hotel3} alt="" />
                </div>
                <div>
                  <h4>AR Lounge & Pool (r&r + b&b)</h4>
                  <h6>4 guests 2 bedrooms 2 beds 2 baths</h6>
                  <h6>Wifi Air conditioning Kitchen</h6>
                  <h6 className="my-4">Cancellation flexibility availiable</h6>
                  <div className="d-flex justify-content-between">
                    <span className="d-flex">
                      <StarRatingComponent
                        name="rate1"
                        starCount={1}
                        starColor={"#40e37c"}
                        value={1}
                      />
                      <p>
                        <span className="font-bold">4.9</span> (25 reviews)
                      </p>
                    </span>
                    <span>
                      <h4>$44/ night</h4>
                      <p>$167 total</p>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Google map ============= */}
          <div style={{ width: "100%", height: "100vh" }}>
            <Maps />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hotels;
