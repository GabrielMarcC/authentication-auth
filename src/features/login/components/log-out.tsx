"use client";

import { Button } from "@/components/ui/button";
import { checkLogin } from "../utils/checkLogin";

export const LogOut = () => {
  return (
    <div>
      <Button
        variant="outline"
        className="w-[300px] hover:text-black bg-black text-white border-black"
        onClick={() => checkLogin(true)}
      >
        log out
      </Button>
    </div>
  );
};
