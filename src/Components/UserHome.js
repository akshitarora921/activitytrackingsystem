import React, { Component } from "react";
import userData from "../data/test.json";

class UserHome extends Component {
  state = {
    users: userData.members,
  };
  render() {
    const { id } = this.props.match.params;
    const { users } = this.state;
    return users.map((user, keys) => {
      if (user.id == id) {
        return (
          <section key={keys} className="user_dashboard">
            <h3>{user.real_name} DashBoard</h3>
            <h4>Location: {user.tz}</h4>
            {user.activity_periods.map((a, id) => {
              return <p>{a.start_time}</p>;
            })}
          </section>
        );
      }
    });
  }
}

export default UserHome;
