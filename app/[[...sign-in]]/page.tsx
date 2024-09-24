"use client";

import loginImage from "@/public/assets/loginImage.jpg";
import siteLogo from "@/public/logo.png";
import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  const { user } = useUser();
  // const { isLoaded, isSignedIn, user } = useUser();

  const router = useRouter();

  useEffect(() => {
    const role = user?.publicMetadata.role;

    if (role) {
      router.push(`/${role}`);
    }
  }, [user, router]);

  return (
    <main className="flex h-screen items-center justify-center p-5 bg-stone-200">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-xl shadow-black/30 bg-white">
        <div className="w-full space-y-5 overflow-y-auto p-10 md:w-1/2">
          <Image
            src={siteLogo}
            alt=""
            width={100}
            height={100}
            className="mx-auto"
          />
          <h1 className="text-center text-2xl lg:text-3xl font-bold">
            School Management System
          </h1>
          <h2 className="text-gray-400">Sign in to your account</h2>

          <div className="space-y-5">
            <SignInForm />
            <Link
              href="https://www.josephopio.com"
              target="_blank"
              className="block text-center hover:underline font-bold"
            >
              Contact Dev
            </Link>
          </div>
        </div>
        <Image
          src={loginImage}
          alt=""
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
};

export default LoginPage;

function SignInForm() {
  return (
    <div>
      <SignIn.Root>
        <SignIn.Step name="start">
          <Clerk.GlobalError className="text-sm text-red-400" />
          <div className="flex flex-col gap-4">
            <Clerk.Field name="identifier" className="flex flex-col gap-2">
              <Clerk.Label className="font-medium text-gray-500">
                Username
              </Clerk.Label>
              <Clerk.Input
                type="text"
                required
                className="p-2 rounded-md ring-1 ring-gray-300"
              />
              <Clerk.FieldError className="text-xs text-red-400" />
            </Clerk.Field>
            <Clerk.Field name="password" className="flex flex-col gap-2">
              <Clerk.Label className="font-medium text-gray-500">
                Password
              </Clerk.Label>
              <Clerk.Input
                type="password"
                required
                className="p-2 rounded-md ring-1 ring-gray-300"
              />
              <Clerk.FieldError className="text-xs text-red-400" />
            </Clerk.Field>
            <SignIn.Action
              submit
              className="bg-blue-500 text-white my-1 rounded-md font-medium p-[10px]"
            >
              Sign In
            </SignIn.Action>
          </div>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  );
}
