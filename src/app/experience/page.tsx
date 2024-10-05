import React from 'react'

function page() {
  return (
    <div className="container">
      <div className=" bg-transparent text-white container col-xxl-8 px-1 py-1">       
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6 mt-0" data-aos="fade-left">
            <h3 className="title">Education</h3>
            <div className="edu-box">
              <div className="edu-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-calendar '>2023-present</i></div>
                  <h4 className="sub-topic">Diploma in software Engineering</h4>
                  <p>Institute of computer Engineering Technology (Icet Cetified Master)</p>
                </div>
              </div>
              <div className="edu-content">
                <div className="content">
                  <div className="year"><i className="bx bxs-calendar">2017-2022</i></div>
                  <h4 className="sub-topic">Bachlelor Degree - University</h4>
                  <p>Bachelor of Engineering Technology (Hons)
                    University of Sri Jayewardenepura.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-10 col-sm-8 col-lg-6" data-aos="fade-right">
            <h3 className="title mt-3">Experience</h3>
            <div className="edu-box">
            <div className="edu-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-calendar '>2024 April- Present</i></div>
                  <h4 className="sub-topic">Associate Software Engineer -Full stack</h4>
                  <p>Codeaisys It Solutions -4A Technologies (pvt) Ltd- Matara, Sri
                  Lanka</p>
                </div>
              </div>
              <div className="edu-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-calendar '>2023-2024</i></div>
                  <h4 className="sub-topic">Full stack development Trainning Program</h4>
                  <p>Institute of computer Engineering Technology (Icet Cetified Master)</p>
                </div>
              </div>
              <div className="edu-content">
                <div className="content">
                  <div className="year">6 months</div>
                  <h4 className="sub-topic">Engineening Tarinee</h4>
                  <p>Access Engineering PLC</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default page
