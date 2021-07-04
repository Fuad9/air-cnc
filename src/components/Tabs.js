import React from "react";
import GuestProfile from "../pages/GuestProfile/GuestProfile";
import HouseRules from "../pages/HouseRules/HouseRules";
import rightArrow from "../images/photos/arrow-ios-forward-outline-2.png";
import ProcessPayment from "../pages/Payment/PaymentForm";

const Tabs = () => {
  return (
    <div className="container">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <h3
            class="nav-link active border-none"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            1. Reviews house rules
          </h3>
        </li>
        <div className="d-flex align-items-center">
          <img src={rightArrow} alt="" />
        </div>
        <li class="nav-item" role="presentation">
          <h3
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="true"
          >
            2. Who’s coming?
          </h3>
        </li>
        <div className="d-flex align-items-center">
          <img src={rightArrow} alt="" />
        </div>
        <li class="nav-item" role="presentation">
          <h3
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="true"
          >
            3. Confirm and pay
          </h3>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <HouseRules />
        </div>
        <div
          class="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <GuestProfile />
        </div>
        <div
          class="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <ProcessPayment />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
