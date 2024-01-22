"use client";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { loginSchema } from "./schemas";
import Link from "next/link";

export const Login = () => {
  const login = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitForm = (values: z.infer<typeof loginSchema>) => {
    values.password;
  };

  return (
    <div className="w-[400px] h-[300px] bg-white  flex flex-col items-center justify-center rounded-md">
      <Form {...login}>
        <form
          onSubmit={login.handleSubmit(submitForm)}
          className="flex flex-col gap-5 items-center justify-center"
        >
          <div>
            <FormField
              control={login.control}
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
              control={login.control}
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
