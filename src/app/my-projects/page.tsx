import React from 'react'
import Image from "next/image";
import pos from "../assests/fx.png";
import libraryImg from "../assests/lib.jpg";
import student from "../assests/std.png";
import invent from "../assests/inventory.png";
import burger from "../assests/burgershop.png";
import swing from "../assests/swing.png";
import weather from "../assests/weather.png";
import country from "../assests/weather (2).png";


function page() {
    const projects = [
        { name: 'Weather App', image:weather, subName: 'React Front-end web application', link1: "https://shenmadu.github.io/weather_app", link2: "#" },
        { name: 'Library managmnet', image:libraryImg, subName: 'Angular Front-end and Spring boot Back-end', link1: "https://github.com/Shenmadu/Librarymanagment-Frontend.git", link2: "https://github.com/Shenmadu/Librarymanagment-Frontend.git" },
        { name: 'Country Details App', image:country, subName: ' React JS Project axios Library , MUI & Tailwind CSS', link1: " https://shenmadu.github.io/country-details", link2: "#" },        
        { name: 'Student Registration', image:student, subName: 'Angular Front-end and Spring boot Back-end', link1: " https://github.com/Shenmadu/StudentRegistration-frontend.git", link2: "https://github.com/Shenmadu/StudentRegistration-backend.git" },
        { name: 'POS System-FX', image:pos, subName: 'Maven POS system use Hibernate', link1: "https://github.com/Shenmadu/POS-Layered-Architecture-.git", link2: "https://github.com/Shenmadu/POS-Layered-Architecture-.git" },
        { name: 'Inventory-management', image:invent, subName: 'Java FX Hibernate & Layered', link1: "https://github.com/Shenmadu/Inventory-management.git", link2: "#" },
        { name: 'Burger Shop Application', image:burger, subName: 'HTML ,CSS, JavaScript', link1: "https://github.com/Shenmadu/MOS-Burgers.git", link2: "https://github.com/Shenmadu/MOS-Burgers.git" },
        { name: 'Fashion shop', image:swing, subName: 'Java swing fashion shop', link1: "https://github.com/Shenmadu/FashionShop.git", link2: "#" },

    ];
    return (
        <div className='container'>
            <div className=" bg-transparent text-white" id="education">
                <section className="education" id="education">                    
                    <div className="row col-lg-12">
                        {projects.slice(0).map((project, index) => (
                            <div key={index} className="col-lg-3 mb-3">
                                <div className="card mt-2 mx-auto" id="item1"
                                    style={{ width: '13rem', height: '400px', display: 'inline-block' }} data-aos="zoom-in">
                                    <Image src={project.image} className="card-img-top " alt="..." style={{ height: 200 }} />
                                    <div className="card-body">
                                        <h6 className="card-title" >{project.name}</h6>
                                        <p className="card-text" >{project.subName}</p>
                                        <p>
                                            <a href={project.link1} target='blank'>View</a>
                                        </p>
                                        {project.link2 !== '#' && (
                                            <p>
                                                <a href={project.link2} target="_blank">View</a>
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}                       
                    </div>
                </section>
            </div>
        </div>
    )
}

export default page
