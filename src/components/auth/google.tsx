"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";

const GoogleSigninBtn = ({ className = "" }: { className?: string }) => {
  const handleSignin = async () => {
    await signIn("google", { redirect: true });
  };

  return (
    <Button
      variant={"outline"}
      className={cn("justify-between", className)}
      size={"lg"}
      onClick={handleSignin}
    >
      <FcGoogle />
      Sign in with google
      <div />
    </Button>
  );
};

export default GoogleSigninBtn;
