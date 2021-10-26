import React from "react";
import "./Profile.scss";
import UserData from "../Pages/UserData";

const Profile = () => {
  return (
    <div className="user-information">
      <section>
        <h2>사용자정보</h2>
        <ul>
          <li className="data-row">
            <div className="data-container">
              <span className="data-title">성명</span>
              <div className="data-value">
                {UserData.map((item, index) => {
                  return (
                    <li key={index} className={item.name}>
                      {item.name}
                      {item.email}
                      {item.ID}
                    </li>
                  );
                })}
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Profile;
