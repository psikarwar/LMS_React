import React from 'react';

const SignUpForm: React.FC = () => {
  return (
    <div className="text-left">
      <h1 className="font-inter  text-center font-semibold text-4xl text-slate-900 mb-10 mt-20">Create Your Account</h1>
      <form>
        <div className="flex justify-between gap-5 mb-1">
          <div className="flex-1">
            <label className="font-inter font-semibold text-lg text-slate-900 mb-2 block">Full Name</label>
            <div className="flex justify-between gap-2">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 border border-slate-200 rounded-lg text-slate-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border border-slate-200 rounded-lg text-slate-400"
              />
            </div>
          </div>
        </div>
        <div className="mb-5">
          <label className="font-inter font-semibold text-lg text-slate-900 mb-2 block">Username</label>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 border border-slate-200 rounded-lg text-slate-400"
          />
        </div>
        <div className="mb-5">
          <label className="font-inter font-semibold text-lg text-slate-900 mb-2 block">Email</label>
          <input
            type="email"
            placeholder="Email ID"
            className="w-full p-3 border border-slate-200 rounded-lg text-slate-400"
          />
        </div>
        <div className="flex justify-between gap-5 mb-5">
          <div className="flex-1">
            <label className="font-inter font-semibold text-lg text-slate-900 mb-2 block">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full p-3 border border-slate-200 rounded-lg text-slate-400"
            />
          </div>
          <div className="flex-1">
            <label className="font-inter font-semibold text-lg text-slate-900 mb-2 block">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 border border-slate-200 rounded-lg text-slate-400"
            />
          </div>
        </div>
        <button className="flex items-center justify-start gap-2 mt-5 px-6 py-2 bg-slate-900 text-white font-inter font-medium text-sm rounded-lg w-fit">
  Create Account
  <img src="./assets/icon-arrow-narrow-right.svg" alt="arrow" />
</button>

      </form>
      <div className="flex items-center justify-center my-10">
        <img src="./assets/line-34.svg" alt="line" />
        <span className="font-inter font-normal text-sm text-slate-400 mx-2">Sign up with</span>
        <img src="./assets/line-35.svg" alt="line" />
      </div>
      <div className="flex justify-between mt-5">
        <div className="flex items-center justify-center w-56 h-12 border border-slate-200 rounded-lg bg-white cursor-pointer gap-2 hover:bg-slate-100">
          <img src="./assets/facebook-logo-primary-2.svg" alt="Facebook" />
          <span>Facebook</span>
        </div>
        <div className="flex items-center justify-center w-56 h-12 border border-slate-200 rounded-lg bg-white cursor-pointer gap-2 hover:bg-slate-100">
          <img src="./assets/google.svg" alt="Google" />
          <span className="text-[#ea4335]">Google</span>
        </div>
        <div className="flex items-center justify-center w-56 h-12 border border-slate-200 rounded-lg bg-white cursor-pointer gap-2 hover:bg-slate-100">
          <img src="./assets/providers-image-1.svg" alt="Microsoft" />
          <span className="text-black">Microsoft</span>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
