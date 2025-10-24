import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import { nav } from "framer-motion/client";
import {
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithPopup,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { signInUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.target);

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ email, password });

    // signIn User
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        toast.success("User Login successfully", {
          position: "top-center",
        });
        e.target.reset();
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // Google login
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        toast.success("Google Login successful", { position: "top-center" });
        console.log(result.user);

        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => setError(err.message));
  };

  // Forgot Password
  const handleForgotPassword = () => {
    const email = prompt("Enter your email to reset password:");
    if (!email) return;

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent! Check your inbox.", {
          position: "top-center",
        });
      })
      .catch((err) => {
        toast.error(err.message, { position: "top-center" });
      });
  };

  return (
    <div className="flex justify-center mt-5">
      <div className="card bg-base-100 shrink-0 shadow-2xl px-10">
        <h1 className="text-[#403F3F] font-semibold text-4xl text-center py-10 border-b border-[#E7E7E7]">
          Login your account
        </h1>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              required
            />
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input pr-10"
                placeholder="Password"
                required
              />
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
              </span>
            </div>
            <div>
              <a onClick={handleForgotPassword} className="link link-hover">
                Forgot password?
              </a>
            </div>
            {error && (
              <p className="text-red-500 font-medium text-sm mt-2">{error}</p>
            )}
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <div className="text-center mt-4 ">
            <h3 className="text-[#706F6F] font-semibold">
              Don’t Have An Account ?{" "}
              <Link className="text-[#f96d65]" to="/register">
                Register
              </Link>
            </h3>
          </div>
        </form>
        {/* Google Login Button */}
        <div class="divider text-gray-600">OR</div>
        <button onClick={handleGoogleLogin} className="btn  mt-4 w-full mb-12">
          <svg
            class="svg"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              fill="#4285f4"
              fill-opacity="1"
              fill-rule="evenodd"
              stroke="none"
              d="M17.64 9.2q-.002-.956-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
            ></path>
            <path
              fill="#34a853"
              fill-opacity="1"
              fill-rule="evenodd"
              stroke="none"
              d="M9.003 18c2.43 0 4.467-.806 5.956-2.18l-2.909-2.26c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.44 15.983 5.485 18 9.003 18"
            ></path>
            <path
              fill="#fbbc05"
              fill-opacity="1"
              fill-rule="evenodd"
              stroke="none"
              d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042z"
            ></path>
            <path
              fill="#ea4335"
              fill-opacity="1"
              fill-rule="evenodd"
              stroke="none"
              d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.428 0 9.002 0 5.485 0 2.44 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71"
            ></path>
          </svg>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
