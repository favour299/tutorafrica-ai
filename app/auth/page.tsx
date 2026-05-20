"use client";

import { useState } from "react";

export default function AuthPage() {
  const [role, setRole] = useState("student");

  const handleLogin = () => {
    if (role === "student") window.location.href = "/student";
    if (role === "parent") window.location.href = "/parent";
    if (role === "teacher") window.location.href = "/teacher";
    if (role === "school") window.location.href = "/school";
    if (role === "admin") window.location.href = "/admin";
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-blue-700 text-center">
          TutorAfrica AI Login
        </h1>

        <p className="text-gray-600 text-center mt-2">
          Secure access for students, parents, teachers, schools and admins.
        </p>

        <div className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full p-3 border rounded-xl"
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="w-full p-3 border rounded-xl"
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-3 border rounded-xl"
          >
            <option value="student">Student</option>
            <option value="parent">Parent</option>
            <option value="teacher">Teacher</option>
            <option value="school">School Admin</option>
            <option value="admin">Platform Admin</option>
          </select>

          <button
            onClick={handleLogin}
            className="w-full bg-blue-700 text-white p-3 rounded-xl font-semibold"
          >
            Login
          </button>
        </div>
      </div>
    </main>
  );
}