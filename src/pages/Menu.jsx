import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "./Home"; // Import the Home component

const Menu = () => {
  const [menus, setMenus] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch menus from the backend
  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const res = await axios.get("http://localhost:4000/menus");
        setMenus(res.data);
      } catch (err) {
        setError("Failed to load menus. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMenus();
  }, []);

  const handleMenuClick = (menuId) => {
    setSelectedMenu(menuId === selectedMenu ? null : menuId); // Toggle the selected menu
  };

  const selectedMenuItems =
    menus.find((menu) => menu._id === selectedMenu)?.items || [];

  if (loading) {
    return (
      <div
        className="h-screen flex items-center justify-center"
        style={{
          backgroundColor: "#0b0f17",
          color: "white",
          fontSize: "1.5rem",
        }}
      >
        <p>Loading menus...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="h-screen flex items-center justify-center"
        style={{
          backgroundColor: "#0b0f17",
          color: "white",
          fontSize: "1.5rem",
        }}
      >
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div
      className="bg-cover bg-center flex flex-col items-center justify-start"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1469234496837-d0101f54be3e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRhcmslMjByZXN0YXVyYW50fGVufDB8fDB8fHww")',
        textAlign: "center",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <div className="px-4 sm:px-8 md:px-12 py-8 w-full">
        <h1
          style={{
            fontSize: "4rem",
            textShadow: `2px 2px 0px rgba(0, 0, 0, 0.8), 4px 4px 0px rgba(0, 0, 0, 0.6), 6px 6px 0px rgba(0, 0, 0, 0.4)`,
            marginBottom: "20px",
          }}
        >
          MENU
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            maxWidth: "600px",
            margin: "0 auto",
            marginBottom: "30px",
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, odit aspernatur vero est tenetur beatae molestiae quae totam sint veritatis fugiat, debitis quam veniam architecto eius. Perferendis sed maiores rerum?
        </p>

        <div
          className="p-8 rounded-lg shadow-lg"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {menus.length === 0 ? (
            <p>No menus available at the moment.</p>
          ) : (
            <>
              <div
                className="flex flex-wrap justify-center gap-6 mb-8"
                style={{
                  marginBottom: "30px",
                }}
              >
                {menus.map((menu) => (
                  <button
                    key={menu._id}
                    onClick={() => handleMenuClick(menu._id)}
                    className={`text-xl font-semibold py-2 px-6 rounded-md focus:outline-none transition-all duration-300 ${
                      selectedMenu === menu._id
                        ? "bg-white text-black"
                        : "bg-transparent text-white"
                    }`}
                    style={{
                      backgroundColor:
                        selectedMenu === menu._id ? "white" : "transparent",
                      color: selectedMenu === menu._id ? "black" : "white",
                      border: "2px solid white",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                    aria-expanded={selectedMenu === menu._id}
                  >
                    {menu.name}
                  </button>
                ))}
              </div>

              {selectedMenu && (
                <div>
                  <h4
                    style={{
                      fontSize: "1.5rem",
                      marginBottom: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    Menu Items
                  </h4>
                  {selectedMenuItems.length > 0 ? (
                    selectedMenuItems.map((item) => (
                      <div
                        key={item._id}
                        className="flex justify-between items-center p-3 rounded-lg shadow-sm mb-3"
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          color: "white",
                        }}
                      >
                        <p style={{ fontSize: "1.2rem" }}>{item.name}</p>
                        <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                          ${item.price}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p>No items available for this menu.</p>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Add Home Section Below the Menu */}
      <div className="mt-1 w-full">
        <Home />
      </div>
    </div>
  );
};

export default Menu;
