"use client";
import Link from "next/link";
import { useState } from "react";

export default function CreateAccount() {
  const [userPayload, setUserPayload] = useState<IUserPayload>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    street: "",
    district: "",
    password: "",
    confirmPassword: "",
  });
  const fillInputs = () => {
    setUserPayload({
      firstName: "Aaron",
      lastName: "Mitchell",
      phoneNumber: "832-540-8313",
      street: "Bennet St",
      district: "Brighton/Allston",
      password: "testpass123",
      confirmPassword: "testpass123",
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };
  return (
    <main className="bg-orange-400">
      <div className="flex flex-row items-center">
        <h1 className="text-xl font-bold m-4">Create Account Page</h1>
        <Link href="/auth/sign-in" className="rounded p-1 h-8 w-16 bg-sky-300">Sign In</Link>
      </div>

      <form
        className="flex flex-col w-1/3 p-4 bg-green-200 rounded m-4"
        onClick={handleSubmit}
      >
        <label>First</label>
        <input
          className="rounded p-1"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUserPayload({ ...userPayload, firstName: e.target.value });
          }}
          value={userPayload.firstName}
        />

        <label>Last</label>
        <input
          className="rounded p-1"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUserPayload({ ...userPayload, lastName: e.target.value });
          }}
          value={userPayload.lastName}
        />

        <label>Phone Number</label>
        <input
          className="rounded p-1"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUserPayload({ ...userPayload, phoneNumber: e.target.value });
          }}
          value={userPayload.phoneNumber}
        />

        <label>Street</label>
        <input
          className="rounded p-1"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUserPayload({ ...userPayload, street: e.target.value });
          }}
          value={userPayload.street}
        />

        <label>District</label>
        <input
          className="rounded p-1"
          value={userPayload.district}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUserPayload({ ...userPayload, district: e.target.value });
          }}
        />

        <label>Password</label>
        <input
          className="rounded p-1"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUserPayload({ ...userPayload, password: e.target.value });
          }}
          value={userPayload.password}
        />

        <label>Confirm Password</label>
        <input
          className="rounded p-1"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUserPayload({ ...userPayload, confirmPassword: e.target.value });
          }}
          value={userPayload.confirmPassword}
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

export interface IUserPayload {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  street: string;
  district: string;
  password: string;
  confirmPassword: string;
}
