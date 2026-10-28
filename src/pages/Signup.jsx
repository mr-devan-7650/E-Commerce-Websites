
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSignup(e) {
    e.preventDefault();

    const existing = JSON.parse(localStorage.getItem("wdmUser") || "null");

    if (existing?.email === email) {
      alert("Email already registered. Please login.");
      return;
    }

    localStorage.setItem("wdmUser", JSON.stringify({ name, email, password }));
    navigate("/thank-you", { state: { name } });
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-950 px-4 py-8 text-white">
      <Link to="/" className="mb-10 text-3xl font-black tracking-widest">
        TechCart<span className="text-orange-500">STORE</span>
      </Link>

      <form onSubmit={handleSignup}
        className="w-full max-w-md rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-2xl sm:p-10">
        <p className="mb-3 text-xs font-bold tracking-[3px] text-orange-500">
          JOIN TechCart STORE
        </p>
        <h1 className="text-3xl font-extrabold">Create Account</h1>
        <p className="mb-7 mt-3 text-sm text-gray-400">
          Join us and discover the latest technology.
        </p>

        <label className="mb-2 block text-sm font-semibold">Full Name</label>
        <input required value={name} onChange={e => setName(e.target.value)}
          placeholder="Enter your full name"
          className="mb-4 w-full rounded-lg border border-gray-700 bg-gray-800 p-3 outline-none focus:border-orange-500" />

        <label className="mb-2 block text-sm font-semibold">Email Address</label>
        <input type="email" required value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="mb-4 w-full rounded-lg border border-gray-700 bg-gray-800 p-3 outline-none focus:border-orange-500" />

        <label className="mb-2 block text-sm font-semibold">Password</label>
        <input type="password" required minLength={6} value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Minimum 6 characters"
          className="w-full rounded-lg border border-gray-700 bg-gray-800 p-3 outline-none focus:border-orange-500" />

        <button className="mt-7 w-full rounded-lg bg-orange-500 p-3.5 font-bold transition hover:bg-orange-600">
          Create Account →
        </button>

        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/" className="font-bold text-orange-500">Login</Link>
        </p>
      </form>
    </main>
  );
}
