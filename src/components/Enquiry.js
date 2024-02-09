import { useState } from 'react';
import axios from 'axios';

const Enquiry = (props) => {
  const [enquiryObj, setEnquiryObj] = useState({
    name: sessionStorage.getItem('email'),
    email: sessionStorage.getItem('name'),
    mobile: sessionStorage.getItem('mobile'),
    remarks: '',
  });
  const [isEnquirySubmit, setIsEnquirySubmit] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try{
      const sendEnquiryObj = {...enquiryObj, address: props.address};
      console.log(sendEnquiryObj);
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/addenquiry`, {...sendEnquiryObj});
      console.log(response.data);
      console.log('enquiry submitted')
      setIsEnquirySubmit(true);
    } catch (err){
      console.log('error adding enquiry');
      setIsEnquirySubmit(false);
    }
  }

  return isEnquirySubmit ? (
    <>
      <div className="mt-5 text-center">
        <span className="text-success">
          Thanks for submitting! We will get in touch with you soon!
        </span>
      </div>
    </>
  ) : (
    <>
      <form className="mt-4">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <p>{enquiryObj.email}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <p>{enquiryObj.name}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">
            Mobile
          </label>
          <p>{enquiryObj.mobile}</p>
        </div>

        <div className="mb-3">
          <label htmlFor="remarks" className="form-label">
            Remarks
          </label>
          <input
            type="text"
            className="form-control"
            name="remarks"
            id="enq-remarks"
            placeholder=""
            onChange={(e) =>
              setEnquiryObj({ ...enquiryObj, [e.target.name]: e.target.value })
            }
          />
        </div>
        <button
          type="submit"
          className="btn btn-cinereous w-100"
          onClick={submitHandler}
        >
          Submit
        </button>
      </form>
    </>
  );
}
 
export default Enquiry;