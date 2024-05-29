import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
export default function Login() {
  const { credntial, handleChange, loginData, handleCLick } = useAuth();

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   // Handle form submission
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleCLick}>
          {loginData?.map((item: any) => (
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                {item?.lable}
              </label>
              <input
                type={item?.type}
                id="password"
                name={item?.name}
                value={item?.value}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          ))}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
