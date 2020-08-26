import React from "react";

const getSeason = (lat, month) => {
  if (month > 0 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const text = season === "Winter" ? "Burr, its chilly" : "Lets hit the beach";

  return <div>{}</div>;
};

export default SeasonDisplay;
