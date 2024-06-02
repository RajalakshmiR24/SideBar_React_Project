import React from 'react'
import { useLocation } from 'react-router-dom'

function Contact() {
  const location = useLocation();
  return (
    <>
    <div>Contact</div>
    <p>{location.pathname}</p>
    </>
  )
}

export default Contact