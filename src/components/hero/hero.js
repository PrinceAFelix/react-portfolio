import React, { useState, useEffect, ReactSVG } from 'react'
import { ReactComponent as ChevronArrow } from '../../assets/chevron-down.svg'
import classes from './hero.module.css'
import { Navbar } from '../nav/Navbar'


import logo from '../../assets/logo.png'


const first = "Hi, My name is"
const second = "Prince Adrianne Felix,"
const third = "software developer"


export const Hero = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [visibility, setVisibility] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);
    return () => clearTimeout(timer);

  }, []);

  const handleVisibility = () => {
    setVisibility(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollY);
    return () => {
      window.removeEventListener('scroll', handleScrollY);
    };
  }, []);

  const handleScrollY = () => {
    setScrollY(window.scrollY)
    if (scrollY === 0) {
      setShowPopup(true);
      setVisibility(true);
    }
  }


  const [isMouseEnter, setIsMouseEnter] = useState(
    {
      first: first.split('').map(() => false),
      second: second.split('').map(() => false),
      third: third.split('').map(() => false),
    }
  );

  const handleMouseEnter = (line, index) => {
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
      else if (line === 2) {
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
      else if (line === 3) {
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
              return false;
            }
          }),
        };
      }
      else if (line === 2) {
        return {
          ...prevState, second: prevState.second.map((value, i) => {
            if (i === index) {
              return false;
            }
          }),
        };
      }
      else if (line === 3) {
        return {
          ...prevState, third: prevState.third.map((value, i) => {
            if (i === index) {
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
                <span className={classes.second}>
                  {
                    second.split('').map((c, i) => {
                      return i === 0 ? <span onMouseEnter={() => handleMouseEnter(2, i)} onMouseLeave={() => handleMouseLeave(2, i)} className={`${classes.stretch} ${isMouseEnter.second[i] ? classes.stretching : ''}`} key={i}>{<img className={classes['big-initial']} src={logo} alt="" />}</span>
                        : <span onMouseEnter={() => handleMouseEnter(2, i)} onMouseLeave={() => handleMouseLeave(2, i)} className={`${classes.stretch} ${isMouseEnter.second[i] ? classes.stretching : ''}`} key={i}>{c}</span>
                    })
                  }
                </span>
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
        </div>
        {
          showPopup && (
            <div className={`${classes['popup-btn']} ${scrollY >= 1 ? classes.hidden : ''} ${visibility === false ? classes.hidden : ''}`}>
              <a onClick={handleVisibility} href="#about"><ChevronArrow className={`${classes.svg}`} /></a>
            </div>
          )
        }
      </div>
    </section >
  )
}


export default Hero;
