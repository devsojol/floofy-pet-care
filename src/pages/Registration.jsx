import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [passError, setPassError] = useState("");
  const [checkboxError, setCheckboxError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Google Sign-in
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        toast.success("Google Sign-in successful!", { position: "top-center" });
        console.log(result.user);
        navigate("/");
      })
      .catch((err) => setError(err.message));
  };

  // password email sign up
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const checked = e.target.checkbox.checked;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setPassError(
        "Password must be at least 6 characters long and include uppercase & lowercase letters."
      );
      return;
    }

    if (!checked) {
      setCheckboxError("You must accept the Terms & Conditions.");
      return;
    }

    // reset errors
    setError("");
    setPassError("");
    setCheckboxError("");

    // create user
    createUser(email, password, name, photo)
      .then(() => {
        toast.success("User Created Successfully", {
          position: "top-center",
        });
        e.target.reset();
        navigate("/");
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="card bg-base-100 shadow-2xl px-10">
        <h1 className="text-4xl font-semibold text-center py-12 border-b border-gray-300">
          Register your account
        </h1>
        <form onSubmit={handleSubmit} className="card-body">
          <label className="label">Your Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Enter your name"
            required
          />

          <label className="label">Photo URL</label>
          <input
            type="text"
            name="photo"
            className="input"
            placeholder="Enter your photo URL"
            required
          />

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
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
              className="absolute right-10 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
            </span>
          </div>

          {passError && <p className="text-red-500 mt-2">{passError}</p>}
          {error && <p className="text-red-500 mt-2">{error}</p>}

          <div className="flex items-center gap-2 mt-2">
            <input type="checkbox" name="checkbox" className="checkbox" />
            <span>
              Accept our{" "}
              <Link className="font-semibold">Terms & Conditions</Link>
            </span>
          </div>
          {checkboxError && (
            <p className="text-red-500 mt-2">{checkboxError}</p>
          )}

          <button className="btn btn-neutral mt-4 w-full">Register</button>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link className="text-[#f96d65] font-semibold" to="/login">
              Login
            </Link>
          </p>
        </form>
        {/* Divider & Google Sign-in */}
        <div className="divider text-gray-600">OR</div>
        <button
          onClick={handleGoogleLogin}
          className="btn mt-4 w-full mb-12 flex items-center justify-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              fill="#4285f4"
              d="M17.64 9.2q-.002-.956-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
            ></path>
            <path
              fill="#34a853"
              d="M9.003 18c2.43 0 4.467-.806 5.956-2.18l-2.909-2.26c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.44 15.983 5.485 18 9.003 18"
            ></path>
            <path
              fill="#fbbc05"
              d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042z"
            ></path>
            <path
              fill="#ea4335"
              d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.428 0 9.002 0 5.485 0 2.44 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71"
            ></path>
          </svg>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
