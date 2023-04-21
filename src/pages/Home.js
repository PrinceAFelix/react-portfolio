import React from 'react'
import { About } from '../components/about/About';
import { Skills } from '../components/skills/Skills'
import { Projects } from '../components/project/Projects'
import { Contact } from '../components/contact/Contact'
import { Hero } from '../components/hero/hero';
import { Footer } from '../components/footer/Footer';


export const Home = () => {
  return (
    <>
      <div id='home'>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>

    </>
  )
}