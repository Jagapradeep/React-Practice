import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MoviesForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const onSave = () => {
    navigate("/movies", { replace: true });
  };

  return (
    <>
      <p>Movie Form {id}</p>
      <button onClick={onSave} className="btn btn-primary">
        {" "}
        Save{" "}
      </button>
    </>
  );
};

export default MoviesForm;
