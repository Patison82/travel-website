const Login = () => {
    return (
      <div className="min-h-screen bg-white-100 flex flex-col justify-center items-center">
        <div className="sm:shadow-xl px-8 pb-8 pt-12 bg-white rounded-xl space-y-6 max-w-xl w-full">
          <div className="flex justify-center mb-8">
            <img src="/logo.png" className="h-36 w-auto" alt="Logo" />
          </div>
          <h1 className="font-semibold text-3xl text-center mb-6">Sign in to Pavasa</h1>
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-3 px-4 rounded-md font-medium shadow-sm hover:bg-yellow-00 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Continue
            </button>
          </form>
          <p className="text-center text-sm mt-4">
            Don't have an account?{' '}
            <a href="/register" className="text-teal-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    );
  };
  
  export default Login;
  