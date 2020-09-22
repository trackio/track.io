import React, { useState, useContext } from "react";
import "./ProfileBio.css";
import profpic from "../../../assets/profpic.jpeg";
import { ProfileContext } from "../../../context/ProfileContext";

const ProfileBio = () => {
  const { user } = useContext(ProfileContext);

  const dummybio = {
    propic: profpic,
    name: "Paul Park",
    title: "Front End Engineer",
    job: "Google",
    email: "paulpark673@gmail.com",
    location: "Los Angeles, CA",
  };
  const [bio, setBio] = useState(dummybio);

  return (
    <div className="profile__bio">
      <div className="prof profile__pic">
        <img className="img" alt="me" src={profpic} />
      </div>
      <div className="prof profile__name">{bio.name}</div>
      <div className="prof profile__title">{bio.title}</div>
      <div className="prof profile__job">{bio.job}</div>
      <div className="prof profile__email">{bio.email}</div>
      <div className="prof profile__location">{bio.location}</div>
    </div>
  );
};

export default ProfileBio;
