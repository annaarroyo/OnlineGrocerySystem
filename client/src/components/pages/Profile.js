import React, {Component} from "react";
import { Redirect } from 'react-router-dom';
import UserProfile from '../UserProfile';

class Profile extends Component {
  state = {
    loading: true,
    person: null,
    email: UserProfile.getName(),
    session: UserProfile.getSession()
  };

  async componentDidMount() {
    const url = "/login/";
    const response = await fetch(url + this.state.email);
    const data = await response.json();
    this.setState( {person: data, loading: false } );
  }
  async LogOut(event) {
    UserProfile.setSession(false);
  }
  renderRedirect = () => {
    return <Redirect to="/login"/>
  };
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
            <form className='account-form'>
              <button className='btn-submit-form' type='submit' onClick={ e => this.LogOut(e) }>
                Log Out
              </button>
            </form>
          </div>
        )
      };
      </>
		)
	}
};

export default Profile;
