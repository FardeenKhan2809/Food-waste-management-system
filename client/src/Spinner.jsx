// CustomSpinner.jsx
import { Spinner } from "@material-tailwind/react";

export function CustomSpinner() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "blur(5px)", // Apply a blur effect to the background
        zIndex: 9999, // Ensure the spinner is above other content
      }}
    >
      <div style={{ textAlign: "center", color: "white" }}>
        <Spinner className="h-16 w-16 text-gray-900/50" color="green" />
        <p style={{ marginTop: "1rem" }}>Loading...</p>
      </div>
    </div>
  );
}
