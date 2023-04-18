import React from 'react'
import { About } from '../components/about/About';
import {Skills} from '../components/skills/Skills'
import {Projects} from '../components/project/Projects'
import {Contact}  from '../components/contact/Contact'
import {Navbar}  from '../components/nav/Navbar';
import { Initial } from '../components/Initial/Initial';
import { Footer } from '../components/footer/Footer';


export const Home = () => {
  return (
   <>
      <div id='home'>
      <Navbar /> 
      <Initial/>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
      </div>
    
   </>
  )
}