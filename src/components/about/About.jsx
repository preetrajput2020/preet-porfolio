import React from 'react';
import './About.css';
import Image from '../../assets/avatar-2.jpg';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                       Hi, I am Preet Rajput, a passionate and fast learner currently pursuing B.Tech from Ajay Kumar Garg Engineering College. I am focused on full-stack web development using technologies like HTML, CSS, JavaScript, React, Node.js, and Next.js. I enjoy building clean, responsive, and scalable web applications while continuously improving my skills. With 150+ problems solved on LeetCode and GeeksforGeeks. I'm always eager to take on new challenges and grow as a developer.
                        </p>
                        <p>Here are a few technologies I’ve been working with : </p>
                        <h4>Frontend</h4>
                        <ul className="about__list">
                            <li>HTML </li>
                            <li>Tailwind CSS</li>
                            <li>JavaScript</li>
                            <li>React.js</li>
                            <li>Next.js</li>
                        </ul>
                          <h4>Tools & Plateforms</h4>
                        <ul className="about__list">
                            <li>VS Code</li>
                            <li>npm</li>
                            <li>Netlify</li>
                            <li>Vercel</li>
                        </ul>
                         <h4>Other</h4>
                        <ul className="about__list">
                            <li>MySQL</li>
                            <li>Node.js</li>
                            <li>Git & GitHub</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Donwload Resume</button>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About