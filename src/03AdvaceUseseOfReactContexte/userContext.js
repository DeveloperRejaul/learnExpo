import React from "react";
import { createContext, useContext, useReducer } from "react";

// creating a context
const UserContext = createContext();

// All State
const initialState = { name: "rejaul", age: "23" };

// Reducer Function  all bassness logics
function reducer(state, action) {
  switch (action.type) {
    case "change_user_name":
      return {
        ...state,
        name: action.payload,
      };
      break;
    case "change_user_age":
      return {
        ...state,
        age: action.payload,
      };
      break;
    default:
      state;
      break;
  }
}

// Providing context
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

// create use context hook
export const useUserContext = () => useContext(UserContext);
