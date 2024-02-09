import { useNavigate } from 'react-router-dom';

const SearchFilter = (props) => {
  const housesData = props.allHouses;
  const navi = useNavigate();

  const houseCounties = housesData.map((house) => {
    return house.county;
  });
  const uniqueCounties = Array.from(new Set(houseCounties));

  return (
    <>
      {uniqueCounties ? (
        <div className='row mt-2'>
          <div className='col-sm-12 text-center'>
            <select onChange={(e) => navi(`/searchresult/${e.target.value}`)}>
              <option value='select'>Select County</option>
              {uniqueCounties.map((county) => {
                return (
                  <option key={county} value={county}>
                    {county}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}
 
export default SearchFilter;