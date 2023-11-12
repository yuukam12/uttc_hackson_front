import React, { useState } from "react";
import { Stack } from "@mui/material";
import { getAuth } from "firebase/auth";

export const ProfilePage: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const auth = getAuth();
    const user = auth.currentUser;

if (user !== null) {
  user.providerData.forEach((profile) => {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
}
    return (
        <Stack>
        </Stack>
        )
}