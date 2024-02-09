import { useEffect, useState } from 'react';
import axios from 'axios';

const Enquiries = () => {

  const [allEnquiries, setAllEnquiries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/enquiries`);
        const data = await response.data;
        setAllEnquiries(data);
      } catch(err){
        console.log('error while fetching enquiries');
        console.log(err);
      }
    }
    fetchData();
  }, [])

  return (
    <>
      <div className='row'>
        <h5> Enquiries</h5>
        <div className='table-responsive'>
          <table className='table table-primary'>
            <thead>
              <tr>
                <th scope='col'>Address</th>
                <th scope='col'>Name</th>
                <th scope='col'>Email</th>
                <th scope='col'>Mobile Number</th>
                <th scope='col'>Comments</th>
              </tr>
            </thead>
            <tbody>
              {allEnquiries.map((enquiry) => {
                return (
                  <tr key={enquiry._id}>
                    <th scope='row'>{enquiry.address} </th>
                    <td>{enquiry.name}</td>
                    <td> {enquiry.email}</td>
                    <td>{enquiry.mobile} </td>
                    <td>{enquiry.remarks} </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
 
export default Enquiries;