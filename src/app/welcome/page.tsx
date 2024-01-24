import { LogOut } from "@/features/login/components/log-out";

export default function Welcome() {
  return (
    <div className="w-screen h-screen bg-purple-700 felx items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full h-[50%]">
        <h1>Welcome to our log in and log out tests</h1>
        <LogOut />
      </div>
    </div>
  );
}
