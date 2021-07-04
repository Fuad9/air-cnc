import React, { useEffect, useState } from "react";
import StarRatingComponent from "react-star-rating-component";
import { Dropdown, Button } from "react-bootstrap";
//components
import StartingDate from "./StartingDate";
import EndingDate from "./EndingDate";
//utilities
import { getFromDatabase } from "../utilities/storageManager";
//styles
import "./PricingCard.scss";
//images
import room from "../images/photos/photo-1522708323590-d24dbb6b0267.png";

const PricingCard = () => {
  const [data, setData] = useState({});

  /*total guest count from localStorage ==================*/
  const totalGuests = data.adults + data.childs + data.babies;

  /* Retrieving guests data from the localStorage ================= */
  useEffect(() => {
    const getData = getFromDatabase();
    setData(getData);
  }, []);

  return (
    <>
      <div className="pricing-card shadow p-3">
        <div>
          <span>
            <h3>Light bright airy stylish apt & safe peaceful stay</h3>

            <span className="d-flex">
              <StarRatingComponent
                name="rate1"
                starCount={1}
                starColor={"#40e37c"}
                value={1}
              />
              <p>
                <span className="font-bold">4.9</span> (20 reviews)
              </p>
            </span>
          </span>
          <div>
            <img src={room} alt="" />
          </div>
        </div>

        <div className="mb-5">
          <h2>Dates</h2>
          <div className="date-picker">
            <div className="shadow input-date">
              <StartingDate />
            </div>
            <i class="bx bx-right-arrow-alt"></i>
            <div className="shadow input-date">
              <EndingDate />
            </div>
          </div>
        </div>

        <Dropdown className="dropdown-area mt-3">
          <h2>Guests</h2>
          <div>
            <Button variant="light">{totalGuests} Guests</Button>
            <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />
          </div>

          <Dropdown.Menu>
            <Dropdown.Item className="guests-item">
              {data.adults} Adults
            </Dropdown.Item>
            <Dropdown.Item className="guests-item">
              {data.childs} Childs
            </Dropdown.Item>
            <Dropdown.Item className="guests-item">
              {data.babies} Babies
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div className="pricing-area">
          <div className="d-flex justify-content-between align-items-center">
            <h6>$34 x 4 nights</h6>
            <h6>$136</h6>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <h6>Cleaning fee</h6>
            <h6>$10</h6>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <h6>Service fee</h6>
            <h6>$10</h6>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <h6>Total </h6>
            <h6>$156</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingCard;
