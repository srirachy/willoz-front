import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import House from './components/House';
import SearchFilter from './components/SearchFilter';
import SearchResults from './components/SearchResults';
import SearchHouse from './components/SearchHouse';
import Login from './components/Login';
import Register from './components/Register';
import Enquiries from './components/Enquiries';
import './App.css';

function App() {
  const loci = useLocation();
  const [houseData, setHouseData] = useState([]);
  const [showFilter, setShowFilter] = useState(true);
  const siteUrl = loci.pathname;

  // fetch
  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/houses`);
        console.log(res);
        setHouseData(res.data);
      } catch(err){
        console.log('error while fetching houses');
        console.log(err);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    (siteUrl.includes('login') || siteUrl.includes('register')) ? setShowFilter(false) : setShowFilter(true);
  },[siteUrl]);

  return (
    <div className='container-fluid'>
      <header>
        <Header />
      </header>
      <main>
        {showFilter ? <SearchFilter allHouses={houseData}/> : null}
        
        <Routes>
          <Route path='/' element={<House houseInfo={houseData[0]} />} />
          <Route path='/searchresult/:county' element={<SearchResults allHouses={houseData} />} />
          <Route path='/searchhouse/:id' element={<SearchHouse allHouses={houseData} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          {/* change this to protected route in the future */}
          {(sessionStorage.length > 0 && (sessionStorage.getItem('role') === 'admin')) && <Route path='/enquiries' element={<Enquiries />} />}
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
