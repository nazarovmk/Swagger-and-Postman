import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col">
        <div className="w-[100px] h-[100px] items-center flex flex-col justify-center ml-auto mr-auto">
          <img
            src="https://img.freepik.com/premium-vector/3d-user-login-form-page_169241-6920.jpg"
            alt=""
            className="flex h-[100px]"
          />
          <h1 className="text-3xl mb-10">Login</h1>
        </div>
        <label htmlFor="Email" className="mb-2">
          <h2 className="mb-1">Email</h2>
          <input type="email" placeholder="Type here" className="input" />
        </label>
        <h2 className="mb-1">Password</h2>
        <label htmlFor="Password" className="input validator mb-2">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
              <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
            </g>
          </svg>
          <input
            type="password"
            required
            placeholder="Password"
            minlength="8"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
          />
        </label>
        <button className="btn btn-active btn-primary mb-2">Login</button>
        <button className="btn bg-white text-black border-[#e5e5e5] mb-2">
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
        <p>
          If you don't have an account, please
          <Link to="/signup" className="text-blue-500 underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
