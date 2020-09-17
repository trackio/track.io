import React, { createContext, useReducer } from "react";
import ProfileReducer from "./ProfileReducer";

const initialState = {
  user: [],
};

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProfileReducer, initialState);
  // Actions
  const fetchUserData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "FETCH_DATA",
          payload: data[0],
        });
      })
      .catch((err) => console.log("you have an error" + err));
  };

  return (
    <ProfileContext.Provider value={{ user: state.user, fetchUserData }}>
      {children}
    </ProfileContext.Provider>
  );
};
