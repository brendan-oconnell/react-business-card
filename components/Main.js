import React from "react"

export default function Main() {
    return (
        <main>
            <img src="https://avatars.githubusercontent.com/u/68507084?v=4" className="portrait-image" />
            <h3>Brendan O'Connell</h3>
            <h5>Full-stack web developer</h5>
            <p className="github-link"><a href="https://github.com/brendan-oconnell">GitHub</a></p>
            <div className="buttons-flex">
                <a href="mailto:brendan.c.oconnell@gmail.com" className="email-button">Email</a>
                <a href="https://www.linkedin.com/in/brendan-c-oconnell/" className="linkedin-button">LinkedIn</a>
            </div>
            <h4>About</h4>
            <p>Experienced full-stack web developer, instructional technologist, educator, and manager working at the intersection of teaching and technology. Over 10 years of experience in education, including K-12, higher education, online learning, instructional design, instructional technology, classroom teaching, project & product management, and managing teams.</p>
        </main>
    )
}