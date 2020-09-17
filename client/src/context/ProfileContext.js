import React, { createContext, useReducer } from "react";
import ProfileReducer from "./ProfileReducer";

const initialState = {
  user: [],
  applications: [
    {
      id: 1,
      companyName: "Microsoft",
      jobTitle: "Product Manager",
      categoryGroup: "applied",
    },
    {
      id: 2,
      companyName: "Apple",
      jobTitle: "UX/UI Designer",
      categoryGroup: "applied",
    },
    {
      id: 3,
      companyName: "LinkedIn",
      jobTitle: "Software Engineer",
      categoryGroup: "in process",
    },
    {
      id: 4,
      companyName: "Microsoft",
      jobTitle: "Project Manager",
      categoryGroup: "in process",
    },
    {
      id: 5,
      companyName: "Google",
      jobTitle: "Senior Software Engineer",
      categoryGroup: "offers",
    },
    {
      id: 6,
      companyName: "Amazon",
      jobTitle: "Junior Front End Engineer",
      categoryGroup: "offers",
    },
    {
      id: 7,
      companyName: "Facebook",
      jobTitle: "Software Developer",
      categoryGroup: "applied",
    },
    {
      id: 8,
      companyName: "Uber",
      jobTitle: "Tech Lead",
      categoryGroup: "applied",
    },
    {
      id: 9,
      companyName: "Lyft",
      jobTitle: "Backend Developer",
      categoryGroup: "applied",
    },
    {
      id: 10,
      companyName: "Google",
      jobTitle: "Software Engineer Intern",
      categoryGroup: "applied",
    },
    {
      id: 11,
      companyName: "LinkedIn",
      jobTitle: "Junior Software Engineer",
      categoryGroup: "in process",
    },
    {
      id: 12,
      companyName: "Amazon",
      jobTitle: "Front End Engineer",
      categoryGroup: "in process",
    },
    {
      id: 13,
      companyName: "MotorTrend",
      jobTitle: "Software Engineer",
      categoryGroup: "in process",
    },
    {
      id: 14,
      companyName: "Instagram",
      jobTitle: "Software Engineer",
      categoryGroup: "in process",
    },
  ],
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

  const setApplications = (apps) => {
    dispatch({
      type: "SET_APPLICATIONS",
      payload: apps,
    });
  };

  return (
    <ProfileContext.Provider
      value={{
        user: state.user,
        fetchUserData,
        applications: state.applications,
        setApplications,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
