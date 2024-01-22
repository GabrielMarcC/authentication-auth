export const Request = async () => {
  const res = await fetch(`${process.env.URL}/user`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
