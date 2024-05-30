import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Input } from "../../components/inputs/input";
export default function Register() {
  const { handleChange, loginData, handleCLick } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <form onSubmit={(e) => handleCLick(e, "signIn")}>
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
          {loginData?.map((item: any) => (
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                {item?.lable}
              </label>
              <Input
                type={item?.type}
                id="password"
                name={item?.name}
                value={item?.value}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                required={"required"}
              />
            </div>
          ))}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
            <a href="/Login" className="text-sky-400 font-size: 0.75rem">
              back to login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
