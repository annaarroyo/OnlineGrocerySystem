import React, {Component} from "react";
//import { Redirect } from 'react-router-dom';

class Profile extends Component {
  render () {
		return (
      <>
			<div class="profile container">
        <h3>My Account</h3>
        <h4>_</h4>
        <table align="center">
          <tr>
            <td valign="top" class="right">
              <table>
                <th><h5>Name</h5></th>
                <tr><td><h6>Juan Neri</h6></td></tr>
              </table>
            </td>
            <td></td>
            <td valign="top" class="left">
              <table>
                <th><h5>Address</h5></th>
                <tr><td><h6>666 Hell St. San Antonio, Tx 78230</h6></td></tr>
              </table>
            </td>
          </tr>
        </table>
        <table align="center">
          <tr>
            <td valign="top" class="right">
              <table>
                <th><h5>Phone</h5></th>
                <tr><td><h6>210.999.0000</h6></td></tr>
              </table>
            </td>
            <td></td>
            <td valign="top" class="left">
              <table>
                <th><h5>Email</h5></th>
                <tr><td><h6>juan@email.com</h6></td></tr>
              </table>
            </td>
          </tr>
        </table>
			</div>
      </>
		)
	}
};

export default Profile;