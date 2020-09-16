import React from "react";
import "./ProfileBio.css";
import profpic from "../../../assets/profpic.jpeg";

const ProfileBio = (props) => {
  return (
    <div className="profile__bio">
      <div className="prof profile__pic">
        <img className="img" alt="me" src={profpic} />
      </div>
      <div className="prof profile__name">Paul Park</div>
      <div className="prof profile__title">Front End Engineer</div>
      <div className="prof profile__job">Google</div>
      <div className="prof profile__email">paulpark673@gmail.com</div>
      <div className="prof profile__location">Los Angeles, CA</div>
    </div>
  );
};

export default ProfileBio;
