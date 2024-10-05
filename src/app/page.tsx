"use client";
import Image from "next/image";
import MyImage from "./assests/myimg.jpg";
import Fb from "./assests/fbicon.png";
import Inst from "./assests/gitimg.png";
import exp from "./assests/882743.png";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos'
import 'aos/dist/aos.js'
import 'aos/dist/aos.css'
import Typed from 'typed.js'; // Import Typed.js
import { useEffect, useRef } from "react";
import { Concert_One } from 'next/font/google';

const concertOne = Concert_One({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  const typedElement = useRef(null); // Reference to the element for typing effect

  useEffect(() => {
    AOS.init({ duration: 3000 });

    const options = {
      strings: ["I’m Tashen Madhuwantha"], // The text that will be typed
      typeSpeed: 100, // Speed of typing       
      backSpeed: 50,  // Speed of deleting
      loop: true      // Loop typing
    };

    const typed = new Typed(typedElement.current, options);
    // Clean up when the component is unmounted
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container">
      <div className="container col-xxl-8 px-1 py-1">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6" data-aos="fade-right">
            <Image src={MyImage} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="400" height="300" loading="lazy" />
          </div>
          <div className="col-lg-6 " data-aos="fade-left">
            <h1 className={`mb-3 white-text ${concertOne.className}`} ref={typedElement}></h1>

            <div className="bg-transparent text-white">           
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <Image src={exp} className={styles.expImg} alt="..." /> 
              </div>
            <p className={styles.expText}>Experience</p>
            </div>

            <p className={styles.header}>
              Full Stack Developer with expertise in Java, PHP, Next.js, Node.js, React, Angular, Laravel, Spring Boot, AWS, and Express.js.
              I have a comprehensive understanding of both backend and frontend frameworks, enabling me to create dynamic, scalable, and responsive applications.
              Eager to apply my knowledge in real-world projects, showcasing a commitment to continuous learning and innovation in the ever-evolving field of software development.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Image src={Fb} className="m-lg-1" alt="..." />             
              <Image src={Inst} className="m-lg-2" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
