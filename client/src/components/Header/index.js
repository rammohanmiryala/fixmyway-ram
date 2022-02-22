import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Menu, Grid } from 'semantic-ui-react'
import Auth from '../../utils/auth';

const Header = () => {

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };



  return (
    <>
      <div textAlign="center" style={{ marginTop: '10px' }} alignItems="center" style={{ margin: '0 auto' }} >
        <Grid.Row className="">
          {/* <Grid.Column width={2} >
            <div className="container flex-row justify-space-between-lg justify-center align-center">
              <div>
                <Link className="text-light" to="/">
                  <h3 className="m-0" style={{ color: 'blue', fontSize: '30px' }}>Fixyourway</h3>
                </Link>
              </div>
            </div>
          </Grid.Column> */}
          <div class="ui secondary  menu">
            <a class="item">
              Home
            </a>
            <a class="item active">
              Messages
            </a>
            <a class="item">
              Friends
            </a>
            
            <div>
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
            </div>


          </div>
          {/* <Grid.Column width={6} >
          <Menu secondary>
            <Menu.Item
              name='home'
              active='activeItem'

              
            />
            <Menu.Item
              name='messages'
              
            />
            <Menu.Item
              name='friends'
              
            />
          </Menu>
        </Grid.Column> */}
          <Grid.Column width={3} >
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
          </Grid.Column>
        </Grid.Row>
      </div>



    </>

  );
};

export default Header;
