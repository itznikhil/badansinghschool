import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export const Exams = () => {
  const [inputVal, setInputVal] = useState({
    year: '',
    class: '',
  })

  const handleInput = (e) => {
    const { name, value } = e.target
    setInputVal({
      ...inputVal,
      [name]: value,
    })
  }

  return (
    <div className='pb-5'>
      <div className='container mt-5'>
        <h3 className='text-center fw-bold orange-text-color'>
          Exams Procedures
        </h3>
        <div className='mt-5 col-12'>
          <p className='fw-bold'>For Class I to V:</p>
          <ul>
            <li>First Quarterly Exams: From 25th July to 30th July.</li>
            <li>Second Quarterly Exams: From 25th October to 30th October.</li>
            <li>Half-Yearly Exams: From 10th November to 25th November.</li>
            <li>Project Work: From 10th December.</li>
            <li>Third Quarterly Exams: From 20th January to 25th January.</li>
            <li>Annual Exams: From 10th March to 25th March.</li>
            <li>Result Declaration: On 31st March.</li>
          </ul>
        </div>
        <div className='mt-5 col-12'>
          <p className='fw-bold'>For Class VI to VIII:</p>
          <ul>
            <li>First Monthly Exams: From 15th July to 20th July.</li>
            <li>First Quarterly Exams: From 10th October to 20th October.</li>
            <li>Half-Yearly Exams: From !0th November to 25th November.</li>
            <li>
              Second Quarterly Exams: From 10th February to 25th February.
            </li>
            <li>Annual Exams: From 10th March to 25th March.</li>
            <li>Result Declaration: On 31st March.</li>
          </ul>
          <hr className='mt-5 orange-bg-color'/>
        </div>
        <h3 className='text-center fw-bold orange-text-color mt-5'>
          Download Result
        </h3>
        <div className='col-lg-6 col-md-12 col-sm-12 mt-5'>
          <div className='mb-3 row'>
            <label htmlFor='input1' className='col-sm-2 col-form-label fw-bold'>
              Year
            </label>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                id='input1'
                placeholder='Enter year ...'
                name='year'
                value={inputVal.year}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className='mb-3 row'>
            <label htmlFor='input2' className='col-sm-2 col-form-label fw-bold'>
              Class
            </label>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                id='input2'
                placeholder='Enter class ...'
                name='class'
                value={inputVal.class}
                onChange={handleInput}
              />
            </div>
          </div>
        </div>
        <div className='col-lg-12 col-sm-12 col-md-12'>
          <div className='row'>
            <div className='col-sm-10'>
              <button type='button' className='btn orange-bg-color text-white'>
                Download
              </button>
              &nbsp;&nbsp;
              <Link
                to='/'
                type='button'
                className='btn orange-bg-color text-white'
              >
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
