import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialEmail = location.state?.email || "";
  const [email, setEmail] = useState(initialEmail);

  const handleReset = (e) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent! Check your inbox.", {
          position: "top-center",
        });
        window.open("https://mail.google.com", "_blank");
        navigate("/login");
      })
      .catch((err) =>
        toast.error(err.message, { position: "top-center" })
      );
  };

  return (
    <div className="flex justify-center items-center my-12">
      <div className="card bg-base-100 shadow-2xl px-10 py-10 w-96">
        <h2 className="text-2xl font-semibold mb-5 text-center">
          Reset Your Password
        </h2>
        <form onSubmit={handleReset} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-neutral w-full">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
