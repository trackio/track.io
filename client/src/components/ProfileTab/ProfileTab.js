import React from "react";
import ProfileBio from "./ProfileBio/ProfileBio";
import ProfileEdit from "./ProfileEdit/ProfileEdit";
import ProfileSocial from "./ProfileSocial/ProfileSocial";

const ProfileTab = (props) => {
  return (
    <>
      <ProfileBio />
      <ProfileEdit />
      <ProfileSocial />
    </>
  );
};

export default ProfileTab;
