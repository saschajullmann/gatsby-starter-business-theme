import React from "react";
import feather from "feather-icons";

export default (name, measureArray, myStyle) => {
  const featherString = feather.icons[name].toSvg(name, {
    class: myStyle,
    width: measureArray[0],
    height: measureArray[1]
  });
  return <div dangerouslySetInnerHTML={{ __html: featherString }}></div>;
};
