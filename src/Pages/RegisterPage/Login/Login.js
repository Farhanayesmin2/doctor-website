import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { AuthContext } from "../../../Components/Contexts/AuthProvider/AuthProvider";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  return (
    <div className="h-[800px] text-accent flex items-center justify-center ">
      <div className="border-1 shadow-current shadow-lg p-8 m-8">
        <h1 className="text-3xl text-center">Login</h1> <br />
        <form onSubmit={handleSubmit(handleLogin)}>
          <div>
            <label className="label ">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email Address is required" })}
              type="email"
              className="input input-bordered w-full max-w-xs input-accent"
            />{" "}
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 or more Characters",
                },
              })}
              type="password"
              className="input input-bordered w-full max-w-xs input-accent "
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}

            <label className="label">
              <span className="label-text">Forget password?</span>
            </label>
          </div>
          <input
            type="submit"
            className="btn-accent bg-gradient-to-r from-emerald-300 via-emerald-600 to-emerald-300  btn text-white   mt-4 w-full max-w-xs"
          />{" "}
          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
          <label className="label">
            <span className="text-black">
              New to doctors protal?
              <Link className="text-blue-700" to="/register">
                Create a new Account
              </Link>
            </span>
          </label>
          <div className="divider">OR</div>
          <button className="btn btn-outline btn-accent mt-4 w-full max-w-xs">
            SIGN IN WITH GOOGLE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
