import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col w-[400px] p-6 rounded-lg shadow-lg bg-white">
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
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Login
          </button>

          <button
            type="button"
            className="w-full bg-white text-black border py-2 rounded-lg hover:bg-gray-100 flex items-center justify-center space-x-2"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="#4285f4"
                d="M386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
            </svg>
            <span>Login with Google</span>
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          If you don't have an account, please{" "}
          <a href="/signup" className="text-blue-500 underline">
            Signup
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
