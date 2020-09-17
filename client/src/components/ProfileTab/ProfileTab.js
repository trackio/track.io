import React from "react";
import ProfileBio from "./ProfileBio/ProfileBio";
import ProfileEdit from "./ProfileEdit/ProfileEdit";
import ProfileSocial from "./ProfileSocial/ProfileSocial";
import "./ProfileTab.css";

const ProfileTab = () => {
  return (
    <div className="profile">
      <ProfileBio />
      <ProfileEdit />
      <ProfileSocial />
    </div>
  );
};

export default ProfileTab;
