import React from "react";
import { createContext, useState, useContext } from "react";

// creating a context
const UserContext = createContext({
  user: { name: "", age: "" },
  setUser: () => {},
});

// Providing context
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Rejaul",
    age: "20",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// create use context hook

export const useUserContext = () => useContext(UserContext);
