import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { Button, Stack } from "@mui/material";

const auth = getAuth();
signOut(auth).then(() => {
    console.log("Sign-out successful.")
  }).catch((error) => {
    // An error happened.
  });
export const SignOutButton:React.FC = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    return (
        <Stack>
            <Button onClick={()=> signOut(auth)}>Sign Out</Button>
        </Stack>
        )
}