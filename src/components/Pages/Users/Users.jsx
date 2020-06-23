import React, { Component } from "react";
import UserCard from "../../Molecules/UserCard/UserCard";
import axios from "axios";

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then((resp) => this.setState({ users: resp.data }));
  }

  render() {
    const { users } = this.state;

    return (
      <div className="ed-grid">
        <h1>usuarios</h1>
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
  }
}

export default Users;

//FETCH

// fetch("https://jsonplaceholder.typicode.com/users", {
//       method: "get",
//     })
//       .then((response) => response.json())
//       .then((respons) => {
//         this.setState({
//           users: respons,
//         });
//       });

//ASYNC

// const res = await fetch("https://jsonplaceholder.typicode.com/users/");
//     const users = await res.json();

//     this.setState({ users });

//AXIOS

// axios
//       .get("https://jsonplaceholder.typicode.com/users/")
//       .then((resp) => this.setState({ users: resp.data }));
