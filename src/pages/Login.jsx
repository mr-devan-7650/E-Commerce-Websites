
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("wdmUser") || "null");

    if (user && user.email === email && user.password === password) {
      navigate("/thank-you", { state: { name: user.name } });
    } else {
      alert("Invalid email or password. Please sign up first.");
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-950 px-4 py-8 text-white">
      <Link to="/" className="mb-10 text-3xl font-black tracking-widest">
        TechCart<span className="text-orange-500">STORE</span>
      </Link>

      <form onSubmit={handleLogin}
        className="w-full max-w-md rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-2xl sm:p-10">
        <p className="mb-3 text-xs font-bold tracking-[3px] text-orange-500">
          WELCOME BACK
        </p>
        <h1 className="text-3xl font-extrabold">Login to your account</h1>
        <p className="mb-8 mt-3 text-sm text-gray-400">
          Access your favourite tech products.
        </p>

        <label className="mb-2 block text-sm font-semibold">Email Address</label>
        <input type="email" required value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="mb-5 w-full rounded-lg border border-gray-700 bg-gray-800 p-3 outline-none focus:border-orange-500" />

        <label className="mb-2 block text-sm font-semibold">Password</label>
        <input type="password" required value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="w-full rounded-lg border border-gray-700 bg-gray-800 p-3 outline-none focus:border-orange-500" />

        <button className="mt-7 w-full rounded-lg bg-orange-500 p-3.5 font-bold transition hover:bg-orange-600">
          Login →
        </button>

        <p className="mt-6 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <Link to="/signup" className="font-bold text-orange-500">Sign up</Link>
        </p>

        
      </form>
    </main>
  );
}
