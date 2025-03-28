import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col w-[400px] p-6 rounded-lg shadow-lg bg-gray-900 text-white">
        <div className="flex flex-col items-center">
          <img
            src="https://img.freepik.com/premium-vector/3d-user-login-form-page_169241-6920.jpg"
            alt="Login Icon"
            className="h-[80px] mb-4"
          />
          <h1 className="text-3xl font-bold mb-4">Login</h1>
        </div>

        <form className="flex flex-col space-y-4">
          <div>
            <label className="text-sm font-semibold">Email</label>
            <input
              type="email"
              placeholder="Type here"
              className="w-full p-2 border border-gray-700 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-white"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Password</label>
            <input
              type="password"
              placeholder="Password"
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              className="w-full p-2 border border-gray-700 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-white"
            />
          </div>

          <button className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-600">
            Login
          </button>

          <button className="w-full bg-gray-800 text-white border border-gray-700 py-2 rounded-lg hover:bg-gray-700 flex items-center justify-center space-x-2">
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
            <span>Login with Google</span>
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          If you don't have an account, please{" "}
          <Link to="/signup" className="text-blue-400 underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
