"use server";

import { cookies } from "next/headers";

interface RequestData {
  name?: string;
  email: string;
  password: string;
}

export const Request = async (data: RequestData, path: string) => {
  try {
    const res = await fetch(`${process.env.URL}/${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      
    },);

    if (res.ok) {
      const data = await res.json();
      const token = data.acess_Token;
      cookies().set({
        name: "token",
        value: token,
        httpOnly: true,
        path: "/",
      });
    }
  } catch (error: any) {
    console.log(error.message);
    throw new Error("Failed to fetch data");
  }
};
