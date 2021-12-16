import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function LoadingPage() {
  return (
    <div className="container">
      <Box sx={{ display: "flex" }}>
        <CircularProgress sx={{ color: "white", fontSize: "large" }} />
      </Box>
    </div>
  );
}
