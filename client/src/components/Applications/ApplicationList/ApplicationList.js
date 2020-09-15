import React from "react";
import Application from "../Application/Application";
import "./ApplicationList.css";

const CategoryList = (props) => {
  const applications = [
    {
      id: 1,
      companyName: "Microsoft",
      jobTitle: "Product Manager",
      categoryGroup: "applied",
    },
    {
      id: 2,
      companyName: "Microsoft",
      jobTitle: "Product Manager",
      categoryGroup: "applied",
    },
    {
      id: 3,
      companyName: "Microsoft",
      jobTitle: "Product Manager",
      categoryGroup: "in process",
    },
    {
      id: 4,
      companyName: "Microsoft",
      jobTitle: "Product Manager",
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
  ];
  return (
    <div className="applications__group">
      <span className="category__title">{props.stage}</span>
      <button className="btn__add">+</button>

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

export default CategoryList;
