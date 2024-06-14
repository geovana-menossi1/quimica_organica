import React from 'react';

const Admin = () => (
  <div className="login-box">
    <h2>Login</h2>
    <form>
      <div className="user-box">
        <input type="text" name="username" required />
        <label>Username</label>
      </div>
      <div className="user-box">
        <input type="password" name="password" required />
        <label>Password</label>
      </div>
      <div className="centered-content">
        <a href="#">
          SEND
          <span></span>
        </a>
      </div>
    </form>
  </div>
);

export default Admin;
