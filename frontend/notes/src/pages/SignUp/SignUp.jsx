import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import PasswordInput from '../../components/Input/PasswordInput';
import { Link } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';

const SignUp = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState(null)

  const handleSignUp = async (e) => {
    e.preventDefault();

    if(!name) {
      setError("Please enter your name");
      return;
    }

    if(!validateEmail(email)){
      setError("Please enter a valid email address");
      return;
    }

    if(!password){
      setError("Please enter the password");
      return;
    }

    setError("")

    // Sign Up API Call
  }
  
  return (
    <>
      <Navbar/>

      <div className='flex item-center justify-center mt-28'>
        <div className='w-96 border rounded-lg bg-white dark:bg-dark dark:text-white px-7 py-10 drop-shadow-md'>
          <form onSubmit={handleSignUp}>
            <h4 className='text-wxl mb-7'>SignUp</h4>
            
            <input type="text" 
              placeholder='Name'
              className='input-box'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input type="text" 
              placeholder='email'
              className='input-box'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordInput value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}

            <button type='submit' className='btn-primary'>Login</button>

            <p className='text-sm text-center mt-4'>
                Already have an account?{" "}
              <Link to="/Login" className="font-medium text-primary underline">
                Login
              </Link>

            </p>

          </form>
        </div>
      </div>
    </>  
  )
}

export default SignUp