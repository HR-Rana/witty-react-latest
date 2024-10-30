import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/home/Home'
import About from '../../pages/about/About'
import Services from '../../pages/services/Services'
import WhyUs from '../../pages/whyUs/whyUs'
import Team from '../../pages/team/Team'
import Contact from '../../pages/contact/Contact'
import NotFound from '../../pages/Notfound'

export default function Routing() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/wh6-choose-us" element={<WhyUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
