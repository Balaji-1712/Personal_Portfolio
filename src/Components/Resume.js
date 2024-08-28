import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import './res.css';

function Resume() {
    const skills = ["Java", "MYSQL", "MongoDB", "HTML, CSS, JavaScript", "Bootstrap", "React Js", "Firebase", "Mobile Application Development", "Power BI"];

    const skillColors = [
        'bg-primary',
        'bg-success',
        'bg-danger',
        'bg-warning',
        'bg-info',
        'bg-dark',
        'bg-secondary',
        'bg-danger',
        'bg-primary',
        'bg-success'
    ];

    const achievements = [
        {
            title: "2023 Inter Department Cricket Tournament Winner",
            description: "IT team won their first title 'CHAMPIONS' in InterDepartment cricket Tournament",
            image: "/images/winner.JPG"
        },
        {
            title: "Most Runs in 2024 Inter Department Cricket Tournament",
            description: "Scored Most Runs 152 and most boundaries with 23 Fours and best Average with 38.0 in 5 matches",
            image: "/images/mostruns.jpg"
        },
        {
            title: "Runners in 2024 InterDepartment Cricket Tournament",
            description: "Lost by 1 Run",
            image: "/images/cricket1.jpg"
        },
        {
            title: "Gaming Youtube Channel",
            description: "Successfully running a gaming youtube channel with 270 subscribers",
            image: "/images/yt.jpg"
        }
    ];

    return (
        <div className='container-fluid p-0 position-relative bg-light'>
            <div className='position-absolute top-0 end-0 d-flex p-3'>
                <Link to="/" className='btn btn-primary rounded-pill me-2' style={{ backgroundColor: '#007bff', opacity: 0.7 }}>
                    Home
                </Link>
                <Link to="/resume" className='btn btn-success rounded-pill me-2 ' style={{ backgroundColor: '#28a745', opacity: 0.9, boxShadow: '0 0 20px rgba(0, 0, 139, 0.7)' }}>
                    Resume
                </Link>
                <Link to="/projects" className='btn btn-danger rounded-pill' style={{ backgroundColor: '#dc3545', opacity: 0.7 }}>
                    Projects
                </Link>
            </div>

            <div className='container-fluid pt-4'>
                <h2 className='mb-4 text-dark' style={{ transition: 'box-shadow 0.3s', cursor: 'pointer' }}
                    onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'}
                    onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}>
                    Education
                </h2>
                <div className="timeline position-relative">
                    <div className="timeline-line position-absolute bg-warning" style={{ animation: 'blink 1s infinite alternate' }}></div>

                    <div className="timeline-item d-flex position-relative mb-5">
                        <div className="timeline-icon-glow bg-warning rounded-circle me-3"></div>
                        <div className="timeline-content text-dark px-2 rounded" style={{ transition: 'transform 0.3s', cursor: 'pointer' }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)' }>
                            <h4>Thiagarajar College Of Engineering</h4>
                            <span className="text-warning">2021 — 2025</span>
                            <p>Bachelor of Technology - Information Technology</p>
                            <p>Grade: 7.60 CGPA</p>
                        </div>
                    </div>

                    <div className="timeline-item d-flex position-relative mb-5">
                        <div className="timeline-icon bg-warning rounded-circle me-3"></div>
                        <div className="timeline-content text-dark px-2 rounded" style={{ transition: 'transform 0.3s', cursor: 'pointer' }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)' }>
                            <h4>Malco Vidyalaya Matriculation Hr Sec School, Mettur</h4>
                            <span className="text-warning">2021</span>
                            <p>12th Grade</p>
                            <p>Percentage: 93.14%</p>
                        </div>
                    </div>

                    <div className="timeline-item d-flex position-relative mb-5">
                        <div className="timeline-icon bg-warning rounded-circle me-3"></div>
                        <div className="timeline-content text-dark px-2 rounded" style={{ transition: 'transform 0.3s', cursor: 'pointer' }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)' }>
                            <h4>Malco Vidyalaya Matriculation Hr Sec School, Mettur</h4>
                            <span className="text-warning">2019</span>
                            <p>10th Grade</p>
                            <p>Percentage: 95.4%</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid'>
                <h2 className='mb-4 text-dark' style={{ transition: 'box-shadow 0.3s', cursor: 'pointer' }}
                    onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'}
                    onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}>
                    Skills
                </h2>
                <div className="row">
                    {skills.map((skill, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className={`card text-white ${skillColors[index % skillColors.length]}`} style={{ transition: 'transform 0.3s', cursor: 'pointer' }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)' }>
                                <div className="card-body">
                                    <h5 className="card-title text-center">{skill}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='container-fluid mt-5 pb-5'>
                <h2 className='mb-4 text-dark'>My Resume</h2>
                <div className="text-center">
                    <a href="/files/bal.pdf" download className='btn btn-lg btn-outline-primary' style={{ animation: 'glow 1s infinite alternate' }}>
                        <i className="bi bi-download me-2"></i>Download Resume
                    </a>
                </div>
            </div>

            <div className='container-fluid'>
                <h2 className='mb-4 text-dark' style={{ transition: 'box-shadow 0.3s', cursor: 'pointer' }}
                    onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'}
                    onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}>
                    Achievements
                </h2>
                <div className="row">
                    {achievements.map((achievement, index) => (
                        <div className="col-md-6 mb-4" key={index}>
                            <div className="card h-100 d-flex flex-column" style={{ transition: 'transform 0.3s', cursor: 'pointer' }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)' }>
                                {achievement.image && (
                                    <div className="d-flex align-items-center justify-content-center" style={{ height: '500px' }}>
                                        <img src={achievement.image} className="img-fluid border border-2 border-dark" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} alt={achievement.title} />
                                    </div>
                                )}
                                <div className="card-body flex-grow-1 d-flex flex-column justify-content-center">
                                    <h3 className="card-title">{achievement.title}</h3>
                                    <p className="card-text" style={{ fontSize: '0.5cm' }}>{achievement.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Resume;
