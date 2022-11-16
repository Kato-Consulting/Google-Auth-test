import React from "react";

// Pass User
const Clients = ({ user }) => {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <div style={{ textAlign: "center", margin: "3rem" }}>
      <h1> {user?.email}</h1>

      <p>
        CLIENTS PAGE
      </p>

      <div>
        <button
          onClick={logout}
          style={{
            color: "red",
            border: "1px solid gray",
            backgroundColor: "white",
            padding: "0.5rem 1rem",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Clients;
