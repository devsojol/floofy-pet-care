import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import { nav } from "framer-motion/client";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [passError, setPassError] = useState("");
  const [checkboxError, setCheckboxError] = useState("");
  const navigate = useNavigate();

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
      <div className="card bg-base-100 shadow-2xl px-10 w-full max-w-md">
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
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
            required
          />

          {passError && <p className="text-red-500 mt-2">{passError}</p>}
          {error && <p className="text-red-500 mt-2">{error}</p>}

          <div className="flex items-center gap-2 mt-2">
            <input type="checkbox" name="checkbox" className="checkbox" />
            <span>
              Accept our <Link className="font-semibold">Terms & Conditions</Link>
            </span>
          </div>
          {checkboxError && <p className="text-red-500 mt-2">{checkboxError}</p>}

          <button className="btn btn-neutral mt-4 w-full">Register</button>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link className="text-[#f96d65] font-semibold" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
