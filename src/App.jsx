import { useState } from 'react'
import './App.css'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import Hero from './layouts/Hero'
import ServicesSection from './layouts/ServiceSection'

import TechnologySection from './layouts/TechnologySection'
import PortfolioSection from './layouts/PortofolioSection'
import ProcessSection from './layouts/ProcessSection'
import ContactSection from './layouts/ContactSection'


function App() {
    return (
      <>
        {/* Fixed Navbar */}
        <Navbar />
  
        <main>
          {/* Hero Section - First View */}
          <Hero/>
  
          {/* Services - Core Offerings */}
          <ServicesSection />
  
          {/* Technology - Show Expertise */}
          {/*<TechnologySection />*/}
  
          {/* Benefits - Value Proposition */}
          {/*<CTASection />*/}

          {/* Portfolio - Work Showcase */}
          <PortfolioSection />
  
          {/* Process - How We Work */}
          <ProcessSection />
  
          {/* Achievements - Social Proof */}
          {/*<div id="achievements"><TechnologySection.Achievements /></div>*/}
  
          {/* CTA - Drive Action */}
          {/*<div id="cta"><TechnologySection.CTA /></div>*/}
  
          {/* Contact - Enable Communication */}
          <ContactSection />
        </main>
  
        {/* Footer - Additional Info */}
        <Footer />
      </>
    )
  }
  
  export default App