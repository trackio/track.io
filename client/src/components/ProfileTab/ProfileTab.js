import React, { useEffect, useContext } from "react";
import ProfileBio from "./ProfileBio/ProfileBio";
import ProfileEdit from "./ProfileEdit/ProfileEdit";
import ProfileSocial from "./ProfileSocial/ProfileSocial";
import "./ProfileTab.css";
import { ProfileContext } from "../../context/ProfileContext";

const ProfileTab = () => {
  const { fetchUserData } = useContext(ProfileContext);
  useEffect(() => {
    fetchUserData("https://jsonplaceholder.typicode.com/users");
  }, []);
  return (
    <div className="profile">
      <ProfileBio />
      <ProfileEdit />
      <ProfileSocial />
    </div>
  );
};

export default ProfileTab;
