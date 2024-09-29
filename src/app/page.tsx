import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="container">
      <div className="container col-xxl-8 px-1 py-1">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6" data-aos="fade-right">
            {/* <img src={MyImage} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="400" height="300" loading="lazy" /> */}
          </div>
          <div className="col-lg-6 " data-aos="fade-left">
            <h1 className="display-5 fw-bold  lh-1 mb-3">I’m Tashen Madhuwantha</h1>
            <p className="lead text">Dedicated Java and Web Development student
              with a comprehensive understanding of JavaFX
              and various web frameworks. Proficient in
              leveraging frameworks to create dynamic and
              responsive applications. Eager to apply
              knowledge in real-world projects, showcasing a
              commitment to continuous learning and
              innovation in the ever-evolving field of software
              development</p>
           
          </div>
        </div>
      </div>
    </div>
  );
}
