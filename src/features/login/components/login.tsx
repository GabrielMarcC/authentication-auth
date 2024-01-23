"use client";

import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { loginSchema } from "../schemas";
import Link from "next/link";
import { useCreateUser } from "../hooks/useCreateUser";

export const Login = () => {
  const { validator, submitForm } = useCreateUser(loginSchema, "auth");

  return (
    <div className="w-[400px] h-[300px] bg-white  flex flex-col items-center justify-center rounded-md">
      <Form {...validator}>
        <form
          onSubmit={validator.handleSubmit(submitForm)}
          className="flex flex-col gap-5 items-center justify-center"
        >
          <div>
            <FormField
              control={validator.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel hidden>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="email"
                      {...field}
                      className="w-[300px]"
                    />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={validator.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel hidden>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="password"
                      type="password"
                      {...field}
                      className="w-[300px]"
                    />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-start items-start w-full text-[12px] text-purple-500 ">
            <Link href={"/register"}> create an account</Link>
          </div>
          <Button
            type="submit"
            variant="outline"
            className="w-[300px] hover:text-black bg-black text-white"
          >
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
};
