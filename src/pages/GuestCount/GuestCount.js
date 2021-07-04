import React, { useState } from "react";
import { Link } from "react-router-dom";
import Autocomplete from "@material-ui/lab/Autocomplete";
//utilities
import { addToDatabase } from "../../utilities/storageManager";
//components
import StartingDate from "../../components/StartingDate";
import EndingDate from "../../components/EndingDate";
//styles
import "./GuestCount.scss";
//images
import minus from "../../images/photos/minus-outline.png";
import plus from "../../images/photos/plus-outline.png";
import search from "../../images/photos/search-outline.png";
import calendar from "../../images/photos/calendar-outline.png";
import TextField from "@material-ui/core/TextField";
import { countriesData } from "../../Data/countriesData";

const GuestCount = () => {
  const [state, setCounters] = useState({
    adultsCount: 0,
    childsCount: 0,
    babiesCount: 0,
  });

  /* Saving user data in the localStorage ====================== */
  const handleAddGuests = (key, value) => {
    addToDatabase(key, value);
  };

  const handleAddChilds = (key, value) => {
    addToDatabase(key, value);
  };

  const handleAddBabies = (key, value) => {
    addToDatabase(key, value);
  };

  return (
    <>
      <h3>Where do you want to go</h3>
      <div className="search-area mt-5">
        <h4 className="text-uppercase">location</h4>
        <Autocomplete
          id="country-select-demo"
          style={{ width: 300 }}
          options={countriesData}
          autoHighlight
          getOptionLabel={(option) => option.label}
          renderOption={(option) => (
            <React.Fragment>{option.label}</React.Fragment>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search by location..."
              variant="outlined"
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password",
              }}
            />
          )}
        />
      </div>

      <div className="my-5">
        <div className="date-picker">
          <div className="shadow input-date">
            <StartingDate />
            <img src={calendar} alt="" />
          </div>
          <div className="shadow input-date">
            <EndingDate />
            <img src={calendar} alt="" />
          </div>
        </div>
      </div>

      <div className="guest-count shadow p-5">
        <h4>Guests</h4>
        <span className="d-flex">
          <h4>
            <span>{state.adultsCount}</span> Adults
          </h4>
          ,
          <h4>
            <span>{state.childsCount}</span> Childs
          </h4>
          ,
          <h4>
            <span>{state.babiesCount}</span> Babies
          </h4>
        </span>

        <div>
          <h4>Adults</h4>
          <div className="btn-action">
            <img
              onClick={() => {
                setCounters({
                  ...state,
                  adultsCount:
                    state.adultsCount > 0
                      ? state.adultsCount - 1
                      : state.adultsCount,
                });
              }}
              src={minus}
              alt=""
            />
            <span>{state.adultsCount}</span>
            <img
              onClick={() => {
                setCounters({ ...state, adultsCount: state.adultsCount + 1 });
              }}
              src={plus}
              alt=""
            />
          </div>
        </div>

        <div>
          <h4>Childs</h4>
          <div className="btn-action">
            <img
              onClick={() => {
                setCounters({
                  ...state,
                  childsCount:
                    state.childsCount > 0
                      ? state.childsCount - 1
                      : state.childsCount,
                });
              }}
              src={minus}
              alt=""
            />
            <span>{state.childsCount}</span>
            <img
              onClick={() => {
                setCounters({ ...state, childsCount: state.childsCount + 1 });
              }}
              src={plus}
              alt=""
            />
          </div>
        </div>

        <div>
          <h4>Babies</h4>
          <div className="btn-action">
            <img
              onClick={() => {
                setCounters({
                  ...state,
                  babiesCount:
                    state.babiesCount > 0
                      ? state.babiesCount - 1
                      : state.babiesCount,
                });
              }}
              src={minus}
              alt=""
            />
            <span>{state.babiesCount}</span>
            <img
              onClick={() => {
                setCounters({ ...state, babiesCount: state.babiesCount + 1 });
              }}
              src={plus}
              alt=""
            />
          </div>
        </div>

        <div className="submit-btn">
          <Link to="/placeDetails">
            <button
              onClick={() => {
                handleAddGuests("adults", state.adultsCount);
                handleAddChilds("childs", state.childsCount);
                handleAddBabies("babies", state.babiesCount);
              }}
            >
              Apply
            </button>
          </Link>
        </div>
      </div>

      <Link to="/hotels">
        <button className="w-100">
          <img src={search} alt="" />
          Search
        </button>
      </Link>
    </>
  );
};

export default GuestCount;
