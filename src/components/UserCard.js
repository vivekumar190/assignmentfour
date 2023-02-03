import React, { useState } from "react";
import "../App.css";

export const UserCard = ({ user }) => {
  const { avatar, email, first_name, last_name } = user;
  console.log({});
  const [following, setFollowing] = useState(false);
  return (
    <div className="usercard">
      <img src={avatar} className="cardimage"></img>
      {first_name + " " + last_name}
      <div className="cardemail">{email}</div>
      <button
        className={following ? "unfollowbutton" : "followbutton"}
        onClick={() => setFollowing(following ? false : true)}
      >
        {following ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};
