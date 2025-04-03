import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onFormSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="text-center border-blue-500 border w-6/12 m-auto">
      <fieldset className="fieldset w-xs bg-base-100 border border-blue-300 p-4 rounded-box m-auto">
        <legend className="fieldset-legend">Login</legend>
        <form action="" onSubmit={handleSubmit(onFormSubmit)}>
          <label className="fieldset-label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <label className="fieldset-label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 20,
            })}
          />

          <button className="btn btn-neutral mt-4" type="submit">
            Login
          </button>
        </form>
      </fieldset>
    </div>
  );
};

export default Login;
