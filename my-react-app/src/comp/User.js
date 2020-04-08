import React from "react";
import axios from "axios";

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      gracee: {},
      followers: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/GraceeElton")
      .then((response) => {
        console.log(response.data);
        this.setState({
          gracee: response.data,
        });
      })
      .catch((err) => console.log(err));

    axios
      .get("https://api.github.com/users/GraceeElton/followers")
      .then((response) => {
        console.log(response.data);
        this.setState({
          followers: response.data,
        });
      });
  }

  render() {
    return (
      <div className="mycard">
        <div>
          <img src={this.state.gracee.avatar_url}></img>
          <h3>{this.state.gracee.name}</h3>
          <h3>{this.state.gracee.location}</h3>
          <h3>{this.state.gracee.bio}</h3>
        </div>

        <div className="most">
          {this.state.followers.map((follower) => (
            <div className="card">
              <img src={follower.avatar_url}></img>
              <h2>{follower.login}</h2>
              <h2>{follower.url}</h2>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default User;
