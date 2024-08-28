import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

function Projects() {
    const [hoverIndex, setHoverIndex] = useState(null);

    const projects = [
        {
            title: "Online-Footwear",
            description: "A website for ordering Footwear from our own Shop",
            status: "in-Progress",
            image: "/images/shoemart.png",
            repoUrl: "https://github.com/Balaji-1712/Online_footwear_mart"  
        },
        {
            title: "Disease Prediction in Paddy",
            description: "Created a TensorFlow model to detect diseases of paddy crops",
            status: "completed",
            image: "/images/plant.jpg",
            repoUrl: ""  
        }
    ];

    return (
        <div className='container-fluid p-0 position-relative'>
            <div className='position-absolute top-0 end-0 d-flex p-3'>
                <Link to="/" className='btn btn-primary rounded-pill me-2' style={{ backgroundColor: '#007bff', opacity: 0.7 }}>
                    Home
                </Link>
                <Link to="/resume" className='btn btn-success rounded-pill me-2' style={{ backgroundColor: '#28a745', opacity: 0.7 }}>
                    Resume
                </Link>
                <Link to="/projects" className='btn btn-danger rounded-pill' style={{ backgroundColor: '#dc3545', opacity: 0.9, boxShadow: '0 0 20px rgba(139, 0, 0, 0.7)' }}>
                    Projects
                </Link>
            </div>
            <div className='container-fluid pt-4'>
                <h2 className='mb-4 text-dark'>PROJECTS</h2>
                <div className='row'>
                    {projects.map((project, index) => (
                        <div className='col-md-6 mb-4' key={index}>
                            <div
                                className='card h-100 d-flex flex-column border border-2 border-dark position-relative'
                                style={{
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    transform: hoverIndex === index ? 'scale(1.05)' : 'scale(1)',
                                    boxShadow: hoverIndex === index ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                                onMouseEnter={() => setHoverIndex(index)}
                                onMouseLeave={() => setHoverIndex(null)}
                            >
                                {project.image && (
                                    <div className="d-flex align-items-center justify-content-center" style={{ height: '300px' }}>
                                        <img src={project.image} className="img-fluid" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} alt={project.title} />
                                    </div>
                                )}
                                <div className='card-body d-flex flex-column justify-content-center'>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className='card-title mb-0'>{project.title}</h5>
                                        <p className='mb-0 text-end'>{project.status}</p>
                                    </div>
                                    <p className='card-text mt-3'>{project.description}</p>
                                </div>
                                {hoverIndex === index && (
                                    <>
                                        <div
                                            className='position-absolute top-0 start-0 w-100 h-100'
                                            style={{
                                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                                zIndex: 1,
                                                transition: 'opacity 0.3s',
                                                opacity: hoverIndex === index ? 1 : 0
                                            }}
                                        ></div>
                                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className='position-absolute top-50 start-50 translate-middle' style={{ zIndex: 2 }}>
                                            <i className="bi bi-eye" style={{ fontSize: '2rem', color: '#fff' }}></i>
                                        </a>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
