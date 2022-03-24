import axios from "axios";
import { useEffect, useState } from "react";
import "./Rentals.css";

export const Rentals = () => {
  const [house, setHouses] = useState([]);

  useEffect(() => {
    setJust();
  }, []);

  const setJust = () => {
    axios.get("http://localhost:8080/houses").then((res) => {
      setHouses(res.data);
    });
    console.log(house);
  };

  const sortByRentLow = () => {
    const arr = house.sort((a, b) => {
      return a.rent - b.rent;
    });
    setHouses(arr);
  };

  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById">Sort by ID</button>
        <button
          className="sortByRentAsc"
          onClick={() => {
            sortByRentLow();
          }}
        >
          Rent Low to high
        </button>
        <button className="sortByRentDesc">Rent High to low</button>
        <button className="sortByAreaAsc">Area Low to high</button>
        <button className="sortByAreaDesc">Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {house.map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownerName}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areaCode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">
                  {/* Show text Both or Bachelors or Married based on values */}
                  {house.bachelor && house.married
                    ? "Both"
                    : house.bachelor
                    ? "Bachelors"
                    : house.married
                    ? "Married"
                    : "Both"}
                </td>
                <td className="houseImage">
                  <img src={house.image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};