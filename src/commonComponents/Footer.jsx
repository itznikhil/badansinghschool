import React from 'react'

export const Footer = () => {
  return (
    <div className='card'>
      <div className='card-body dark-bg-color text-white'>
        <div className='container p-3'>
          <h3 className='fw-bold mb-4'>About School</h3>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <p className='text-justify'>
                <p>
                  Shri Badan Singh Higher Secondary School is located in Village
                  and Post Bagrain Development Block, Wazirganj Tahseel Bisauli,
                  District Badaun (U.P.). It was established in 1968 by them
                  then village head late Pandit Shri Nathuram Sharma. In 1971,
                  the school was taken over by the Uttar Pradesh Government on
                  grant.
                </p>
                <p>
                  In the year 1998, the school got the recognition of high
                  school. Presently the school is on the path of progress under
                  the guidance of Mr. Homendra Dev Sharma(manager), the son of
                  Late Mr. Nathuram Sharma to provide quality education and
                  encourage other children to join the school and complete their
                  minimum education.
                </p>
              </p>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <p>
                <span className='fw-bold'>Address : </span> <br />
                Village & Post - Bagrain, Development Block - Wazirganj, Tehsil
                - Bisauli, District - Budaun, Uttar Pradesh, PIN - 243725
              </p>
              <p>
                <span className='fw-bold'>School Code</span> - 271078,
                <br />
                <span className='fw-bold'>UDISE Code</span> - 09191205605
              </p>
              <p>
                <div className='col-sm-12 col-lg-6'>
                  <span className='fw-bold'>Email Address : </span> <br />
                  principalbadansingh1996@gmail.com, <br />
                  principal@badansinghschool.com
                </div>
              </p>
              <p>
                <div className='col-sm-12 col-lg-6'>
                  <span className='fw-bold'>Contact Number : </span> <br/>
                  +91-9084088146
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='card-footer d-flex justify-content-center align-items-center text-white orange-bg-color'>
        <p className='text-center pt-2'>
          Designed & Developed By <br/>
          Ninepages Techsolutions Private Limited, Agra
        </p>
      </div>
    </div>
  )
}
