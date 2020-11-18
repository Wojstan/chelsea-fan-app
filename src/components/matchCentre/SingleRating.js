import React from "react";

export default function SingleRating({ data, index, setData }) {
  const onChange = (e) => {
    const newRating = data.slice();
    newRating[index].rating = parseInt(e.target.value);
    setData(newRating);
  };

  return (
    <div className="col-xl-4">
      <div className="white-block rating">
        <div className="img-place">
          <img src={data[index].img} alt="" />
        </div>
        <div className="info">
          <h2>{data[index].last}</h2>
          <input type="number" value={data[index].rating} onChange={onChange} />
        </div>
      </div>
    </div>
  );
}
