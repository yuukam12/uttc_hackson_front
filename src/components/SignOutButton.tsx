import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { Button, Stack } from "@mui/material";
import { useNavigate } from 'react-router-dom'

const auth = getAuth();
export const SignOutButton:React.FC = () => {
  const navigate = useNavigate();
  const onClick = async()=>{
    try {
      await signOut(auth); // Assuming signOut returns a Promise
      console.log("Sign out successful");
      navigate(`/`);
    } catch (error) {
      console.error("Error signing out:", error);
      // Handle error if needed
    }
  };

  return (
      <Stack>
          <Button onClick={onClick}>Sign Out</Button>
      </Stack>
      )
}