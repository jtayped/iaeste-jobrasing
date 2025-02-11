import GoogleSigninBtn from "@/components/auth/google";
import { Card } from "@/components/ui/card";
import React from "react";

const SigninPage = () => {
  return (
    <Card className="grid w-80">
      <h1 className="text-2xl font-semibold">Sign in</h1>
      <p className="text-sm text-muted-foreground mt-3 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, odio.</p>
      <GoogleSigninBtn />
    </Card>
  );
};

export default SigninPage;
