import { useParams } from 'react-router-dom'; 
import House from './House';

const SearchHouse = ({allHouses}) => {
  const paramsObj = useParams();
  const curHouse = allHouses.find((house) => {
    return (Number(paramsObj.id) === house._id);
  });

  return ( 
    <>
      <div className='container'>
        <h2>Searched Home</h2>
      </div>

      {curHouse ? <House houseInfo={curHouse} showEnquiry={true} /> : <h3>Couldn't find house</h3>}

    </>
   );
}
 
export default SearchHouse;