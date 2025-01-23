import React from 'react';

function Footer() {
  return (
    <>
      <div className='row'>
        <div className='col-md-2'></div>

        <div className='col-md-8'>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px",
              flexWrap: "wrap", // Allow wrapping for smaller screens
            }}
            className="row"
          >
            {/* Column 1: Dummy Address */}
            <div
              style={{
                border: "4px solid white",
                borderRadius: "12px",
                padding: "20px",
                margin: "10px",
                flex: "1",
                color: "white",
                textAlign: "center",
                height: "150px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
              }}
              className="col-md-4 col-12" // 4 columns on medium screens, 12 on mobile
            >
              <p style={{ fontSize: "16px" }}>
                1234 Dummy Address, Suite 567, Example City
              </p>
            </div>

            {/* Column 2: Deepnet */}
            <div
              style={{
                border: "4px solid white",
                borderRadius: "12px",
                padding: "20px",
                margin: "10px",
                flex: "1",
                color: "white",
                textAlign: "center",
                height: "150px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
              }}
              className="col-md-4 col-12" // 4 columns on medium screens, 12 on mobile
            >
              <p style={{ fontSize: "24px", fontWeight: "bold" }}>Deepnet Software</p>
            </div>

            {/* Column 3: Locations */}
            <div
              style={{
                border: "4px solid white",
                borderRadius: "12px",
                padding: "20px",
                margin: "10px",
                flex: "1",
                color: "white",
                textAlign: "center",
                height: "150px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
              }}
              className="col-md-4 col-12" // 4 columns on medium screens, 12 on mobile
            >
              <p style={{ fontSize: "18px" }}>Location 1: New York</p>
          
            </div>
          </div>
        </div>

        <div className='col-md-2'></div>
      </div>
    </>
  );
}

export default Footer;
