import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidCredentials, setIsValidCredentials] = useState(true);
  const navi = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {email, password});
      console.log(response);
      if(response.data.length > 0) {
        sessionStorage.setItem('name', response.data[0].name);
        sessionStorage.setItem('email', response.data[0].email);
        sessionStorage.setItem('mobile', response.data[0].tele);
        sessionStorage.setItem('role', response.data[0].role);
        (response.data[0].role === 'admin') ? navi('/enquiries') : navi('/');
        // setIsValidCredentials(true);
        console.log(response.data);
      } else {
        setIsValidCredentials(false);
      }
    } catch (err) {
      console.log('error when logging in')
      console.log(err);
    }
  }

  return (
    <div className='d-flex justify-content-center mt-3'>
      <form>
        {!isValidCredentials && (
          <div className='mb-3'>
            <span className='text-danger'>Invalid credentials. Please try again</span>
          </div>
        )}
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='email'
            className='form-control'
            name='email'
            id='user-email'
            placeholder='abc@email.com'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            name='password'
            id='user-password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type='submit'
          className='btn btn-spicy-pink w-100'
          onClick={submitHandler}
        >
          Login
        </button>
      </form>
    </div>
  );
}
 
export default Login;


