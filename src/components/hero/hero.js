import React, { useState, useEffect, useContext, useRef } from 'react'
import { ReactComponent as ChevronArrow } from '../../assets/chevron-down.svg'
import classes from './hero.module.css'
import { Navbar } from '../nav/Navbar'
import PortfolioContext from '../../context/portfolio-context'
import logo from '../../assets/logo.png'

const first = "Hi, My name is"
const second = "Prince Adrianne Felix,"
const third = "software developer"

export const Hero = () => {
  const portfolioCtx = useContext(PortfolioContext)

  // We use a Ref to store the context function. 
  // This lets us call it inside useEffect without making it a dependency,
  // completely breaking the infinite re-render loop.
  const ctxOnScrollYRef = useRef(portfolioCtx.onScrollY);

  // Keep the ref updated with the latest function reference
  useEffect(() => {
    ctxOnScrollYRef.current = portfolioCtx.onScrollY;
  }, [portfolioCtx.onScrollY]);

  const [show, setShow] = useState({
    popUp: false,
    visibility: true
  });

  // 1. Initial 2-second popup timer effect
  useEffect(() => {
    ctxOnScrollYRef.current(0);
    const timer = setTimeout(() => {
      setShow((prev) => {
        return { ...prev, popUp: true }
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []); // Safe empty array

  const handleVisibility = () => {
    setShow((prev) => {
      return { ...prev, visibility: false }
    });
  };

  // 2. Scroll listener effect
  useEffect(() => {
    const handleScrollY = () => {
      ctxOnScrollYRef.current(window.scrollY);

      // Checking window.scrollY directly is safer and faster than 
      // waiting for the context state to update round-trip.
      if (window.scrollY === 0) {
        setShow((prev) => {
          return { ...prev, popUp: true, visibility: true }
        });
      }
    };

    window.addEventListener('scroll', handleScrollY);
    return () => {
      window.removeEventListener('scroll', handleScrollY);
    };
  }, []); // Safe empty array

  // --- Animation / Text Splitting Logic ---
  const [isMouseEnter, setIsMouseEnter] = useState({
    first: first.split('').map(() => false),
    second: second.split('').map(() => false),
    third: third.split('').map(() => false),
  });

  const lineMap = {
    1: 'first',
    2: 'second',
    3: 'third'
  };

  const handleMouseEnter = (line, index) => {
    setIsMouseEnter(prevState => {
      const updatedLine = prevState[lineMap[line]].map((_, i) => i === index);
      return { ...prevState, [lineMap[line]]: updatedLine };
    });
  };

  const handleMouseLeave = (line, index) => {
    setIsMouseEnter(prevState => {
      const updatedLine = prevState[lineMap[line]].map((value, i) => i === index ? false : value);
      return { ...prevState, [lineMap[line]]: updatedLine };
    });
  };

  return (
    <section id='#'>
      <div className={classes["hero"]}>
        <div>
          <Navbar />
        </div>
        <div className={classes["content"]}>
          <h1 className={classes.h1}>
            <span className={classes.first}>
              {first.split('').map((c, i) => (
                <span
                  key={i}
                  onMouseEnter={() => handleMouseEnter(1, i)}
                  onMouseLeave={() => handleMouseLeave(1, i)}
                  className={`${classes.stretch} ${isMouseEnter.first[i] ? classes.stretching : ''}`}
                >
                  {c}
                </span>
              ))}
            </span>
            <br />
            <span className={classes.second}>
              {second.split('').map((c, i) => (
                i === 0 ? (
                  <span
                    key={i}
                    onMouseEnter={() => handleMouseEnter(2, i)}
                    onMouseLeave={() => handleMouseLeave(2, i)}
                    className={`${classes.stretch} ${isMouseEnter.second[i] ? classes.stretching : ''}`}
                  >
                    <img className={classes['big-initial']} src={logo} alt="" />
                  </span>
                ) : (
                  <span
                    key={i}
                    onMouseEnter={() => handleMouseEnter(2, i)}
                    onMouseLeave={() => handleMouseLeave(2, i)}
                    className={`${classes.stretch} ${isMouseEnter.second[i] ? classes.stretching : ''}`}
                  >
                    {c}
                  </span>
                )
              ))}
            </span>
            <br />
            <span className={classes.third}>
              {third.split('').map((c, i) => (
                <span
                  key={i}
                  onMouseEnter={() => handleMouseEnter(3, i)}
                  onMouseLeave={() => handleMouseLeave(3, i)}
                  className={`${classes.stretch} ${isMouseEnter.third[i] ? classes.stretching : ''}`}
                >
                  {c}
                </span>
              ))}
            </span>
          </h1>
        </div>

        {show.popUp && (
          <div data-testid="popupbtn" className={`${classes['popup-btn']} ${portfolioCtx.scrollY >= 1 ? classes.hidden : ''} ${show.visibility === false ? classes.hidden : ''}`}>
            <a onClick={handleVisibility} href="#about">
              <ChevronArrow className={`${classes.svg}`} />
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

export default Hero;