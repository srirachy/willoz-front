import { useNavigate } from 'react-router-dom';

const SearchResultsRow = ({ house }) => {
  const navi = useNavigate();

  return (
    <>
      <tr className='cursor-pointer' onClick={() => navi(`/searchhouse/${house._id}`)}>
        <td>{house.address}</td>
        <td>{house.price}</td>
      </tr>
    </>
  );
};

export default SearchResultsRow;
