import React from 'react'
import Image from 'next/image'
import { FaBootstrap } from 'react-icons/fa'

const About = () => {
  return (
    <div className='container-fluid d-flex flex-column align-items-center min-vh-100'>
      <p className="lead m-4">
        {`I'm a full stack web developer with 13+ years of experience in web development and coding. I love to create responsive websites using ReactJS, JavaScript, HTML5, CSS3, Bootstrap, Node js, expressjs and MongoDB.
        and  having good coding skills. I've done multiple small projects to learn basics and now doing more complex projects.`}
      </p>
      <a href="./resume" target='_BLANK' className="btn btn-primary mt-2 custom-btn fw-bold">View My Resume</a>
      <h3 className='mt-10 pt-5 pb-2 custom-color'>Languages and tools I use:</h3>

      <p className='lead flex flex-wrap'>
        <Image className='me-2' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" />
        <Image className='m-2' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" />
        <Image className='m-2' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="30" height="35" />
        <Image className='m-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" width="35" height="35" />
        <Image className='m-2' src="https://www.cdnlogo.com/logos/n/80/next-js.svg" alt="git" width="35" height="35" />
        <Image className='m-2' src="https://www.cdnlogo.com/logos/a/51/angular.svg" alt="git" width="35" height="35" />
        <Image className='m-2' src="https://cdn.cdnlogo.com/logos/n/49/node-js.svg" alt="git" width="50" height="50" />
        <Image className='m-2' src="https://www.cdnlogo.com/logos/n/57/nestjs.svg" alt="git" width="40" height="40" />
        <Image className='m-2' src="https://www.cdnlogo.com/logos/p/3/python.svg" alt="git" width="40" height="40" />
        <Image className='m-2' src="/images/express-js.svg" alt="git" width="35" height="35" />
        <Image className='m-2' src="https://cdn.cdnlogo.com/logos/m/25/mongodb.svg" alt="git" width="80" height="40" />
        <Image className='m-2' src="https://www.cdnlogo.com/logos/p/25/prisma.svg" alt="git" width="80" height="40" />
        <FaBootstrap className='mt-3 mb-2 ml-2 mr-2' style={{ width: "35", height: "35" }} />
        <Image className='m-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git" width="35" height="35" />
        <Image className='m-2' src="https://cdn.cdnlogo.com/logos/g/31/github.svg" alt="git" width="50" height="25" />
      </p>

    </div>
  )
}

export default About