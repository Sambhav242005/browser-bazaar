"use client";

import {
  AuthCredentialsValidatorRegister,
  TAuthCredentialsValidatorRegister,
} from "@/collections/account-credentails-validator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function () {
  const {
    register: registration,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialsValidatorRegister>({
    resolver: zodResolver(AuthCredentialsValidatorRegister),
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()

  const onSubmit = async ({ email, password }: TAuthCredentialsValidatorRegister) => {
    try {
      


      router.replace("login");

    } catch (error) {}
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <div className="grid gap-1 py-2">
              <Label htmlFor="name">Name</Label>
              <Input
                {...registration("name")}
                className={cn({
                  "focus-visible:ring-red-500": errors.name,
                })}
                placeholder="your@name"
              />
              {errors?.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="grid gap-1 py-2">
              <Label htmlFor="username">Username</Label>
              <Input
                {...registration("username")}
                className={cn({
                  "focus-visible:ring-red-500": errors.username,
                })}
                placeholder="your@username"
              />
              {errors?.username && (
                <p className="text-sm text-red-500">{errors.username.message}</p>
              )}
            </div>
            
            <div className="grid gap-1 py-2">
              <Label htmlFor="email">Email</Label>
              <Input
                {...registration("email")}
                className={cn({
                  "focus-visible:ring-red-500": errors.email,
                })}
                placeholder="you@example.com"
              />
              {errors?.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="grid gap-1 py-2">
              <Label htmlFor="password">Password</Label>
              <Input
                {...registration("password")}
                type="password"
                className={cn({
                  "focus-visible:ring-red-500": errors.password,
                })}
                placeholder="Password"
              />
              {errors?.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
