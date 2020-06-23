import React from "react";

const UserCard = ({ name, username, address, email }) => {
  const { city } = address;
  return (
    <article className="card">
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2 s-bg-white">
        <h3 className="center">{name}</h3>
        <div className="s-main-center">UserName: {username}</div>
        <p className="s-main-center">Ciudad: {city}</p>
        <div className="s-main-center">
          <a
            className="button--ghost-alert button--tiny"
            href="https://ed.team"
          >
            {`${email}`}{" "}
          </a>
        </div>
      </div>
    </article>
  );
};
export default UserCard;
