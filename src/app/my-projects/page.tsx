import React from 'react'
import Image from "next/image";
import pos from "../assests/fx.png";
import library from "../assests/lib.jpg";
import student from "../assests/std.png";
import invent from "../assests/inventory.png";
import burger from "../assests/burgershop.png";
import swing from "../assests/swing.png";


function page() {
  return (
    <div className='container'>
            <div className=" bg-transparent text-white" id="education">
                <section className="education" id="education">
                    {/* <h1 className="header-two">My Works</h1> */}
                    <div className="row col-lg-12">

                        <div className="card mt-2 mx-auto" id="item1"
                            style={{width :'13rem', height:'auto', display: 'inline-block'}} data-aos="zoom-in">
                            <Image src={library} className="card-img-top " alt="..." style={{height: 200}} />
                            <div className="card-body">
                                <h6 className="card-title" >Library managmnet</h6>
                                <p className="card-text" >Angular Front-end and Spring boot
                                    Back-end
                                </p>
                                <a href=" https://github.com/Shenmadu/Librarymanagment-
                                        Frontend.git"/>
                                <p >
                                    https://github.com/Shenmadu/Librarymanagment-
                                    Frontend.git</p>
                                <a href="  https://github.com/Shenmadu/Librarymanagment-
                                                Frontend.git">
                                    <p >
                                        https://github.com/Shenmadu/Librarymanagment-
                                        Frontend.git</p>
                                </a>
                            </div>
                        </div>



                        <div className="card mt-2 mx-auto" id="item1"
                            style={{width :'13rem', height:'auto', display: 'inline-block'}} data-aos="zoom-in">
                            <Image src={pos} className="card-img-top " alt="..." style={{height: 200}} />
                            <div className="card-body">
                                <h6 className="card-title" >POS System-FX</h6>
                                <p className="card-text" >Maven POS system use Hibernate
                                </p>
                                <a href="https://github.com/Shenmadu/POS-Layered-Architecture-.git">
                                    <p>
                                        https://github.com/Shenmadu/POS-Layered-Architecture-.git</p>
                                </a>
                            </div>
                        </div>

                        <div className="card mt-2 mx-auto" id="item1"
                            style={{width :'13rem', height:'auto', display: 'inline-block'}} data-aos="zoom-in">
                            <Image src={student} className="card-img-top " alt="..." style={{height: 200}} />
                            <div className="card-body">
                                <h6 className="card-title" >Student Registration</h6>
                                <p className="card-text">Angular Front-end and Spring boot
                                    Back-end
                                </p>
                                <a href=" https://github.com/Shenmadu/StudentRegistration-frontend.git">
                                    <p >
                                        https://github.com/Shenmadu/StudentRegistration-frontend.git
                                    </p>
                                </a>
                                <a href="https://github.com/Shenmadu/StudentRegistration-backend.git">
                                    <p >
                                        https://github.com/Shenmadu/StudentRegistration-backend.git</p>
                                </a>
                            </div>
                        </div>

                        <div className="card mt-2 mx-auto" id="item1"
                            style={{width :'13rem', height:'auto', display: 'inline-block'}} data-aos="zoom-in">
                            <Image src={invent} className="card-img-top" alt="..."
                               style={{height: 200}} />
                            <div className="card-body">
                                <h6 className="card-title" >Inventory-management</h6>
                                <p className="card-text" >Java FX Hibernate & Layered
                                </p>
                                <a href="https://github.com/Shenmadu/Inventory-management.git">
                                    <p >
                                        https://github.com/Shenmadu/Inventory-management.git</p>
                                </a>

                            </div>
                        </div>

                        <div className="card mt-2 mx-auto " id="item1"
                             style={{width :'13rem', height:'auto', display: 'inline-block'}} data-aos="zoom-in">

                            <Image src={burger} className="card-img-top img-card"
                                style={{height: 200}} alt="..." />
                            <div className="card-body">
                                <h6 className="card-title" >Burger Shop Application</h6>
                                <p className="card-text">Html ,CSS, JavaScript
                                </p>
                                <a href="https://github.com/Shenmadu/MOS-Burgers.git">
                                    <p >
                                        https://github.com/Shenmadu/MOS-Burgers.git</p>
                                </a>
                            </div>
                        </div>

                        <div className="card mt-2 mx-auto " id="item1"
                            style={{width :'13rem', height:'auto', display: 'inline-block'}} data-aos="zoom-in">

                            <Image src={swing} className="card-img-top img-card" style={{height: 200}}
                                alt="..." />
                            <div className="card-body">
                                <h6 className="card-title" >Fashion shop</h6>
                                <p className="card-text">Java swing fashion shop
                                </p>
                                <a href="https://github.com/Shenmadu/FashionShop.git">
                                    <p >
                                        https://github.com/Shenmadu/FashionShop.git</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
  )
}

export default page
