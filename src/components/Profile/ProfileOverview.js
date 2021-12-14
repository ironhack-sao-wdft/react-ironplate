import Calendar from "react-calendar";
import { useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

export default function ProfileOverview() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="mt-4 d-flex justify-content-center">
      <div
        className="pt-2"
        style={{
          backgroundColor: "#FFF9F0",
          boxShadow: "0px 4px 20px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: "15px",
          width: "90%",
          height: "43vh",
        }}
      >
        <div style={{ width: "95vw" }}>
          <Calendar
            className="calendar"
            minDetail="month"
            onChange={onChange}
            value={value}
            nextLabel={<NavigateNextIcon />}
            next2Label=""
            prevLabel={<NavigateBeforeIcon />}
            prev2Label=""
          />
        </div>
      </div>
    </div>
  );
}
