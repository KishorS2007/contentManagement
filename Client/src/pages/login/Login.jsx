import { useEffect } from "react";
import  GoogleLoginButton  from "../../components/google_login_button/GoogleLoginButton";
import { UseLoginData } from "../../store/UseLoginData";
export default function Login() {
  useEffect(()=>{
    localStorage.setItem('isLogin',false);
  },[])
  return (<>

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-[#ffffff]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="BIT content Management Website"
            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYB-39YIn8M7nenZPpLqrS485KtB_nMVAvgA&s"}
            className="mx-auto h-30 w-auto"
          />
          <h2 className="mt-2 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2 ">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder='Enter Email Address'
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-[#f7f7f7]  px-3 py-1.5 text-base  text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                  {/* <img src={Email} alt="email"  className='w-5 opacity-40 absolute top-[9px] left-1'/> */}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder='Enter Password'
                  
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-[#f7f7f7] px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={()=>{}}
                className="flex w-full justify-center rounded-md bg-[#9e4bff] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#9f4bfff1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          {/* <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p> */}
          {/* <p className='flex justify-center mt-2'>or</p>
          <button className='bg-white border-1 border-gray-300 my-5 p-1 w-full rounded flex justify-center
          hover:bg-gray-50' 
          // onClick={()=>Navigate('/home')}
          >
            <img src="data:image/png;base64,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" alt="" 
            className='w-7 mr-2'/>
            Sign in with google
          </button> */}
          <GoogleLoginButton />
          
        </div>
      </div>
</>)}
