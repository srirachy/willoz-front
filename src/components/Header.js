import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navi = useNavigate();

  const logoutHandler = () => {
    sessionStorage.clear();
    navi('/');
  }

  return (
    <div className='row bg-vista-white align-items-center'>
      <div className='col-sm-1' />
      <div className='col-sm-2'>
        <Link to='/'>
          <img
            src='/img/zillow-logo.webp'
            alt='logo here'
            className='header-logo-img'
          />
        </Link>
      </div>
      <div className='col-sm-6 text-quicksand text-center'>
        <em>
          <b>Your real estate destination</b>
        </em>
      </div>
      <div className='col-sm-1' />
      <div className='col-sm-2'>
        {sessionStorage.length > 0 ? (
            <button className='btn btn-rodeo-dust mx-3' onClick={logoutHandler}>
              Logout
            </button>
        ) : (
          <>
            <Link to='/login'>
              <button
                className='btn btn-spicy-pink mx-3'
                onClick={() => navi('/')}
              >
                Login
              </button>
            </Link>
            <Link to='/register'>
              <button className='btn btn-quicksand' onClick={() => navi('/')}>
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
