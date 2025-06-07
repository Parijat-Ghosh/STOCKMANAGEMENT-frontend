// components/Error.jsx
import React from "react";

function Error({ error }) {
  return (
    <div style={{ color: "red", marginTop: "1rem" }}>
      ⚠️ {error || "Something went wrong"}
    </div>
  );
}

export default Error;
