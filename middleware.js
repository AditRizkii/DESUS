import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export default async function middleware(req) {
  // Get the pathname of the request (e.g. /, /protected)
  const path = req.nextUrl.pathname;

  const trueArr = [
    "/admin",
    "/admin/diagnosa",
    "/admin/gejala",
    "/admin/hasil",
    "/admin/user",
  ];
  // const checkPath = (path) => {
  //   if (trueArr.includes(path)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };
  // If it's the root path, just render it
  if (path === "/") {
    return NextResponse.next();
  }

  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!session && path === "/admin") {
    return NextResponse.redirect(new URL("/login", req.url));
  } else if (!session && path === "/admin/user") {
    return NextResponse.redirect(new URL("/login", req.url));
  } else if (!session && path === "/admin/diagnosa") {
    return NextResponse.redirect(new URL("/login", req.url));
  } else if (!session && path === "/admin/hasil") {
    return NextResponse.redirect(new URL("/login", req.url));
  } else if (!session && path === "/admin/gejala") {
    return NextResponse.redirect(new URL("/login", req.url));
  } else if (session && path === "/login") {
    return NextResponse.redirect(new URL("/admin", req.url));
  }
  return NextResponse.next();
}
