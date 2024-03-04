import React from "react";
import OrganizationProfile from "./OrganizationProfile";
import UserProfile from "./UserProfile";

const Profile = () => {
  const userType = null;
  return userType === "organization" ? (
    <OrganizationProfile />
  ) : (
    <UserProfile />
  );
};

export default Profile;
