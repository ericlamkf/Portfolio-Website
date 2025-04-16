import React, { useState } from 'react'
import './Projects.css'
import project1 from '../../assets/project1.mp4'
import project2 from '../../assets/project2.mp4'
import project3 from '../../assets/project3.mp4'

const Projects = () => {

    const [hoverVideo, setHoverVideo] = useState(null)

    const playVideo = (e) => {
        setHoverVideo(e.target.id)
        e.target.play()
    }

    const stopVideo = (e) => {
        setHoverVideo(null)
        e.target.pause()
    }

    return (
        <div className='projects'>
            <div className="project-container">
                <div className="project">
                    <video id='project1' onMouseEnter={playVideo} onMouseLeave={stopVideo} src={project1} autoPlay={true} loop playsInline className={`video ${hoverVideo === "project1" ? '' : 'no-hover'}`}></video>
                    <div className="project-description">
                        <h1>The Next Level <span className='rgbText'>Gaming Website</span></h1>
                        <p>Take your gaming experience to unparalleled heights with The Next Level Gaming Website—a platform designed for true enthusiasts. Packed with cutting-edge features, immersive visuals, and user-friendly navigation, this project is more than just a website—it's a gateway to the future of gaming.</p>
                        <button className='website-btn'>Website</button>
                    </div>
                </div>
                <div className="project">
                    <video id='project2' onMouseEnter={playVideo} onMouseLeave={stopVideo} src={project2} autoPlay={true} loop playsInline className={`video ${hoverVideo === "project2" ? '' : 'no-hover'}`}></video>
                    <div className="project-description">
                        <h1>Responsive <span className='rgbText'>Portfolio Website</span></h1>
                        <p>Showcase your creativity and professionalism with the Responsive Portfolio Website—a digital space crafted to leave a lasting impression. Designed to adapt seamlessly to any device, this portfolio ensures that your work shines whether viewed on desktop, tablet, or mobile.</p>
                        <button className='website-btn'>Website</button>
                    </div>
                </div>
                <div className="project">
                    <video id='project3' onMouseEnter={playVideo} onMouseLeave={stopVideo} src={project3} autoPlay={true} loop playsInline className={`video ${hoverVideo === "project3" ? '' : 'no-hover'}`}></video>
                    <div className="project-description">
                        <h1>Watch Movie with <span className='rgbText'>Aesthetic Design</span></h1>
                        <p>Experience the joy of cinema like never before with Watch Movie with Aesthetic Design—a platform tailored for movie lovers who value both entertainment and visual elegance. Combining seamless functionality with captivating design, this project transforms browsing and watching movies into an artistic experience.</p>
                        <button className='website-btn'>Website</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
