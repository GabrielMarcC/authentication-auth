"use server";

interface RequestData {
  name?: string;
  email: string;
  password: string;
}

export const Request = async (
  data: RequestData,
  path: string
): Promise<RequestData> => {
  try {
    const res = await fetch(`${process.env.URL}/${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
      }),
    });

    const result = await res.json();
    return result;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
