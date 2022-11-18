import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Components/Contexts/AuthProvider/AuthProvider';


const Register = () => {
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('')
  const handleRegister = (data) => {
    console.log(data);
    console.log(errors);
  setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Register Created Successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                 setSignUPError(error.message)
            });


      
      
      
      
      
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
                     {signUpError && <p className='text-red-600'>{signUpError}</p>}
          <label className="label">
            <span className="text-black">
              Already have an Account Here?
              <Link className="text-blue-700 pl-2" to="/login">
                Please Login
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