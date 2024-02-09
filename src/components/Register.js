import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formObj, setFormObj] = useState({
    name: '',
    email: '',
    tele: '',
    password: '',
    cpassword: '',
  });
  const [isRegistered, setIsRegistered] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    const {name, email, tele, password, cpassword} = formObj;
    const pwMatch = (password === cpassword) ? true : false;
    console.log(formObj);

    if(pwMatch) {
      const sendObj = {
        name,
        email,
        tele,
        password,
      }
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/register`,
          { ...sendObj },
          // { headers: { 'Content-Type': 'multipart/form-data' } }
        );
        console.log(response);
        if(response.data){
          setIsRegistered(true);
          console.log('successfully registered');
        } else{
          setIsRegistered(false);
          setErrorMsg('did not sign up successfully')
          console.log(errorMsg);
        }
        console.log('successfully registered');
      } catch (err){
        setIsRegistered(false);
        setErrorMsg('error when registering')
        console.log(errorMsg);
        console.log(err);
        // check for duplication user eventually
      }
    } else {
      setIsRegistered(false);
      setErrorMsg('password mismatch');
      console.log(errorMsg);
    }
  }

  return isRegistered ? (
    <div className='d-flex justify-content-center align-items-center' id='reg-success'>
      <div className='text-center text-success'>
        <span>You have successfully registered. Happy house hunting!</span>
      </div>
    </div>
  ) : (
    <div className='d-flex justify-content-center mt-3' id='reg-form'>
      <form>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            className='form-control'
            name='name'
            id='user-name'
            aria-describedby='helpId'
            placeholder='Jane Doe'
            onChange={(e) =>
              setFormObj({ ...formObj, [e.target.name]: e.target.value })
            }
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='tele' className='form-label'>
            Phone Number
          </label>
          <input
            type='tel'
            className='form-control'
            name='tele'
            id='user-tele'
            placeholder='408-555-9874'
            onChange={(e) =>
              setFormObj({ ...formObj, [e.target.name]: e.target.value })
            }
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='email'
            className='form-control'
            name='email'
            id='user-email'
            placeholder='meow@abc.com'
            onChange={(e) =>
              setFormObj({ ...formObj, [e.target.name]: e.target.value })
            }
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            name='password'
            id='user-password'
            placeholder='Password'
            onChange={(e) =>
              setFormObj({ ...formObj, [e.target.name]: e.target.value })
            }
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='cpassword' className='form-label'>
            Confirm Password
          </label>
          <input
            type='text'
            className='form-control'
            name='cpassword'
            id='user-cpassword'
            placeholder='Password'
            onChange={(e) =>
              setFormObj({ ...formObj, [e.target.name]: e.target.value })
            }
          />
        </div>

        <button
          type='button'
          className='btn btn-quicksand w-100'
          onClick={submitHandler}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
 
export default Register;