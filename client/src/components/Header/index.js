import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Menu, Grid ,Button} from 'semantic-ui-react'
import Auth from '../../utils/auth';

const Header = () => {

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <>
      <Grid container columns={3} textAlign='center' style={{ marginTop: '20px', marginBottom: '10px' }}>
        <Grid.Column>
          <Menu.Menu position='left'>
            <h1>fix your way</h1>
          </Menu.Menu>
        </Grid.Column>
        <Grid.Column>
          <Menu secondary width={8}>
            <Menu.Item
              name='editorials'
            >
              Editorials
            </Menu.Item>
            <Menu.Item
              name='reviews'
            >
              Reviews
            </Menu.Item>
            <Menu.Item
              name='upcomingEvents'
            >
              Upcoming Events
            </Menu.Item>

          </Menu>
        </Grid.Column>
        <Grid.Column>
          <Menu.Menu position='right'>
            <div>
              {Auth.loggedIn() ? (
                <>
                  <Link className="btn btn-lg btn-info m-2" to="/me">
                    {Auth.getProfile().data.username}'s profile
                  </Link>
                  <Button className="btn btn-md btn-light m-2" onClick={logout}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link className="btn btn-md btn-info m-2" to="/login">
                    Login
                  </Link>
                  <Link className="btn btn-md btn-light m-2" to="/signup">
                    Signup
                  </Link>
                </>
              )}
            </div>
          </Menu.Menu>
        </Grid.Column>
      </Grid>
    </>

  );
};

export default Header;

{/* <div>
  {Auth.loggedIn() ? (
    <>
      <Link className="btn btn-lg btn-info m-2" to="/me">
        {Auth.getProfile().data.username}'s profile
      </Link>
      <button className="btn btn-lg btn-light m-2" onClick={logout}>
        Logout
      </button>
    </>
  ) : (
    <>
      <Link className="btn btn-lg btn-info m-2" to="/login">
        Login
      </Link>
      <Link className="btn btn-lg btn-light m-2" to="/signup">
        Signup
      </Link>
    </>
  )}
</div> */}