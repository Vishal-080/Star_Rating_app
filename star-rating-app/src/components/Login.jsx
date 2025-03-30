import React from "react";

const Login = () => {
  return (
    <div className="text-center border-blue-500 border w-6/12 m-auto">
      <fieldset className="fieldset w-xs bg-base-100 border border-blue-300 p-4 rounded-box m-auto">
        <legend className="fieldset-legend">Login</legend>

        <label className="fieldset-label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="fieldset-label">Password</label>
        <input type="password" className="input" placeholder="Password" />

        <button className="btn btn-neutral mt-4">Login</button>
      </fieldset>
    </div>
  );
};

export default Login;
