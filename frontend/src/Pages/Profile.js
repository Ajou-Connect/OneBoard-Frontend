import React from "react";
import "./Profile.scss";
import { UserData } from "./UserData";
const Profile = () => {
  return (
    <div>
      <h2>프로필</h2>
      <ul>
        {UserData.map((props, index) => {
          return (
            <li className="ProfileList" key={index}>
              {props.name} <br />
              {props.ID} <br />
              {props.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Profile;
