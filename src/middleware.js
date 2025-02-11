import { NextResponse } from "next/server";
import { auth } from "./server/auth";
import { authConfig } from "./server/auth/config";

export default auth((req) => {
  const { nextUrl } = req;

  if (!req.auth) {
    return NextResponse.redirect(new URL(authConfig.pages.signIn, nextUrl));
  }
});

export const config = {
  matcher: [`/((?!api|verify|signin|_next/static|_next/image|favicon.ico).*)`],
};
