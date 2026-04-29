import React from 'react';
import Input from '../Components/Ui/Input';
import Button from '../Components/Ui/Button';

const Registration = () => {

  return (
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div className="relative px-4 py-10  mx-8 md:mx-0 shadow-2xl rounded-3xl sm:p-10">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-center text-blue-500 mb-8">
            Registration
          </h2>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <Input
                className="text-primary"
                label="Full Name"
                type="text"
                placeholder="Enter your first name"
              />
            </div>

            <div>
              <Input
                className="text-primary"
                error=" Hey Man! where is your email?"
                label="E-mail"
                type="email"
                placeholder="Enter your E-mail"
              />
            </div>

            <div>
              <Input className="text-primary" label="User Name" type="text" />
            </div>
            <div>
              <Input
                className="text-primary"
                label="Pass-word"
                type="password"
                placeholder="password"
              />
            </div>
          </div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <Input
                label="Date of Birth"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-800 text-primary focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                type="date"
                id="dob"
              />
            </div>

            <div>
              <label
                className=" text-sm text-primary pb-1 block"
                htmlFor="gender"
              >
                Gender
              </label>

              <select
                className="border border-gray-300 rounded-lg outline-none px-3 py-2 mt-1 mb-5 text-sm w-full  text-primary focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                id="gender"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          
       

          <div className="mt-5">
            <Button
              className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              type="submit"
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}; 

export default Registration;
