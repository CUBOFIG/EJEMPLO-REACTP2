import React, { Component } from "react";
import UserView from "../../Organisms/UsersView/UsersView";
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

    // if (!users.length)
    //   return (
    //     <div className="container">
    //       <div class="row justify-content-center align-items-center minh-100">
    //         <Spinnerr />
    //       </div>
    //     </div>
    //   );

    return <UserView users={users} />;
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
