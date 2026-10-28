
import { Link, useLocation } from "react-router-dom";
import ProductList from "./ProductList";

export default function ThankYou() {
  const location = useLocation();

  const savedUser = JSON.parse(localStorage.getItem("wdmUser") || "null");
  const name = location.state?.name || savedUser?.name || "Customer";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-950 px-4 py-8 text-center text-white">
      <Link to="/" className="mb-12 text-3xl font-black tracking-widest">
        TechCart <span className="text-orange-500">STORE</span>
      </Link>

      <section className="w-full max-w-lg rounded-2xl border border-gray-800 bg-gray-900 p-8 shadow-2xl sm:p-12">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-orange-500 bg-orange-500/10 text-5xl text-orange-500">
          ✓
        </div>

        <p className="mb-3 text-xs font-bold tracking-[3px] text-orange-500">
          SUCCESS
        </p>
        <h1 className="text-3xl font-extrabold sm:text-4xl">
          Thank You, {name}!
        </h1>
        <p className="mt-5 leading-7 text-gray-400">
          Welcome to TechCart STORE. Your account has been created successfully.
          You're ready to explore our latest tech products.
        </p>

        <Link to="/ProductList "
          className="mt-8 block rounded-lg bg-orange-500 p-4 font-bold transition hover:bg-orange-600">
          Continue Shopping →
        </Link>

        <p className="mt-6 text-sm text-gray-500">
          Happy Shopping with TechCart STORE!
        </p>
      </section>
    </main>
  );
}
