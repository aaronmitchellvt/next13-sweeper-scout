"use client";
import Link from "next/link";
import { useState } from "react";
import { LanguageServiceMode } from "typescript";

export default function SignIn() {
  const [userPayload, setUserPayload] = useState<IUserPayloadSignIn>({
    phoneNumber: "",
    password: "",
  });
  const fillInputs = () => {
    setUserPayload({
      phoneNumber: "832-540-8313",
      password: "testpass123",
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };
  return (
    <main className="bg-orange-400">
      <div className="flex flex-row items-center">
        <h1 className="text-xl font-bold m-4">Sign In Page</h1>
        <Link href="/auth/create-account" className="rounded p-1 h-8 w-12 bg-sky-300">
          Create Account
        </Link>
      </div>
      <form
        className="flex flex-col w-1/3 p-4 bg-green-200 rounded m-4"
        onClick={handleSubmit}
      >
        <label>Phone Number</label>
        <input
          className="rounded p-1"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUserPayload({ ...userPayload, phoneNumber: e.target.value });
          }}
          value={userPayload.phoneNumber}
        />

        <label>Password</label>
        <input
          className="rounded p-1"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUserPayload({ ...userPayload, password: e.target.value });
          }}
          value={userPayload.password}
        />

        <div className="flex flex-row items-center justify-center justify-items-center">
          <button
            className="mt-2 p-1 rounded bg-green-400 h-8 w-24 mr-1 border-2 border-green-500"
            onClick={() => fillInputs()}
          >
            Auto-Fill
          </button>
          <button className="mt-2 p-1 rounded bg-red-400 h-8 w-24 ml-1 border-2 border-red-500">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}

export interface IUserPayloadSignIn {
  phoneNumber: string;
  password: string;
}
