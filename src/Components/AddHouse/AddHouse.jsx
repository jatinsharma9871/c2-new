import axios from "axios";
import { useState } from "react";
export const AddHouse = () => {
  const [addhouse, setHouse] = useState({
    name: "",
    ownername: "",
    address: "",
    areaCode: "",
    rent: "",
    preferredTenant: "",
    img: "",
  });
  const handleChange = (e) => {
    let { id, value, checked, type } = e.target;
    value = type === "checked" ? checked : value;
    setHouse({
      ...addhouse,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/houses", addhouse).then(() => {
      alert("Successful");
      setHouse({
        name: "",
        ownername: "",
        address: "",
        areaCode: "",
        rent: "",
        preferredTenant: "",
        img: "",
      });
    });
  };
  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input
          onChange={handleChange}
          type="text"
          className="name"
          id="name"
          value={addhouse.name}
          required
        />
        <br />
        <label>ownerName</label>
        <input
          onChange={handleChange}
          value={addhouse.ownername}
          type="text"
          id="ownername"
          className="ownerName"
          required
        />
        <br />
        <label>address</label>
        <input
          onChange={handleChange}
          value={addhouse.address}
          type="text"
          id="address"
          className="address"
          required
        />
        <br />
        <label>areaCode</label>
        <input
          onChange={handleChange}
          value={addhouse.areaCode}
          type="text"
          id="areaCode"
          className="areaCode"
          required
        />
        <br />
        <label>rent</label>
        <input
          onChange={handleChange}
          value={addhouse.rent}
          type="text"
          id="rent"
          className="rent"
          required
        />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input
          onChange={handleChange}
          checked={addhouse.bachelor}
          type="checkbox"
          id="preferredTenant"
          className="bachelor"
          value="bachelor"
        />
        <br />
        <label>married</label>
        <input
          onChange={handleChange}
          checked={addhouse.married}
          type="checkbox"
          id="preferredTenant"
          className="married"
          value="married"
        />
        <br />
        <label>image</label>
        <input
          onChange={handleChange}
          value={addhouse.img}
          type="text"
          id="img"
          className="image"
          required
        />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};