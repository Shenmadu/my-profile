import React from 'react'
import styles from "./page.module.css";


function page() {
    const skills = [
        { name: 'Java', value: '300px' },
        { name: 'PHP', value: '320px' },
        { name: 'JavaScript', value: '300px' },
        { name: 'Spring Boot', value: '300px' },
        { name: 'Laravel', value: '300px' },
        { name: 'Node Js', value: '300px' },
        { name: 'Express Js', value: '300px' },
        { name: 'JavaFX', value: '280px' },
        { name: 'React Js', value: '320px' },
        { name: 'Next Js', value: '300px' },
        { name: 'Angular', value: '250px' },
        { name: 'HTML', value: '320px' },
        { name: 'Electron', value: '250px' },
        { name: 'AWS', value: '200px' }
      ];
  return (
    <div className='container'>
        <div className="bg-transparent text-white container row ">
            <div className="col-lg-4 col-sm-12 mx-auto " data-aos="flip-up">           
                <div className="">
                    <div className={styles.content}>
                        {skills.slice(0, 7).map((skill, index) => (
                            <div key={index} className="mb-3">
                                <h5>{skill.name}</h5>
                                <div className="progress" 
                                        role="progressbar" 
                                        aria-label="Animated striped example"
                                        aria-valuemin={0} 
                                        aria-valuemax={100}>
                                        <div className="progress-bar progress-bar-striped progress-bar-animated"
                                            style={{ width: skill.value }}>
                                        </div>
                                </div>             
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-sm-12 mx-auto" data-aos="flip-down">            
                <div className="">               
                    <div className={styles.content}>
                        {skills.slice(7).map((skill, index) => (
                            <div key={index} className="mb-3">
                                <h5>{skill.name}</h5>
                                <div className="progress" 
                                    role="progressbar" 
                                    aria-label="Animated striped example"
                                    aria-valuemin={0} 
                                    aria-valuemax={100}>
                                    <div className="progress-bar progress-bar-striped progress-bar-animated"
                                        style={{ width: skill.value }}>
                                    </div>
                                </div>                             
                            </div>
                        ))}
                    </div>  
                </div>
            </div>
        </div>
    </div> 
  )
}

export default page
