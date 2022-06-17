import React from 'react'

export const About = () => {
  return (
    <div className='pb-5'>
      {/* ============================= Principal Message Section Start ============================ */}
      <div className='container mt-5'>
        <h3 className='text-center fw-bold orange-text-color'>
          Principal Message
        </h3>
        <div className='row mt-4'>
          <div className='col-lg-7 col-sm-12 d-flex flex-column justify-content-center'>
            <p className='text-justify'>
              It is with great pride and excitement that I write this letter to
              you as the Principal of Shri Badan Singh higher secondary School
              Bagrain. I am excited and honoured to have the opportunity to lead
              a school with such a rich tradition both in and out of the
              classroom.
            </p>
            <p className='text-justify'>
              Education is not just a process of giving knowledge for a future
              job but a lifelong process which creates an understanding of moral
              and ethical values to guide one’s life in a right path. As a
              parent, you want the best for your child and we are proud to be
              working with you to ensure that they are given the right knowledge
              to face the future challenges. Parents, students and the school
              authorities are a team and we have to complement each other’s
              effort.
            </p>
          </div>
          <div className='col-lg-4 col-sm-12 d-flex justify-content-center align-items-center mb-3'>
            <img src={require("../../assets/images/principalimage.JPG")} alt="principalimage" className='img-fluid img-thumbnail' style={{height:"270px", width:"270px"}}/>
          </div>
          <div className='col-lg-12'>
            <p className='text-justify'>
              The first step into school is that giant step forward, where
              children embark on the great adventure of discovering the wide
              world outside and the depth of the world within. As we hold the
              little finger and guide the young ones forward, we realize our
              responsibility of nurturing their curiosity, igniting their minds
              to pierce the skies, helping them to discover the world of books
              and richness of experience.
            </p>
            <p className='text-justify'>
              A good career is important but a good character is paramount. We
              believe that 'individuals' are the atoms that hold tremendous
              power within to serve as agents of change and thus are confident
              that our students, enriched with a sense of high morality and
              social responsibility will be makers of a virtuous society.
            </p>
            <p>
              Pramendra Singh
              <br />
              Principal <br />
              M.A., B.Ed (Hindi) <br />
              Contact no.- (+91)9084088146
            </p>
          </div>
        </div>
        <hr className='mt-5 orange-bg-color'/>
      </div>
      {/* ============================= Principal Message Section End ============================ */}

      {/* ============================= Principal Message Section End ============================ */}
      <div className='container mt-5'>
        <h3 className='text-center fw-bold orange-text-color'>
          Manager Message
        </h3>
        <div className='row mt-4 '>
          <div className='col-lg-7 col-sm-12 d-flex flex-column justify-content-center'>
            <p className='text-justify'>
              Dear students, parents, staff members and well-wishers. It is my
              honour and privilege to greet you with warmful prayerful wishes
              that you be showered with abundant blessings from the almighty.
            </p>
            <p className='text-justify'>
              By the Grace of God, co-operation of parents, well-wishers,
              efficient, dedicated and selfless teachers. The school will ever
              more strive for excellence and contribute in building a just and
              humane society.
            </p>
            <p className='text-justify'>
              Well, Primary and Secondary education plays a vital role in an
              individual’s career and intellectual development. It works as a
              solid foundation for successful higher education and subsequent
              life stages.
            </p>
          </div>
          <div className='col-lg-4 col-sm-12 d-flex justify-content-center align-items-center mb-3'>
            <img src={require("../../assets/images/managerimage.JPG")} alt="principalimage" className='img-fluid img-thumbnail' style={{height:"270px", width:"270px"}}/>
          </div>
          <div className='col-lg-12'>
            <p className='text-justify'>
              These days, we are witnessing many institutions and schools
              imparting school education at various levels. They are doing their
              level best; however, I believe that education is not just about
              books and exams; it is all about a force and great differentiator.
            </p>
            <p>
              Homendra Dev Sharma
              <br />
              Manager <br />
              Contact no.- (+91)9759602693
            </p>
          </div>
        </div>
        <hr className='mt-5 orange-bg-color'/>
      </div>
      {/* ============================= Principal Message Section End ============================ */}

      {/* ============================= Principal Message Section End ============================ */}
      <div className='container mt-5'>
        <h3 className='text-center fw-bold orange-text-color'>
          Rules & Regulations
        </h3>
        <div className='mt-4'>
          <div className='col-12'>
            <li>
              Students are required to wear proper uniform and display their
              Student ID Cards at all times.
            </li>
            <li>All students should reach the school in time.</li>
            <li>
              Parents/Guardians are not expected to visit their child/ward in
              classrooms anytime during the school operating hours, unless they
              are invited by the school.
            </li>
            <li>
              Kindly ensure that the child reports to his/her classes on time.
            </li>
            <li>
              No mobile phone is allowed to be carried to the school by any
              student
            </li>
            <li>
              Students need to maintain over 80% attendance for each term in
              every academic year.
            </li>
            <li>
              All students should behave in a courteous manner, wherever they
              go. They should always remember that the school is judged by the
              conduct of its students.
            </li>
            <li>
              A student caught using unfair means, and/or receives or gives
              assistance in any form during tests/exams will result in
              suspension from the school. Repetition of the same will result
              into expulsion from the school.
            </li>
            <li>
              All students must take part in physical exercise, games, sports
              and all other activities of the school in order to learn sportsman
              spirit, boost self-confidence and develop physical strength.
            </li>
            <li>
              Students arriving to the school later than the designated time
              will be sent home after three written warnings.
            </li>
            <li>
              Promotions are granted on the basis of performance in classroom and in the examinations conducted during the year.
            </li>
            <li>
              School fee must be paid on time as per the timelines communicated to the parents/guardians via the Fee Policy.
            </li>
            <li>
              No student will be allowed to appear for the examination unless all dues are cleared.
            </li>
          </div>
        </div>
      </div>
      {/* ============================= Principal Message Section End ============================ */}
    </div>
  )
}
