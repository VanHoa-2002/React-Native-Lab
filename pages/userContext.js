/* eslint-disable react/prop-types */
import React, { useState, createContext } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({ id: 0, username: "" });
  const [carts, setCarts] = useState([]);

  return (
    <UserContext.Provider value={{ user, setUser, carts, setCarts }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
