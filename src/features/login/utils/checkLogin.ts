"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const checkLogin = (logout?: boolean) => {
  const checkCookie = cookies().has("token");

  if (!checkCookie) {
    redirect("/");
  }

  if (logout) {
    cookies().delete("token");
    redirect("/");
  }

  redirect("/welcome");
};
