import React, { useState } from 'react'
import classes from './hero.module.css'
import { Navbar } from '../nav/Navbar'





const h2 = <h2>Prince Adrianne Felix.</h2>
const h3 = <p>software developer</p>


const first = "Hi, My name is"
const second = "Prince Adrianne Felix,"
const third = "software developer"


export const Hero = () => {



  const [isMouseEnter, setIsMouseEnter] = useState(
    {
      first: first.split('').map(() => false),
      second: second.split('').map(() => false),
      third: third.split('').map(() => false),
    }
  );

  const handleMouseEnter = (line, index) => {
    let temp = null;
    setIsMouseEnter((prevState) => {

      if (line === 1) {
        return {
          ...prevState, first: prevState.first.map((value, i) => {
            if (i === index) {
              return true;
            } else {
              return false;
            }
          }),
        };
      }
      else if (line == 2) {
        return {
          ...prevState, second: prevState.second.map((value, i) => {
            if (i === index) {
              return true;
            } else {
              return false;
            }
          }),
        };
      }
      else if (line == 3) {
        return {
          ...prevState, third: prevState.third.map((value, i) => {
            if (i === index) {
              return true;
            } else {
              return false;
            }
          }),
        };
      }

    });
  };

  const handleMouseLeave = (line, index) => {

    setIsMouseEnter((prevState) => {
      if (line === 1) {
        return {
          ...prevState, first: prevState.first.map((value, i) => {
            if (i === index) {
              return true;
            } else {
              return false;
            }
          }),
        };
      }
      else if (line == 2) {
        return {
          ...prevState, second: prevState.second.map((value, i) => {
            if (i === index) {
              return true;
            } else {
              return false;
            }
          }),
        };
      }
      else if (line == 3) {
        return {
          ...prevState, third: prevState.third.map((value, i) => {
            if (i === index) {
              return true;
            } else {
              return false;
            }
          }),
        };
      }
    });
  };

  return (


    <section id='#'>
      <div className={classes["hero"]}>
        <div>
          <Navbar />
        </div>
        <div className={classes["content"]}>
          <div>
            {
              <h1 className={classes.h1}>
                <span className={classes.first}>
                  {
                    first.split('').map((c, i) => {
                      return <span onMouseEnter={() => handleMouseEnter(1, i)} onMouseLeave={() => handleMouseLeave(1, i)} className={`${classes.stretch} ${isMouseEnter.first[i] ? classes.stretching : ''}`} key={i}>{c}</span>

                    })
                  }
                </span>
                <br />
                {
                  second.split('').map((c, i) => {
                    return <span onMouseEnter={() => handleMouseEnter(2, i)} onMouseLeave={() => handleMouseLeave(2, i)} className={`${classes.stretch} ${isMouseEnter.second[i] ? classes.stretching : ''}`} key={i}>{c}</span>
                  })
                }
                <br />
                <span className={classes.third}>
                  {
                    third.split('').map((c, i) => {
                      return <span onMouseEnter={() => handleMouseEnter(3, i)} onMouseLeave={() => handleMouseLeave(3, i)} className={` ${classes.stretch} ${isMouseEnter.third[i] ? classes.stretching : ''}`} key={i}>{c}</span>
                    })
                  }
                </span>
              </h1>
            }
          </div>
          <a href="#about">
            <i className="fa-solid fa-arrow-down fade"></i>
          </a>
        </div>
      </div>
    </section >
  )
}


export default Hero;
