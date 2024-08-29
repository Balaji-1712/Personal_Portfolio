import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='container-fluid p-0 position-relative'>
            <div className='position-absolute top-0 end-0 d-flex p-3'>
                <Link
                    to="/"
                    className='btn btn-primary rounded-pill me-2 active'
                    style={{ backgroundColor: '#007bff', opacity: 0.9, boxShadow: '0 0 20px rgba(0, 123, 255, 1)' }}
                >
                    Home
                </Link>
                <Link
                    to="/resume"
                    className='btn btn-success rounded-pill me-2'
                    style={{ backgroundColor: '#28a745', opacity: 0.7 }}
                >
                    Resume
                </Link>
                <Link
                    to="/projects"
                    className='btn btn-danger rounded-pill'
                    style={{ backgroundColor: '#dc3545', opacity: 0.7 }}
                >
                    Projects
                </Link>
            </div>

            <div className='container-fluid border border-2 border-dark d-flex flex-column justify-content-center align-items-center' style={{ height: '500px', backgroundColor: 'peachpuff' }}>
                <img src='/images/photo.jpg' alt="balaji" className='img-fluid rounded-circle border border-3 border-dark' style={{ objectFit: 'contain', maxHeight: '70%', maxWidth: '70%', transition: 'transform 0.2s', cursor: 'pointer' }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                <div className='text-center mt-3'>
                    <h3>Balaji K</h3>
                    <h5>Final Year Student</h5>
                </div>
            </div>

            <div className='row m-0'>
                <div className='col-md-4 py-3' style={{ backgroundColor: 'cornflowerblue', position: 'relative' }}>
                    <h2 className='rounded-pill bg-danger text-light px-3 py-2'
                        style={{ transition: 'box-shadow 0.3s', cursor: 'pointer' }}
                        onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'}
                        onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
                    >
                        INFO
                    </h2>
                    <div>
                        <div style={{ width: '40px', height: '40px', backgroundColor: '#343a40', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
                            <i className='bi bi-calendar-event text-warning' style={{ fontSize: '20px' }}></i>
                        </div>
                        <h4 className='d-inline-block ms-2'>Birthday Date: 17/12/2003</h4>
                    </div>
                    <div>
                        <div style={{ width: '40px', height: '40px', backgroundColor: '#343a40', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
                            <i className='bi bi-envelope text-warning' style={{ fontSize: '20px' }}></i>
                        </div>
                        <h4 className='d-inline-block ms-2'>Email ID: balajikamaraj01@gmail.com</h4>
                    </div>
                    <div>
                        <div style={{ width: '40px', height: '40px', backgroundColor: '#343a40', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
                            <i className='bi bi-geo-alt text-warning' style={{ fontSize: '20px' }}></i>
                        </div>
                        <h4 className='d-inline-block ms-2'>Location: Mettur, TamilNadu</h4>
                    </div>
                    <div>
                        <div style={{ width: '40px', height: '40px', backgroundColor: '#343a40', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
                            <i className='bi bi-globe text-warning' style={{ fontSize: '20px' }}></i>
                        </div>
                        <h4 className='d-inline-block ms-2'>Languages: English, Tamil</h4>
                    </div>
                    <div className='position-absolute bottom-0 start-50 translate-middle-x d-flex justify-content-center align-items-end'
                        style={{ width: '100%', paddingBottom: '50px' }}>
                        <a href="https://github.com/Balaji-1712" target='_blank' rel="noopener noreferrer"><i className='bi bi-github fs-2 mx-2 text-dark'></i></a>
                        <a href="https://www.instagram.com/balaji_1712_/?next=%2F&hl=en" target='_blank' rel="noopener noreferrer"><i className='bi bi-instagram fs-2 mx-2 text-dark'></i></a>
                        <a href="https://www.linkedin.com/in/balaji-k-9a4484286/" target='_blank' rel="noopener noreferrer"><i className='bi bi-linkedin fs-2 mx-2 text-dark'></i></a>
                    </div>
                </div>

                <div className='col-md-8 p-3'>
                    <div>
                        <h2 className='rounded-pill bg-success text-light px-3 py-2'
                            style={{ display: 'inline-block', fontSize: '2rem', opacity: 0.7, transition: 'box-shadow 0.3s', cursor: 'pointer' }}
                            onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'}
                            onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
                        >
                            About
                        </h2>
                        <p className='mt-3' style={{ fontSize: '0.5cm' }}>
                            I am currently pursuing a Bachelor's degree in Information Technology at Thiagarajar College of Engineering. My academic journey has equipped me with a strong foundation in various software technologies, and I have developed a keen interest in both front-end development and mobile application development.
                        </p>
                        <h2 className='rounded-pill bg-warning text-light px-3 py-2'
                            style={{ display: 'inline-block', fontSize: '1.5rem', opacity: 0.7, transition: 'box-shadow 0.3s', cursor: 'pointer' }}
                            onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'}
                            onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
                        >
                            Technical Skills:
                        </h2>
                        <ul className='mt-3 pb-5' style={{ fontSize: '0.5cm' }}>
                            <li><strong>Front-End Development:</strong><br />Proficient in creating responsive and interactive user interfaces using HTML, CSS, JavaScript, and React.js. Experienced with Bootstrap for designing visually appealing web applications.</li><br />
                            <li><strong>Mobile Application Development:</strong><br /> Skilled in developing Android applications using Java and Android Studio.</li><br />
                            <li><strong>Programming Languages:</strong><br /> Advanced knowledge of Java, with a solid understanding of basic concepts in C and Python.</li><br />
                            <li><strong>Data Visualization:</strong><br /> Experienced in using PowerBI for creating insightful and interactive data visualizations.</li><br />
                            <li><strong>Firebase:</strong><br /> Competent in using Firebase for hosting and managing realtime databases.</li>
                        </ul>
                        <p className='text-center mb-4' style={{ fontSize: '0.5cm' }}>
                            My passion for technology drives me to continuously explore new tools and methodologies. I am particularly interested in how front-end technologies can be leveraged to create seamless user experiences and how mobile applications can be developed to solve real-world problems.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
