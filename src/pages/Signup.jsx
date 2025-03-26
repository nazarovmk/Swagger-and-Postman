import { NavLink } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";

function Signup() {
  const { isPending, register, user } = useRegister();
  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const displayName = formData.get("displayName");
    const password = formData.get("password");
    register(email, displayName, password);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col w-[400px] p-6 rounded-lg shadow-lg bg-white">
        <div className="flex flex-col items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/10423/10423409.png"
            alt="Signup Icon"
            className="h-[80px] mb-4"
          />
          <h1 className="text-3xl font-bold mb-4">Signup</h1>
        </div>

        <form onSubmit={handleRegister} className="flex flex-col space-y-4">
          <div>
            <label className="text-sm font-semibold">Display Name</label>
            <input
              type="text"
              placeholder="Type here"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              name="displayName"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Email</label>
            <input
              type="email"
              placeholder="Type here"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              name="email"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {isPending && <button disabled>Loading...</button>}
          {!isPending && (
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Signup
            </button>
          )}

          <button
            type="button"
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          If you have an account, please{" "}
          <a href="/login" className="text-blue-500 underline">
            Login
          </a>
        </p>
        <NavLink to={"/"}>Home</NavLink>
      </div>
    </div>
  );
}

export default Signup;
