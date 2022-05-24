import React from 'react'

const About = () => {
    return (
        <div>
            <div className="container-fluid my-5">
                <h1 className="display-5 fw-bold">About</h1>
                <p className="fs-4">Notes App allows you to keep all your notes in one place. Whether it be your meeting notes or a grocery list, you can keep it here securely. This website works with any browser such as Chrome, Firefox, Safari, Edge, and others. It is made using React JS.</p>
                <span>Created By: Aarush Popli </span>
                {/* <a href="https://linkedin.com/in/aarushpopli" target={'_blank'} rel="noreferrer" className={`text-${props.mode === 'light'?'dark':'light'}`}><i className="bi bi-linkedin mx-2" style={{fontSize: "25px"}}></i></a>
                <a href="https://github.com/Aarush-Popli" target={'_blank'} rel="noreferrer" className={`text-${props.mode === 'light'?'dark':'light'}`}><i className="bi bi-github mx-2" style={{fontSize: "25px"}}></i></a> */}
            </div>
        </div>
    )
}

export default About