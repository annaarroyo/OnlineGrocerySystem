import React, {Component} from "react";
import UserProfile from '../UserProfile';

class Profile extends Component {
  state = {
    loading: true,
    person: null,
    email: UserProfile.getName(),
  };

  async componentDidMount() {
    const url = "/login/";
    const response = await fetch(url + this.state.email);
    const data = await response.json();
    this.setState( {person: data, loading: false } );
    console.log(this.state.email);

  }
  render () {
		return (
      <>
        {this.state.loading || !this.state.person ? (
          <div className="profile container">
            <h3>Offline</h3>
          </div>
        ) : (
          <div className="profile container">
            <h3>My Account</h3>
            <h4>_</h4>
            <table align="center">
              <tbody>
                <tr>
                  <td valign="top" className="right">
                    <h5>Name</h5>
                    <h6>{this.state.person.firstName} {this.state.person.lastName}</h6>
                  </td>
                  <td></td>
                  <td valign="top" className="left">
                    <h5>Address</h5>
                    <h6>{this.state.person.addressess}</h6>
                  </td>
                </tr>
              </tbody>
            </table>
            <table align="center">
              <tbody>
                <tr>
                  <td valign="top" className="right">
                    <h5>Phone</h5>
                    <h6>{this.state.person.phoneNumber}</h6>
                  </td>
                  <td></td>
                  <td valign="top" className="left">
                    <h5>Email</h5>
                    <h6>{this.state.person.email}</h6>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )
      };
      </>
		)
	}
};

export default Profile;
