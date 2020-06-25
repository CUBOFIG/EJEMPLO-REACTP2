import React from "react";

import UserCard from "../../Molecules/UserCard/UserCard";
import withLoader from "../../HOC/withLoader/withLoader";

const UsersView = ({ users }) => (
  <div className="ed-grid">
    <h1 className="text-muted">usuarios</h1>

    <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
      {users.map((e) => (
        <UserCard
          key={e.id}
          name={e.name}
          address={e.address}
          username={e.username}
          email={e.email}
        />
      ))}
    </div>
  </div>
);
export default withLoader("users", UsersView);
