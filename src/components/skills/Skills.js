import React from 'react'
import classes from './Skills.module.css'
import sharedstyle from '../styles/Sharedstyles.module.css'
import SkillLayout from '../common/SkillLayout'
import layout from '../common/Layout.module.css'




const p = <p>
    Java <br />
    C <br />
    C++ <br />
    C#/ASP.NET <br />
    SQL <br />
</p>

const p1 = <p>
    ReactJS <br />
    Node.js <br />
    Firebase <br />
</p>


const p2 = <p>
    Git & Github <br />
    Bash <br />
    Postman <br />
    JUnit Testing <br />
    Selenium <br />
</p>

const Chart = ({ title, cover, color }) => {

    const barStyle = {
        width: cover,
        backgroundColor: color,
    }


    return <div className={classes['bar-container']}>
        <span>{title}</span>
        <div className={classes['bar-parent']} >
            <div style={barStyle} className={classes['bar-child']}>

            </div>
        </div>
    </div>
}

export const Skills = () => {
    return (
        <section className={classes["skill-section"]} id="skills">
            <div className={sharedstyle["container"]}>
                <h1 className={`${sharedstyle["section-title"]} ${classes["section-title"]}`}>Skills</h1>
                <span className={sharedstyle["divider"]}></span>
            </div>
            <div className={classes["skill-content"]}>
                <ul>
                    <li><SkillLayout title="Programming Language" p={p} /></li>
                    <li><SkillLayout title="Frameworks & BaaS" p={p1} /></li>
                    <li><SkillLayout title="Tools" p={p2} /></li>
                </ul>


            </div>
            <div className={classes.inner}>
                <div className={classes['expereince-container']}>
                    <div className={`${classes['expereince-content']}`}>
                        <h1 className={layout.title}>Mobile Application Development</h1>
                        <span className={layout.description}>
                            <p className={sharedstyle.p}>Design and develop a cross platform chat application that works with internet connection and bluetooth nearby connection.</p>
                        </span>
                    </div>
                    <div className={classes['tech-list-container']}>
                        <div className={classes['tech-list']}>
                            <a target='_blank' rel="noreferrer" href="https://github.com/PrinceAFelix/Flutter-Chat-Application">
                                <svg className={classes.linkIcon} fill="#ffffff" width="64px" height="64px" viewBox="-1420.8 -1420.8 4761.60 4761.60" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="23.04"></g><g id="SVGRepo_iconCarrier"> <path d="M1873.256 674.212c0-122.468-35.728-230.622-106.325-321.88 15.712-57.683 32.5-171.972-20.77-313.703-5.596-15.066-17.864-26.796-33.146-32.07-19.155-6.564-122.144-30.347-328.552 110.953-84.157-22.169-172.94-33.576-264.844-34.114-91.582.538-180.366 11.945-264.306 34.114C648.689-23.68 545.7-.005 526.437 6.56c-15.282 5.165-27.55 17.003-33.146 32.177-53.162 141.623-36.374 255.912-20.555 313.594-70.704 91.582-106.54 199.629-106.54 321.88 0 422.826 221.905 557.131 432.188 605.666-46.49 50.903-95.24 125.158-105.68 219.537-71.78 26.044-257.633 78.13-325.109-44.015-3.013-5.596-73.394-137.641-215.017-148.08-25.075 1.184-84.587 4.305-101.052 54.346-18.51 55.961 39.495 97.716 67.906 117.41.538.323 55.745 31.962 93.841 132.045.969 4.628 23.783 114.72 134.951 181.55 87.492 52.731 202.319 63.493 341.252 32.284 0 23.46-.323 48.212-.43 63.386l-.324 31.101H796.34l.215-29.81c1.937-161.532 2.045-164.653-30.778-181.656-12.484-6.457-27.012-7.964-40.356-3.659-136.243 41.002-246.98 40.033-320.052-2.798-70.488-41.54-85.985-108.908-88.89-119.67-3.875-10.653-8.072-20.662-12.269-30.24 126.987 145.713 372.138 77.161 463.289 33.792 18.833-8.825 30.778-27.765 30.778-48.535 0-149.372 148.295-244.182 149.802-245.15 19.371-12.16 28.949-35.19 23.998-57.36-4.95-22.276-23.352-39.065-46.06-41.755-223.626-26.796-452.204-109.338-452.204-518.388 0-106.325 33.577-198.983 99.76-275.175 12.915-15.067 16.681-36.052 9.579-54.562-9.793-25.397-36.482-112.782-.323-234.819 35.729 4.09 110.845 24.321 231.16 110.307 13.344 9.578 30.455 12.376 46.383 7.856 80.497-23.568 170.356-36.267 259.248-36.805 89.321.538 179.073 13.237 259.786 36.805 15.927 4.52 32.93 1.722 46.382-7.856 121.176-86.631 196.4-106.433 230.73-110.63 36.482 122.145 9.793 209.745 0 235.142-7.21 18.51-3.444 39.603 9.578 54.562 66.076 75.977 99.545 168.527 99.545 275.175 0 409.157-229.115 491.161-453.173 517.527-20.985 2.475-38.634 16.896-44.984 37.02-6.456 20.017-.538 42.078 15.067 56.284 6.35 5.703 14.958 12.483 25.074 20.231 51.333 39.28 137.211 105.034 137.211 259.571 0 85.448-1.399 354.273-1.399 354.273l107.617.539s1.399-269.257 1.399-354.812c0-141.838-56.499-229.976-110.845-285.937 210.39-48.427 431.65-182.517 431.65-604.696" fill-rule="evenodd"></path> </g></svg>
                            </a>
                            <ul>
                                <li>Flutter</li>
                                <li>Firebase</li>
                                <li>Dart</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={classes.graph}>
                    <Chart title="Front-end" cover="80%" color="#2efce9" />
                    <Chart title="Back-end" cover="85%" color="#2efce9" />
                    <Chart title="Mobile Application" cover="65%" color="#2efce9" />
                    <Chart title="Java" cover="95%" color="#2efce9" />
                    <Chart title="ReactJS" cover="75%" color="#2efce9" />
                </div>
            </div>
            <div className={`${sharedstyle['end-section']} ${classes.end}`} ></div>
        </section >
    )
}
