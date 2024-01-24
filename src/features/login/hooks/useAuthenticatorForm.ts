import { loginSchema } from "../schemas/index";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Request } from "@/utils/request";
import { registerSchema } from "../schemas";

export const useAuthenticatorForm = (
  schema: typeof registerSchema | typeof loginSchema,
  path: string
) => {
  const validator = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const submitForm = async (
    values: z.infer<typeof registerSchema | typeof loginSchema>
  ) => {
    try {
      const data = await Request(values, path);
      return data;
    } catch (error: any) {
      console.error(error.message);
      throw error;
    }
  };

  return { validator, submitForm };
};
