<<<<<<< HEAD
// import React from 'react';
// import Input from '../Components/Ui/Input';
// import Button from '../Components/Ui/Button';
// import { Link } from 'react-router';
// const Form = () => {
//   return (
//     <div className='flex h-dvh justify-center items-center bg-gray-200'>
//     <div className="w-80 rounded-lg shadow-2xl h-auto p-6 bg-white relative overflow-hidden">
//       <div className="flex flex-col justify-center items-center space-y-2">
//         <h2 className="text-2xl font-medium text-slate-700">Login</h2>


//       </div>



//       <form className="w-full mt-4 space-y-3">
//         <div>
//           <Input className="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300" placeholder="Username" id="username" name="username" type="text" />
//         </div>
//         <div>
//           <Input className="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300" placeholder="Password" id="password" name="password" type="password" />
//         </div>
//         <div className="flex items-center justify-between">
//           <div className="flex items-center">
//             <input className="mr-2 w-4 h-4" id="remember" name="remember" type="checkbox" />
//             <span className="text-slate-500">Remember me </span>
//           </div>
//           <Link className="text-blue-500 font-medium hover:underline">Forgot Password</Link>
//         </div>
//         <Button className="w-full justify-center py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md text-white ring-2" id="login" name="login" type="submit">
//           login
//         </Button>
//         <p className="flex justify-center space-x-1">
//           <span className="text-slate-700"> Have an account? </span>
//           <Link to='/registration' className="text-blue-500 hover:underline">Register</Link>
//         </p>
//       </form>
//     </div>
//     </div>
//   );
// }

// export default Form;

=======
>>>>>>> 7261c0f5d7896546c5d4c8cc3fcef208ad6f0fdf
import React from 'react';
import Input from '../Components/Ui/Input';
import Button from '../Components/Ui/Button';
import { Link } from 'react-router';
<<<<<<< HEAD
import { useState } from 'react';
const Login = () => {

const [loginData, setLoginData] = useState({
  username: '',
  password: ''
});


=======
const Form = () => {
>>>>>>> 7261c0f5d7896546c5d4c8cc3fcef208ad6f0fdf
  return (
    <div className='flex h-dvh justify-center items-center bg-gray-200'>
    <div className="w-80 rounded-lg shadow-2xl h-auto p-6 bg-white relative overflow-hidden">
      <div className="flex flex-col justify-center items-center space-y-2">
        <h2 className="text-2xl font-medium text-slate-700">Login</h2>


      </div>



      <form className="w-full mt-4 space-y-3">
        <div>
<<<<<<< HEAD
          <Input className="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300" placeholder="Username" id="username" name="username" type="text" value={loginData.username} onChange={(e) => setLoginData({...loginData, username: e.target.value})} />
        </div>
        <div>
          <Input className="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300" placeholder="Password" id="password" name="password" type="password" value={loginData.password} onChange={(e) => setLoginData({...loginData, password: e.target.value})} />
=======
          <Input className="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300" placeholder="Username" id="username" name="username" type="text" />
        </div>
        <div>
          <Input className="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300" placeholder="Password" id="password" name="password" type="password" />
>>>>>>> 7261c0f5d7896546c5d4c8cc3fcef208ad6f0fdf
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input className="mr-2 w-4 h-4" id="remember" name="remember" type="checkbox" />
            <span className="text-slate-500">Remember me </span>
          </div>
          <Link className="text-blue-500 font-medium hover:underline">Forgot Password</Link>
        </div>
        <Button className="w-full justify-center py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md text-white ring-2" id="login" name="login" type="submit">
          login
        </Button>
        <p className="flex justify-center space-x-1">
          <span className="text-slate-700"> Have an account? </span>
          <Link to='/registration' className="text-blue-500 hover:underline">Register</Link>
        </p>
      </form>
    </div>
    </div>
  );
}

<<<<<<< HEAD
export default Login;
=======
export default Form;
>>>>>>> 7261c0f5d7896546c5d4c8cc3fcef208ad6f0fdf
