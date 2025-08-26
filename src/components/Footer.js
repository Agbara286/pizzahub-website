import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Footer.css"
function Footer() {
  return (
    <div
      className="footer">
      <div className='socialMedia'>
        <InstagramIcon />  
         <FacebookIcon />   
        <XIcon />  
         <GitHubIcon />
        </div>
      <p>© 2025 Agbara's pizza hub.com</p>
    </div>
  )
}

export default Footer
