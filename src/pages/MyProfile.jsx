import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        toast.success("Profile updated successfully!");
        setEditMode(false);
      })
      .catch((error) => {
        toast.error("Failed to update profile: " + error.message);
      });
  };

  return (
    <div className="container mx-auto pt-12">
      <h2 className="text-3xl font-bold text-center mb-8">My Profile</h2>

      <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 text-center">
        <img
          src={user?.photoURL || "https://i.ibb.co.com/9rM8v2y/default-avatar.png"}
          alt="User Avatar"
          className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-[#ff3600]"
        />
        <h3 className="text-xl font-semibold">{user?.displayName || "No Name"}</h3>
        <p className="text-gray-600 mb-4">{user?.email}</p>

        {!editMode ? (
          <button
            onClick={() => setEditMode(true)}
            className="bg-[#ff3600] text-white px-4 py-2 rounded-lg hover:bg-[#e02f00] cursor-pointer"
          >
            Update Profile
          </button>
        ) : (
          <form
            onSubmit={handleUpdateProfile}
            className="mt-4 flex flex-col gap-3 text-left"
          >
            <label className="font-semibold">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded-lg px-3 py-2 w-full"
              required
            />

            <label className="font-semibold">Photo URL</label>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="border rounded-lg px-3 py-2 w-full"
              required
            />

            <div className="flex justify-between mt-3">
              <button
                type="button"
                onClick={() => setEditMode(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#ff3600] text-white px-4 py-2 rounded-lg hover:bg-[#e02f00] cursor-pointer"
              >
                Save Changes
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
