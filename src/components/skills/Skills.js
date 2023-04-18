import React from 'react'
import classes from './Skills.module.css'
import sharedstyle from '../styles/Sharedstyles.module.css'

export const Skills = () => {
    return (
        <section className={classes["skill-section"]} id="skills">
            <h1 className={sharedstyle["section-title"]}>Skills</h1>
            <span className={sharedstyle["divider"]}></span>
            <div className={classes["skill-content"]}>
                <div className={classes["skill-text"]}>
                    <h4>Familiarity with the Following Technical Skills</h4>
                    <ul className={classes["skills-list"]}>
                        <div className="skill-label">Programming Languages</div>
                        <li className="skills-item">Java FX/Swing</li>
                        <li className="skills-item">Java REST</li>
                        <li className="skills-item">Bash Scripts</li>
                        <li className="skills-item">PHP</li>
                        <li className="skills-item">C#/ASP.NET</li>
                        <li className="skills-item">C++</li>
                        <li className="skills-item">SQL</li>
                    </ul>

                    <ul className={classes["skills-list"]}>
                        <div className="skill-label">Frameworks & BaaS</div>
                        <li className="skills-item">React</li>
                        <li className="skills-item">Node</li>
                        <li className="skills-item">Firebase</li>
                    </ul>

                    <ul className={classes["skills-list"]}>
                        <div className="skill-label">Tools</div>
                        <li className="skills-item">Bash</li>
                        <li className="skills-item">Postman</li>
                        <li className="skills-item">JUnit Testing</li>
                        <li className="skills-item">Selenium</li>
                    </ul>

                </div>
                <div className={classes["skills-graph"]}>

                </div>
            </div>
        </section>
    )
}
