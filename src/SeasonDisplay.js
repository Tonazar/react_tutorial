import React from "react";
import "./SeasonDisplay.scss";

const seasonConfig = {
  Summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
  },
  Winter: {
    text: "Burr, it is cold!",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 0 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  // const text = season === "Winter" ? "Burr, its chilly" : "Lets hit the beach";
  // const icon = season === "Winter" ? "snowflake" : "sun";

  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon_left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon_right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
