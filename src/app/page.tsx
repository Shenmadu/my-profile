"use client";
import Image from "next/image";
import MyImage from "./assests/myimg.jpg";
import Fb from "./assests/fbicon.png";
import Inst from "./assests/gitimg.png";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typed from 'typed.js';
import { useEffect, useRef } from "react";
import { Concert_One } from 'next/font/google';

const concertOne = Concert_One({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  const typedElement = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 3000 });

    const options = {
      strings: ["’m Tashen"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container">
      <div className="row align-items-center g-5 py-5">
        {/* Image Section */}
        <div
          className="col-12 col-md-6 col-lg-5 order-md-2 text-center"
          data-aos="fade-right"
        >
          <Image
            src={MyImage}
            className="d-block mx-auto img-fluid rounded-circle"
            alt="Tashen Image"
            width={300}
            height={300}
            loading="lazy"
          />
        </div>

        {/* Content Section */}
        <div className="col-12 col-md-6 col-lg-7 text-center text-md-start" data-aos="fade-left">
          <h1 className={`mb-3 text-white ${concertOne.className}`}>
            <span>I</span>
            <span ref={typedElement}></span>
          </h1>
          <div className="mb-4">
            <div className="d-inline-flex align-items-center gap-2">
              <div className={`${styles.exp} text-primary`}>1+</div>
              <p className={`${styles.expText} mb-0 text-white`}>Years of Experience</p>
            </div>
          </div>

          <p className={`${styles.header} text-white`}>
            Full Stack Developer with expertise in Java, PHP, Next.js, Node.js, React, Angular, Laravel, Spring Boot, AWS, and Express.js.
            I have a comprehensive understanding of both backend and frontend frameworks, enabling me to create dynamic, scalable, and responsive applications.
            Eager to apply my knowledge in real-world projects, showcasing a commitment to continuous learning and innovation in the ever-evolving field of software development.
          </p>

          {/* Social Icons */}
          <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
            <Image src={Fb} alt="Facebook Icon" width={30} height={30} />
            <Image src={Inst} alt="GitHub Icon" width={30} height={30} />
          </div>
        </div>
      </div>
    </div>
  );
}
