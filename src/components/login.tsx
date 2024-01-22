"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
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
} from "./ui/form";

export const Login = () => {
  const loginSchema = z.object({
    email: z.string().min(6, { message: "invalid email" }),
    password: z.string().min(6, { message: "min 6 caracteres" }),
  });

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
