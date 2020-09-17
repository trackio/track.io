import React, { useState } from "react";
import Application from "../Application/Application";
import "./ApplicationList.css";

const ApplicationList = (props) => {
  const initialApplications = [
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
  ];

  const [applications, setApplications] = useState(initialApplications);

  return (
    <div className="applications__group">
      <div className="applications__group-header">
        <div className="category__title">{props.stage}</div>
        <button className="btn__add">
          <span>+</span>
        </button>
      </div>
      <div className="applications">
        {applications
          .filter((application) => {
            return application.categoryGroup === props.stage;
          })
          .map((application) => (
            <>
              <Application key={application.id} application={application} />
            </>
          ))}
      </div>
    </div>
  );
};

export default ApplicationList;
