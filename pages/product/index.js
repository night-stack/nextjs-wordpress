import React from "react";

const Product = () => {
  const [data, setData] = React.useState({
    id: "",
    uid: "",
    name: "",
    gender: "",
    departement: "",
  });
  const [responseData, setResponseData] = React.useState(null);

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = (event) => {
    const token = "AIzaSyAa8yy0GdcGPHdtD083HiGGx_S0vMPScDM";
    fetch(
      "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL0DeL_F8LkfwFkhEhvVzVXR0Lci2Nbl8M&maxResults=20&key=AIzaSyAa8yy0GdcGPHdtD083HiGGx_S0vMPScDM"
    )
      .then((res) => res.json())
      .then((json) => {
        setResponseData(json);
      });
    // func dispatch

    setData({
      id: "",
      uid: "",
      name: "",
      gender: "",
      departement: "",
    });
    event.preventDefault();
  };

  return (
    <div>
      <form>
        <input
          name="id"
          value={data.id}
          placeholder="id"
          onChange={handleOnChange}
        />
        <input
          name="uid"
          value={data.uid}
          placeholder="uid"
          onChange={handleOnChange}
        />
        <input
          name="name"
          value={data.name}
          placeholder="name"
          onChange={handleOnChange}
        />
        <input
          name="gender"
          value={data.gender}
          placeholder="gender"
          onChange={handleOnChange}
        />
        <input
          name="departement"
          value={data.departement}
          placeholder="departement"
          onChange={handleOnChange}
        />
        <button
          type="button"
          className="py-2 px-6 bg-witech-blue text-white"
          onClick={onSubmit}
        >
          Tester
        </button>
      </form>
    </div>
  );
};

export default Product;
