import Enquiry from "./Enquiry";

const House = (props) => {
  const houseData = props.houseInfo;

  return (
    <>
      {houseData ? (
        <>
          <div className='row'>
            <div className='col-sm-1' />
            <div className='col-sm-6'>{houseData.address}</div>
            <div className='col-sm-3'><b>{`Price: $${houseData.price} USD`}</b></div>
            <div className='col-sm-2' />
          </div>

          <div className='row'>
          <div className='col-sm-1' />
            <div className='col-sm-6'>
              <img src={`/img/${houseData.photo}`} alt='House One' className='w-75'/>
            </div>
            <div className='col-sm-3'>
              {houseData.description}
              {(props.showEnquiry && sessionStorage.length > 0 && sessionStorage.getItem('role') === 'user') && <Enquiry address={houseData.address}/> }
              {(props.showEnquiry && sessionStorage.length === 0) && <div className='mt-5 text-center text-primary'><span>Like what you see? Login to send an enquiry!</span></div>}
            </div>
          </div>
          <div className='col-sm-2' />
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}
 
export default House;