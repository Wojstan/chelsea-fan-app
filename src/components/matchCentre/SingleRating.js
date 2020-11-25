import React from "react";
import { RatingBlock, RatingCrest, RatingInfo } from "../styled/StyledCentre";

import { RatingInput } from "../styled/Forms"
import { MidTitle } from "../styled/Titles";

export default function SingleRating({ data, index, setData }) {
  const onChange = (e) => {
    const newRating = data.slice();
    newRating[index].rating = parseInt(e.target.value);
    setData(newRating);
  };

  return (
    <div className="col-xl-4">
      <RatingBlock>
        <RatingCrest>
          <img src={data[index].img} alt="" />
        </RatingCrest>
        <RatingInfo vertical="space-between" horizontal="flex-end">
          <MidTitle color="#242424">{data[index].last}</MidTitle>
          <RatingInput type="number" value={data[index].rating} onChange={onChange} />
        </RatingInfo>
      </RatingBlock>
    </div >
  );
}
