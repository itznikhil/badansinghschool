import React from 'react'

export const Admission = () => {
  return (
    <div className='pb-5'>
      {/* ============================= Admission Section Start ============================ */}
      <div className='container mt-5'>
        <h3 className='text-center fw-bold orange-text-color'>
          Admission Section
        </h3>
        <div className='row mt-4'>
          <div className='col-lg-12'>
            <p>
              <span className='fw-bold'>Admission Procedures:</span>
              <br />
              <span>
                Admission to the Shri Badan Singh higher Secondary School is
                done via applications forms without any admission fee.
              </span>
            </p>
            <p>
              <span className='fw-bold'>Acceptance of admission:</span>
              <br />
              <li>
                Students are admitted on First Come, First Served basis
                depending on vacancies.
              </li>
              <li>
                We conduct no formal interviews with the child or the parent.
              </li>
              <li>
                Selected candidates will be required to make the fee payment on
                time.
              </li>
              <li>
                The school reserves the right to admissions. In all matters
                pertaining to admission, the decision of the Admission
                Department will be final.
              </li>
            </p>
          </div>
        </div>
        <hr className='mt-5 orange-bg-color'/>
      </div>
      {/* ============================= Admission Section Start ============================ */}

      {/* ============================= Uniform Section Start ============================ */}
      <div className='container mt-5'>
        <h3 className='text-center fw-bold orange-text-color'>
          Uniform Section
        </h3>
        <div className='row mt-4'>
          <div className='col-lg-12'>
            <p className='fw-bold'>Uniform For 6-10</p>
            <p>
              <span className='fw-bold'>Girls : </span>
              <br />
              <span>Green check kurta and White salwar.</span>
            </p>
            <p>
              <span className='fw-bold'>Boys : </span>
              <br />
              <span>White shirt and Khaki pant</span>
            </p>
            <p>
                <span className='fw-bold'>For winters :</span> With Navy blue
              sweater
            </p>
          </div>
        </div>
      </div>
      {/* ============================= Uniform Section Start ============================ */}
    </div>
  )
}
