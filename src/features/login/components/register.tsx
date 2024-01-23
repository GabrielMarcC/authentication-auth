"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCreateUser } from "../hooks/useCreateUser";
import { registerSchema } from "../schemas";

export const Register = () => {
  const { validator, submitForm } = useCreateUser(registerSchema, "createuser");

  return (
    <div className="flex  flex-col items-center justify-center bg-white border rounded-lg p-6">
      <h1 className="text-[40px] text-black font-bold p-5">
        Create your account
      </h1>

      <Form {...validator}>
        <form
          onSubmit={validator.handleSubmit(submitForm)}
          className="flex flex-col gap-5"
        >
          <div>
            <FormField
              name="name"
              control={validator.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel hidden>name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="name"
                      placeholder="fullname"
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
              name="email"
              control={validator.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel hidden>name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="email"
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
              name="password"
              control={validator.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel hidden>name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="password"
                      className="w-[300px]  "
                    />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
          </div>

          <Button
            variant="outline"
            type="submit"
            className="w-[300px] hover:text-black bg-black text-white"
            onClick={() => alert("User created")}
          >
            Create
          </Button>
        </form>
      </Form>
    </div>
  );
};
