import React from 'react';

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Register = () => {
     const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // const [data, setData] = useState("");
  const handleRegister = (data) => {
    console.log(data);
    console.log(errors);
  };
    return (
        <div className="h-[800px] text-accent flex items-center justify-center ">
      <div className="border-1 shadow-current shadow-lg p-8 m-8">
        <h1 className="text-3xl text-center">Register Now</h1> <br />
        <form onSubmit={handleSubmit(handleRegister)}>
          <div>
            <label className="label ">
              <span className="label-text">Name</span>
            </label>
            <input
                            {...register("name", { required: "Please give full name" })}
              type="name"
              className="input input-bordered w-full max-w-xs input-accent"
            />  {errors.name && (
              <p className="text-red-600">{errors.name?.message}</p>
            )}
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
                pattern: { value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/, message: "Password must be Strong"   }
                
                
                
              })}
              type="password"
              className="input input-bordered w-full max-w-xs input-accent"
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
          <label className="label">
            <span className="text-black">
              Already have an account?
              <Link className="text-blue-700" to="/login">
                Please login
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

export default Register;