import LocationOnIcon from "@mui/icons-material/LocationOn";
import mock from "../assets/mock/mock.json";
import { useState } from "react";

export default function ActivityDescription(props) {
  const optionNumber = props.optionNumber;

  return (
    <div className="d-flex justify-content-center align-items-center">
      <strong>option {optionNumber}</strong>
      <section>
        <h1>{mock.name}</h1>
        <p>{mock.duration} min</p>
      </section>
      <section>
        <p>{mock.description}</p>
        <p>{mock.instructions}</p>
      </section>
      <section>
        <button>start activity</button>
      </section>
    </div>
  );
}
