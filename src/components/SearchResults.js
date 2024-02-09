import { useParams } from 'react-router-dom';
import SearchResultsRow from './SearchResultsRow';

const SearchResults = (props) => {
  const paramsObj = useParams();
  const houses = props.allHouses;
  const filteredHouses = houses.filter((house) => {
    return (paramsObj.county === house.county);
  });

  return (
    <>
      <h2>Search Results</h2>
      <div className='table-responsive'>
        <table className='table table-primary'>
          <thead>
            <tr>
              <th scope='col'>Address</th>
              <th scope='col'>Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredHouses ? (
              filteredHouses.map((house) => {
                return (
                  <SearchResultsRow key={house._id} house={house} />
                );
              })
            ) : (
              <>
                <h2>No Search Results Found</h2>
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
 
export default SearchResults;
