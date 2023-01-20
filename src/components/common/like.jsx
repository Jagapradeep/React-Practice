import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as heartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as heartSolid } from "@fortawesome/free-solid-svg-icons";

const Like = ({ onClick, liked }) => {
  return (
    <FontAwesomeIcon
      style={{ cursor: "pointer" }}
      onClick={onClick}
      icon={liked ? heartSolid : heartRegular}
    />
  );
};

export default Like;
