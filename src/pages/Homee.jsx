import React from 'react'

function Homee() {
  return (
    <>
  <div style={{ position: "relative", width: "100%" }}>
      <img
        src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg"
        alt="Description"
        className="w-100"
        style={{
          height: "450px",
          filter: "brightness(50%)", // Reduces brightness to 50%
          objectFit: "cover", // Ensure the image covers the div without distortion
        }}
      />
      {/* Text Overlay */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "36px", fontWeight: "bold", margin: "0" }}>
        Welcome
        </h2>
        <p style={{ fontSize: "18px", marginTop: "10px" }}>
        Each dish tells a story, where flavors come together to create an experience that lingers long after the meal is over.
        </p>
      </div>
    </div>
    </>
  )
}

export default Homee
